import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Card from "../../../global-components/card/Card";
import { trafficDeviceData } from "../../../data/trafficDevices";
import { useState } from "react";

const COLORS = ["#0072F5", "#9E41F6", "#689DD9"];

const PieChartMain = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Card style="flex4 p16 f-col g36 pie-chart">
      <p className="card-heading f14">Traffic By Device</p>

      <div style={{ width: "100%", padding: "0 16px" }}>
        <div style={{ width: "100%", aspectRatio: "1" }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={trafficDeviceData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius="65%"
                outerRadius="100%"
                cornerRadius={5}
                paddingAngle={3}
                onMouseLeave={() => setActiveIndex(null)}
                onMouseEnter={(_, index) => setActiveIndex(index)}
              >
                {trafficDeviceData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    fillOpacity={activeIndex === index ? 1 : 0.8}
                    style={{ transition: "fill-opacity 0.15s ease" }}
                  />
                ))}
              </Pie>
              <Tooltip
                    cursor={false}
                    content={({ payload, active }) => {
                        if (!active || !payload || !payload.length) return null;
                        const { name, value, percentage } = payload[0].payload;
                        
                        return (
                        <div className="chart-tooltip f-col g16">
                            <p className="tooltip-label">{name}</p>
                            <div className="f-row g6">
                            <div className={`index-key ${
                                name === 'Mobile' ? 'shade2' : name === 'Tablet' ? 'shade3' : ''
                            }`}></div>
                            <p className="tooltip-key-label">
                                Traffic: <span>{value.toLocaleString()} ({percentage}%)</span>
                            </p>
                            </div>
                        </div>
                        );
                    }}
                />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="f-row g4">
        {trafficDeviceData.map((entry, index) => (
          <div
            key={entry.name}
            className={`f-col flex pie-chart-data-block g10 ${activeIndex === index ? "active" : ""}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="f-row g8">
              <div
                className="index-key"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></div>
              <p className="tooltip-key-label">{entry.name}</p>
            </div>
            <p className="metric-label f16 pad-lef16">{entry.percentage}%</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PieChartMain;
