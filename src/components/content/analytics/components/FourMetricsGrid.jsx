import { useState } from "react";
import MetricCard from "../cards/MetricCard";
import analyticsData from "../../../data/analyticsData";

const initialMetrics = Object.keys(analyticsData).slice(0, 4);

function FourMetricsGrid() {
    const [selectedMetrics, setSelectedMetrics] = useState(initialMetrics);
    const [transitioning, setTransitioning] = useState(Array(4).fill(false));

    const handleMetricChange = (index, newMetric) => {
        const newTransitioning = [...transitioning];
        newTransitioning[index] = true;
        setTransitioning(newTransitioning);

        setTimeout(() => {
            const updated = [...selectedMetrics];
            updated[index] = newMetric;
            setSelectedMetrics(updated);

            setTimeout(() => {
                newTransitioning[index] = false;
                setTransitioning([...newTransitioning]);
            }, 160); // Ensure opacity hits 0 before rendering new content
        }, 150); // Fade out
    };

    return (
        <div className="four-grid flex5 g20">
            {selectedMetrics.map((metric, i) => (
                <MetricCard
                    key={`${i}-${metric}`}
                    index={i}
                    selected={metric}
                    isFading={transitioning[i]}
                    allSelected={selectedMetrics.filter((_, idx) => idx !== i)}
                    onMetricChange={handleMetricChange}
                />
            ))}
        </div>
    );
}

export default FourMetricsGrid;
