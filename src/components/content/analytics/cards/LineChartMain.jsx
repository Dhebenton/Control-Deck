import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { chartData as rawData } from '../../../data/chartData';
import Card from '../../../global-components/card/Card';

const chartData = rawData.map((d) => ({
  ...d,
  percentage: d.total > 0 ? Math.round((d.unique / d.total) * 100) : 0,
}));

const rawMax = Math.max(...chartData.map(d => d.percentage));
const paddedMax = Math.min(100, rawMax * 1.3);
const percentageTicks = Array.from({ length: 8 }, (_, i) =>
  Math.round((i * paddedMax) / 7)
);


function OverlayDotGrid({ xTicks = 12, yTicks = 8 }) {
  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 23,
        width: 'calc(100% - 46px)',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 5,
      }}
    >
      {Array.from({ length: xTicks }).map((_, i) =>
        Array.from({ length: yTicks }).map((_, j) => (
          <rect
            key={`dot-${i}-${j}`}
            x={`${((i + 0.28 + i * 0.06) / xTicks) * 100}%`}
            y={`${((j + 0.18) / yTicks) * 100}%`}
            width={3}
            height={3}
            rx={1.5}
            ry={1.5}
            fill="#fff"
            opacity={0.03}
            transform="translate(-1.5,-1.5)"
          />
        ))
      )}
    </svg>
  );
}

export default function LineChartMain() {
  return (
    <Card style="p24 f-col g40">
      <p className="card-heading f14">Traffic Overview</p>
      <div style={{ position: 'relative', width: '100%', height: 400 }}>
        <OverlayDotGrid />
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="totalGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#122234" stopOpacity={1} />
                <stop offset="100%" stopColor="#121212" stopOpacity={1} />
              </linearGradient>
              <linearGradient id="uniqueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#261B30" stopOpacity={1} />
                <stop offset="100%" stopColor="#121212" stopOpacity={1} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="month"
              stroke="#333"
              axisLine={false}
              tickLine={false}
              tickMargin={20}
              height={31}
              padding={{ left: 20, right: 20 }}
              className="chart-ticker"
            />

            <YAxis
              stroke="#333"
              tickCount={8}
              axisLine={false}
              tickLine={false}
              width={23}
              className="chart-ticker"
              tickMargin={0}
              tick={{
                textAnchor: 'start',
                dx: -23,
              }}
              tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : v)}
            />

            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#333"
              axisLine={false}
              tickLine={false}
              width={30}
              className="chart-ticker"
              tick={{ dx: 6, fill: '#A020F0' }}
              tickFormatter={(v) => `${v}%`}
              domain={[0, paddedMax]}
              ticks={percentageTicks}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: '#1A1A1A',
                border: 'none',
                color: '#FFF',
              }}
              labelStyle={{ color: '#AAA' }}
            />

            <Area
              type="monotone"
              dataKey="total"
              stroke="#0072F5"
              fill="url(#totalGradient)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="percentage"
              yAxisId="right"
              stroke="#A020F0"
              fill="url(#uniqueGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
