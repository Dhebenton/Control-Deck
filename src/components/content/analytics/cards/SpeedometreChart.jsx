import Card from "../../../global-components/card/Card";
import Speedometre from '../assets/speedometre-chart/speedometre-chart.svg'

function SpeedoemtreChart({}) {
    return (
        <Card style={'flex8 p16 growth-tracker f-row a-s'} >
            <div className="f-col j-s-b">
                <p className="card-heading f14">Traffic Overview</p>
                <div className="f-col g20">
                    <div className="algo-label">Total Users</div>
                    <p className="algo-heading">24,596</p>
                    <p className="change-from-last f16">+23% <span>From last year</span></p>
                </div>
                <p className="algo-text">Growth Score uses our own algorithm to track real performance. Curious how it works? Learn more.</p>
            </div>
            <div className="algo-chart-wrap">
                <img src={Speedometre} />
                <p className="gouge-chart-metric">80%</p>
                <div>
                    <div className="speed-gauge"></div>
                </div>
            </div>
        </Card>

    )
}

export default SpeedoemtreChart