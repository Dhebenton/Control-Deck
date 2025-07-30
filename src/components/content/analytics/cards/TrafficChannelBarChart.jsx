import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import Card from "../../../global-components/card/Card";

const data = [
  { name: "Organic", primary: 28 },
  { name: "Paid", primary: 16 },
  { name: "Referrals", primary: 14 },
  { name: "Display Ads", primary: 13 },
  { name: "Social", primary: 17 },
  { name: "Email", primary: 12 },
];

const TrafficChannelBarChart = () => {
  return (
    <Card style="flex11 p16 f-col g36">
      <p className="card-heading f14">Traffic Channel</p>
      <div style={{ width: "100%", height: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={data}  barCategoryGap="10%" barGap={0}>
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              className="chart-ticker"
              stroke="#333"
              height={15}
            />
            <YAxis
              domain={[10, 35]}
              ticks={[10, 15, 20, 25, 30]}
              tick={{ fontSize: 12 }}
              className="chart-ticker"
              stroke="#333"
              axisLine={false}
              tickLine={false}
              unit="%"
              width={28}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              content={({ active, payload }) => {
                if (!active || !payload || !payload.length) return null;
                const { name, primary } = payload[0].payload;
                return (
                  <div className="chart-tooltip f-col g12">
                    <p className="tooltip-label">{name}</p>
                    <p className="tooltip-key-label">Traffic: <span>{primary}%</span></p>
                  </div>
                );
              }}
            />
            <Bar
              dataKey="primary"
              fill="#0072F5"
              radius={[8, 8, 0, 0]}
              barSize={40}
              opacity={0.8}
              activeBar={{ opacity: 1, transition: "opacity 0.15s ease" }}
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default TrafficChannelBarChart;
