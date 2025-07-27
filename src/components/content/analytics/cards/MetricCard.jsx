import Card from "../../../global-components/card/Card";
import ThreeDots from '../../../assets/icons/threedots.svg';
import SecButton from "../../../buttons/SecButton";
import MetricsCardDropdown from "../components/dropdown-menus/MetricsCardDropdown";
import analyticsData from "../../../data/analyticsData";

function MetricCard({ index, selected, allSelected, onMetricChange, isFading }) {
    const data = analyticsData[selected];
    const latest = data.daily.at(-1);
    const past = data.daily[0];
    const changeRaw = latest - past;
    const change = ((changeRaw / past) * 100).toFixed(1);

    const isNegativeBetter = selected === "Bounce Rate";
    const positive = isNegativeBetter ? changeRaw < 0 : changeRaw > 0;

    let displayValue;
    if (data.unit === "%") {
        displayValue = `${latest.toFixed(2)}%`;
    } else if (data.unit === "s") {
        displayValue = `${Math.floor(latest / 60)}m ${Math.floor(latest % 60)}s`;
    } else {
        displayValue = latest.toFixed(1);
    }

    return (
        <Card style={`g20 metrics-card f-col p16 ${isFading ? "fade" : ""}`}>
            <div className="f-row j-s-b">
                <MetricsCardDropdown
                    selected={selected}
                    availableMetrics={allSelected}
                    onSelect={(newMetric) => onMetricChange(index, newMetric)}
                />
                <SecButton iconLeft={ThreeDots} />
            </div>
            <p className="metric-label">{displayValue}</p>
            <p className={`change-from-last ${positive ? "positive" : "neg"}`}>
                {positive ? "+" : "-"}{Math.abs(change)}% <span>From Last Year</span>
            </p>
        </Card>
    );
}

export default MetricCard;
