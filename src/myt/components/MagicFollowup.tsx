import { useState } from 'react';
import { Lead } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Send, Copy } from 'lucide-react';
import { toast } from 'sonner';

export function MagicFollowup({ lead }: { lead: Lead }) {
  const [draft, setDraft] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      let msg = `Hi ${lead.name.split(' ')[0]},\n\n`;
      
      if (lead.stage === 'new') {
        msg += `I noticed you're looking for a property in ${lead.preferredArea || 'Bangalore'} within ₹${lead.budget}/mo. We have some great new options that just opened up that match your criteria perfectly.\n\nWhen would be a good time for a quick call or tour?`;
      } else if (lead.stage === 'tour-scheduled' || lead.stage === 'tour-done') {
        msg += `Following up on your property search in ${lead.preferredArea}. Given your interest in properties around ₹${lead.budget}/mo, I've shortlisted 2 exclusive options that fit your exact needs and have high demand right now.\n\nAre you available tomorrow to finalize?`;
      } else if (lead.stage === 'negotiation') {
        msg += `I wanted to personally reach out regarding the property we discussed. I've spoken with the owner, and if we can lock this in today, I can offer you a special onboarding bonus for the ${lead.preferredArea} location.\n\nLet's get this closed.`;
      } else {
        msg += `Just checking in on your property search. We have a few newly listed premium rooms in ${lead.preferredArea || 'your desired area'} that might be exactly what you're looking for.\n\nLet me know if you're still looking!`;
      }

      msg += `\n\nBest,\nGharpayy Team`;
      
      setDraft(msg);
      setIsGenerating(false);
    }, 600);
  };

  const copy = async () => {
    if (!draft) return;
    await navigator.clipboard.writeText(draft);
    toast.success('Magic follow-up copied to clipboard!');
  };

  const sendWa = () => {
    if (!draft) return;
    const url = `https://wa.me/91${lead.phone}?text=${encodeURIComponent(draft)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    toast.success('Opened WhatsApp');
  };

  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-3 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5" />
          Smart AI Follow-up
        </h4>
        <Button size="sm" onClick={generate} disabled={isGenerating} className="h-7 text-[10px] bg-primary text-primary-foreground">
          {isGenerating ? 'Generating...' : 'Generate Personalized Message'}
        </Button>
      </div>
      
      {draft && (
        <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
          <Textarea 
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            className="min-h-[120px] text-xs leading-relaxed border-primary/20 focus-visible:ring-primary"
          />
          <div className="flex gap-2">
            <Button size="sm" variant="default" onClick={sendWa} className="h-7 text-[10px] gap-1 flex-1">
              <Send className="h-3 w-3" /> Send via WhatsApp
            </Button>
            <Button size="sm" variant="outline" onClick={copy} className="h-7 text-[10px] gap-1">
              <Copy className="h-3 w-3" /> Copy
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
