import { useMemo } from 'react';
import { useAppState } from '@/myt/lib/app-context';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Flame } from 'lucide-react';

export function DemandHeatmap() {
  const { leads } = useAppState();

  const data = useMemo(() => {
    if (!leads.length) return [];
    
    const demandByArea: Record<string, number> = {};
    leads.forEach(lead => {
      const area = lead.area || lead.zone || 'Unknown';
      demandByArea[area] = (demandByArea[area] || 0) + 1;
    });

    return Object.entries(demandByArea)
      .map(([area, count]) => ({ area, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5); // Top 5 areas
  }, [leads]);

  if (data.length === 0) return null;

  return (
    <div className="glass-card p-4 flex flex-col h-[300px]">
      <div className="flex items-center gap-2 mb-4">
        <Flame className="h-4 w-4 text-orange-500" />
        <h3 className="text-sm font-semibold text-foreground">Lead Demand Heatmap</h3>
      </div>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <XAxis type="number" hide />
            <YAxis 
              dataKey="area" 
              type="category" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} 
              width={100}
            />
            <Tooltip 
              cursor={{ fill: 'hsl(var(--muted)/0.4)' }}
              contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px', fontSize: '12px' }}
            />
            <Bar dataKey="count" radius={[0, 4, 4, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`hsl(var(--primary) / ${0.5 + (0.5 * (data.length - index) / data.length)})`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
