"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";

export default function Discoveries() {
  // Mock data for Environmental Kuznets Curve
  // Peaking at HDI = 0.80
  const data = [
    { hdi: 0.50, methane: 20 },
    { hdi: 0.55, methane: 35 },
    { hdi: 0.60, methane: 55 },
    { hdi: 0.65, methane: 72 },
    { hdi: 0.70, methane: 85 },
    { hdi: 0.75, methane: 95 },
    { hdi: 0.80, methane: 100 }, // Peak
    { hdi: 0.85, methane: 90 },
    { hdi: 0.90, methane: 70 },
    { hdi: 0.95, methane: 45 },
  ];

  return (
    <div className="flex flex-col space-y-6">
      <h2 className="text-4xl font-bebas text-rdr-text-active uppercase border-b-2 border-rdr-red pb-2 mb-2 inline-block w-max">
        Discoveries
      </h2>
      <p className="font-special italic text-gray-400 mb-2">
        Records of empirical investigations and analytical revelations...
      </p>

      <div className="bg-[#1a1a1a]/80 p-6 rounded border border-[#333]">
        <h3 className="text-2xl font-bebas text-rdr-text-active uppercase mb-2">
          Environmental Economics: Methane-Socioeconomic Nexus
        </h3>
        <p className="font-bebas text-rdr-red mb-4 tracking-wider uppercase text-sm">
          Award: Consolation Prize
        </p>
        <p className="font-special text-rdr-text mb-6">
          An investigation into the relationship between human development and methane emissions, demonstrating the presence of an Environmental Kuznets Curve peaking at a Human Development Index (HDI) of 0.80.
        </p>

        <div className="h-64 w-full mt-4 font-special">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
              <XAxis 
                dataKey="hdi" 
                stroke="#888" 
                tick={{ fill: '#888', fontFamily: 'var(--font-special)' }}
                label={{ value: 'Human Development Index (HDI)', position: 'insideBottom', offset: -15, fill: '#888', fontFamily: 'var(--font-special)' }}
              />
              <YAxis 
                stroke="#888" 
                tick={{ fill: '#888', fontFamily: 'var(--font-special)' }}
                label={{ value: 'Methane Emissions', angle: -90, position: 'insideLeft', fill: '#888', fontFamily: 'var(--font-special)' }}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#111', borderColor: '#CC0000', fontFamily: 'var(--font-special)', color: '#fff' }}
                itemStyle={{ color: '#CC0000' }}
                labelStyle={{ color: '#888' }}
              />
              <ReferenceLine x={0.80} stroke="#CC0000" strokeDasharray="3 3" label={{ position: 'top', value: 'Peak', fill: '#CC0000', fontFamily: 'var(--font-special)' }} />
              <Line 
                type="monotone" 
                dataKey="methane" 
                stroke="#CC0000" 
                strokeWidth={3}
                dot={{ fill: '#CC0000', stroke: '#111', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: '#fff', stroke: '#CC0000' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
