import SecButton from "../../../../buttons/SecButton";
import Card from "../../../../global-components/card/Card";
import AtriIcon from '../../assets/atri-insight/atri-insight-icon.svg'
import RIghtArrow from '../../../../assets/icons/arrowright.svg'
import './AtriInsight.css'
import ReloadSmall from '../../../../assets/icons/reload-small.svg'

function AtriInsights({}) {
    return (
        <Card style={'f-col a-s p16 g40 atri-insight-card flex6'}>
            <div className="f-row g12">
                <img src={AtriIcon} className="atri-icon"/>
                <div className="f-col flex g6">
                    <p className="card-heading f14">Atri Insights</p>
                    <p className="atri-label">Generated insights from your analytics</p>
                </div>
                <SecButton iconLeft={ReloadSmall} />
            </div>
            <div className="f-row a-f-s g20">
                <div className=" atri-insight-block f-col g32">
                    <div className="f-row j-s-b">
                        <p className="atri-label">Stickier Traffick</p>
                        <SecButton iconLeft={RIghtArrow}/>
                    </div>
                    <p>You’ve gained 23% more users while cutting bounce rate by 23%, showing stronger engagement across the board.</p>
                </div>
                <div className=" atri-insight-block f-col g32">
                    <div className="f-row j-s-b">
                        <p className="atri-label">Better sessions, better results</p>
                        <SecButton iconLeft={RIghtArrow}/>
                    </div>
                    <p>Visitors are spending 11% more time on site, helping drive a 6% increase in conversions.</p>
                </div>
            </div>
        </Card>
    )
}

export default AtriInsights