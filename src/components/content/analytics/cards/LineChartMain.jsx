import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useState } from 'react';
import { chartData as rawData } from '../../../data/chartData';
import Card from '../../../global-components/card/Card';

const chartData = rawData.map((d, i, arr) => {
  const previous = arr[i - 1];
  const percentage = d.total > 0 ? Math.round((d.unique / d.total) * 100) : 0;
  const changeFromLast =
    previous && previous.total > 0
      ? Math.round(((d.total - previous.total) / previous.total) * 100)
      : 0;
  return {
    ...d,
    percentage,
    changeFromLast,
  };
});

const latest = chartData[chartData.length - 1];
const positive = latest.changeFromLast >= 0;
const rawMax = Math.max(...chartData.map((d) => d.percentage));
const paddedMax = Math.min(100, rawMax * 1.35);
const percentageTicks = Array.from({ length: 8 }, (_, i) =>
  Math.round((i * paddedMax) / 7)
);

const CustomCursor = () => <></>;

const AnimatedDot = ({ cx, cy, fill }) => {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={4}
      fill={fill}
      style={{
        transition: 'all 0.2s ease',
        pointerEvents: 'none',
      }}
    />
  );
};

function OverlayDotGrid({ xTicks = 12, yTicks = 8, hoveredMonth }) {
  const monthIndexMap = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  };
  const highlightIndex = monthIndexMap[hoveredMonth];

  return (
    <svg
      className="ws"
      style={{
        position: 'absolute',
        top: 0,
        left: 35,
        width: 'calc(100% - 65px)',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 5,
      }}
    >
      {Array.from({ length: xTicks }).map((_, i) =>
        Array.from({ length: yTicks }).map((_, j) => (
          <rect
            key={`dot-${i}-${j}`}
            x={`${((i + 0.14 + i * 0.04) / xTicks) * 100}%`}
            y={`${((j + 0.13) / yTicks) * 100}%`}
            width={3}
            height={3}
            rx={1.5}
            ry={1.5}
            fill="#fff"
            opacity={i === highlightIndex ? 0.15 : 0.03}
            style={{ transition: 'opacity 0.2s ease' }}
            transform="translate(-1.5,-1.5)"
          />
        ))
      )}
    </svg>
  );
}

export default function LineChartMain() {
  const [hoveredMonth, setHoveredMonth] = useState(null);

  return (
    <Card style="p24 f-col g36">
      <p className="card-heading f14">Traffic Overview</p>
      <div className="f-row j-f-b g24">
        <div className="f-col flex g14">
          <p className="f26 metric-label">{latest.total.toLocaleString()}</p>
          <p className={`f15 change-from-last ${positive ? 'positive' : 'neg'}`}>
            {positive ? '+' : '-'}
            {Math.abs(latest.changeFromLast)}% <span>From Last Month</span>
          </p>
        </div>
        <div className="f-row g8">
          <div className="index-key"></div>
          <p className="index-key-label">Total Visitors</p>
        </div>
        <div className="f-row g8">
          <div className="index-key shade2"></div>
          <p className="index-key-label">Unique Visitors</p>
        </div>
      </div>
      <div
        style={{ position: 'relative', width: '100%', height: 400 }}
        tabIndex={-1}
        className="chart-wrapper"
      >
        <OverlayDotGrid hoveredMonth={hoveredMonth} />
        <ResponsiveContainer width="100%" height="100%" tabIndex={-1}>
          <AreaChart
            data={chartData}
            cursor={<CustomCursor />}
            onMouseLeave={() => setHoveredMonth(null)}
          >
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
              width={41}
              className="chart-ticker"
              tick={{ dx: 6 }}
              tickFormatter={(v) => `${v}%`}
              domain={[0, paddedMax]}
              ticks={percentageTicks}
            />

            <Tooltip
              cursor={false}
              content={({ label, payload, active }) => {
                if (!active || !payload || payload.length === 0) return null;
                if (label !== hoveredMonth) setHoveredMonth(label);

                const monthMap = {
                  Jan: 'January', Feb: 'February', Mar: 'March', Apr: 'April',
                  May: 'May', Jun: 'June', Jul: 'July', Aug: 'August',
                  Sep: 'September', Oct: 'October', Nov: 'November', Dec: 'December',
                };

                const total = payload.find((p) => p.dataKey === 'total')?.value || 0;
                const unique = payload.find((p) => p.dataKey === 'percentage')?.payload?.unique || 0;
                const percentage = total > 0 ? Math.round((unique / total) * 100) : 0;

                return (
                  <div className="chart-tooltip f-col g16">
                    <p className="tooltip-label">{monthMap[label] || label}</p>
                    <div className="f-col g12">
                      <div className="f-row g8">
                        <div className="index-key"></div>
                        <p className="tooltip-key-label">
                          Total Visitors: <span>{total.toLocaleString()}</span>
                        </p>
                      </div>
                      <div className="f-row g8">
                        <div className="index-key shade2"></div>
                        <p className="tooltip-key-label">
                          Unique Visitors: <span>{unique.toLocaleString()} ({percentage}%)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }}
            />

            <Area
              type="monotone"
              dataKey="total"
              stroke="#0072F5"
              fill="url(#totalGradient)"
              strokeWidth={2}
              dot={false}
              activeDot={<AnimatedDot fill="#0072F5" />}
            />
            <Area
              type="monotone"
              dataKey="percentage"
              yAxisId="right"
              stroke="#A020F0"
              fill="url(#uniqueGradient)"
              strokeWidth={2}
              dot={false}
              activeDot={<AnimatedDot fill="#A020F0" />}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}