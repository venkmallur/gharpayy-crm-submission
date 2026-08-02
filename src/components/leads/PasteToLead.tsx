import { useMemo, useState } from "react";
import { parseLead, detectZone } from "@/lib/lead-identity/parser";
import { useIdentityStore } from "@/lib/lead-identity/store";
import type { MatchResult, ParsedLeadDraft, UnifiedLead } from "@/lib/lead-identity/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ClipboardPaste, Search, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { DuplicateModal } from "./DuplicateModal";
import { DirectLeadForm } from "./DirectLeadForm";

interface Props {
  onCreated?: (lead: UnifiedLead) => void;
}

const emptyDraft = (): ParsedLeadDraft => ({
  name: "", phone: "", email: "", location: "", areas: [], fullAddress: "",
  budget: "", moveIn: "",
  type: "", room: "", need: "", specialReqs: "", inBLR: null, zone: "", rawSource: "",
});

export function PasteToLead({ onCreated }: Props) {
  const checkDuplicates = useIdentityStore((s) => s.checkDuplicates);
  const createLead = useIdentityStore((s) => s.createLead);

  const [raw, setRaw] = useState("");
  const [draft, setDraft] = useState<ParsedLeadDraft>(emptyDraft());
  const [parsed, setParsed] = useState(false);
  const [match, setMatch] = useState<MatchResult | null>(null);
  const [showModal, setShowModal] = useState(false);

  const detected = useMemo(() => ({
    name: !!draft.name, phone: !!draft.phone, email: !!draft.email,
    location: !!draft.location, budget: !!draft.budget, moveIn: !!draft.moveIn,
    zone: !!draft.zone,
  }), [draft]);

  const onParse = () => {
    const p = parseLead(raw);
    if (!p) {
      toast.error("Couldn't parse — need at least name, phone, or email.");
      return;
    }
    setDraft(p);
    setParsed(true);
    toast.success("Parsed — review fields and run duplicate check.");
  };

  const onPasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setRaw(text);
      const p = parseLead(text);
      if (p) { setDraft(p); setParsed(true); toast.success("Pasted & parsed"); }
    } catch {
      toast.error("Clipboard blocked — paste manually.");
    }
  };

  const updateField = (k: keyof ParsedLeadDraft, v: string) => {
    setDraft((d) => {
      const next = { ...d, [k]: v };
      // Re-detect zone when location/raw changes
      if (k === "location") {
        next.zone = detectZone(`${v} ${d.rawSource}`);
      }
      return next;
    });
  };

  const onCheckAndSave = () => {
    const r = checkDuplicates(draft);
    setMatch(r);
    setShowModal(true);
  };

  const onForceCreate = () => {
    const lead = createLead(draft);
    toast.success(`Lead created · ULID ${lead.ulid.slice(0, 12)}…`);
    setShowModal(false);
    setRaw(""); setDraft(emptyDraft()); setParsed(false); setMatch(null);
    onCreated?.(lead);
  };

  const onUseExisting = (lead: UnifiedLead) => {
    toast.info(`Opening existing lead: ${lead.name}`);
    setShowModal(false);
    onCreated?.(lead);
  };

  const Dot = ({ on }: { on: boolean }) => (
    <span className={`inline-block h-1.5 w-1.5 rounded-full mr-1.5 ${on ? "bg-primary" : "bg-muted-foreground/30"}`} />
  );

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-card p-4 space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div>
            <h3 className="font-semibold text-sm flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" /> Paste lead
            </h3>
            <p className="text-[11px] text-muted-foreground">WhatsApp form, plain text, spreadsheet row — anything works.</p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="h-8 text-xs gap-1" onClick={onPasteFromClipboard}>
              <ClipboardPaste className="h-3.5 w-3.5" /> Paste
            </Button>
            <Button size="sm" className="h-8 text-xs" onClick={onParse} disabled={!raw.trim()}>
              Parse
            </Button>
          </div>
        </div>
        <Textarea
          value={raw}
          onChange={(e) => setRaw(e.target.value)}
          placeholder={`Paste anything…\n\n📝 GHARPAYY FORM\nName: Rahul Sharma\nPhone: 9876543210\nLocation: Koramangala\nBudget: 8-12k\nMove-in: 1 May`}
          className="min-h-32 font-mono text-xs"
        />
      </div>
      {parsed && (
        <div className="mt-4 animate-in slide-in-from-bottom-2 fade-in duration-300">
          <div className="mb-3 flex items-center gap-2 text-sm text-primary font-medium">
            <CheckCircle2 className="h-4 w-4" /> Parsed successfully. Please review and save.
          </div>
          <DirectLeadForm 
            initialDraft={draft} 
            onCreated={(lead) => {
              setRaw("");
              setDraft(emptyDraft());
              setParsed(false);
              onCreated?.(lead);
            }} 
          />
        </div>
      )}
    </div>
  );
}
