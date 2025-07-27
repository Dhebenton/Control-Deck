import Card from "../../../global-components/card/Card";
import ThreeDots from '../../../assets/icons/threedots.svg';
import SecButton from "../../../buttons/SecButton";
import MetricsCardDropdown from "../components/dropdown-menus/MetricsCardDropdown";
import analyticsData from "../../../data/analyticsData";

function MetricCard({ index, selected, allSelected, onMetricChange, isFading }) {
    const data = analyticsData[selected];
    const latest = data.daily.at(-1);
    const past = data.daily[0];
    const rawChange = latest - past;
    const percentageChange = ((rawChange / past) * 100).toFixed(1);
    const numericChange = parseFloat(percentageChange);

    const isBounceRate = selected === "Bounce Rate";
    const positive = isBounceRate ? numericChange < 0 : numericChange >= 0;

    let displayValue = data.unit === "%" 
        ? `${latest.toFixed(2)}%` 
        : data.unit === "s" 
        ? `${Math.floor(latest / 60)}m ${Math.floor(latest % 60)}s` 
        : latest.toFixed(1);

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
            <p className={`change-from-last ${selected === "Bounce Rate" ? (positive ? "neg" : "positive") : (positive ? "positive" : "neg")}`}>
                {positive ? "+" : "-"}{Math.abs(numericChange)}% <span>From Last Year</span>
            </p>
        </Card>
    );
}

export default MetricCard;

