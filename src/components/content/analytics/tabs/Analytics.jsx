import ButtonFilter from "../../../buttons/ButtonFilter";
import Calendar from '../../../assets/icons/calendar.svg'
import AtriIcon from '../../../assets/icons/atri.svg'
import Lightbulb from '../../../assets/icons/bulb.svg' 
import Share from '../../../assets/icons/share.svg'
import SecButton from "../../../buttons/SecButton";
import FourMetricsGrid from "../components/FourMetricsGrid";
import AtriInsights from "../../atri/card/atri-insights/AtriInsights";
import LineChartMain from "../cards/LineChartMain";
import '../Anlytics.css'
import WorldChart from "../cards/WorldChart";
import Card from "../../../global-components/card/Card";
import PieChartMain from "../cards/PieChart";

function Analytics({ handleSidePanel }) {
    return (
        <div className="content f-col g52">
            <div className="f-row g6">
                <div className="f-row g8 flex">
                    <ButtonFilter iconLeft={Calendar} style={'g10 m4'} text={'Last Month'} />
                    <ButtonFilter text={'Add Comparison'} />
                    <ButtonFilter text={'Add Filter'} />
                </div>
                <SecButton click={handleSidePanel} iconLeft={AtriIcon} />
                <SecButton click={handleSidePanel} iconLeft={Lightbulb} />
                <SecButton click={handleSidePanel} iconLeft={Share} />
            </div>
            <div className="f-col g14">
                <div className="wrap f-row g14 a-s">
                    <FourMetricsGrid />
                    <AtriInsights cardStyle={'min-w700'} />
                </div>
                <LineChartMain />
                <WorldChart />
                <div className="f-row g14">
                    <PieChartMain />
                    <Card style={'flex9 p16'}/>
                    <Card style={'flex6 p16'}/>
                </div>
            </div>
        </div>
    )
}

export default Analytics