import ButtonFilter from "../../../buttons/ButtonFilter";
import Calendar from '../../../assets/icons/calendar.svg'
import AtriIcon from '../../../assets/icons/atri.svg'
import Lightbulb from '../../../assets/icons/bulb.svg' 
import Share from '../../../assets/icons/share.svg'
import SecButton from "../../../buttons/SecButton";
import FourMetricsGrid from "../components/FourMetricsGrid";
import AtriInsights from "../../atri/card/atri-insights/AtriInsights";

function Analytics({}) {
    return (
        <div className="content f-col g52">
            <div className="f-row g6">
                <div className="f-row g8 flex">
                    <ButtonFilter iconLeft={Calendar} style={'g10 m4'} text={'Last Month'} />
                    <ButtonFilter text={'Add Comparison'} />
                    <ButtonFilter text={'Add Filter'} />
                </div>
                <SecButton iconLeft={AtriIcon} />
                <SecButton iconLeft={Lightbulb} />
                <SecButton iconLeft={Share} />
            </div>
            <div className="f-col g20">
                <div className="f-row g20 a-s">
                    <FourMetricsGrid />
                    <AtriInsights />
                </div>
            </div>
        </div>
    )
}

export default Analytics