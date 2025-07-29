import SecButton from '../../../buttons/SecButton'
import Atri from '../atri-chat/assets/atri/atri.svg'
import ClosePanel from '../../../assets/icons/close-panel.svg'
import AtriIcon from '../atri-chat/assets/atri/atri-icon.svg'
import Plus from '../../../assets/icons/plus.svg'
import Scissors from '../../../assets/icons/sciccors.svg'
import Plane from '../../../assets/icons/plane.svg'

function AtriChat({ handleSidePanel }) {
    return (
        <div className="sidepanel-content f-col g32">
            <div className="f-row j-s-b">
                <div className="f-row g12">
                    <img src={Atri} />
                    <p>Atri Chat</p>
                </div>
                <SecButton iconLeft={ClosePanel} click={handleSidePanel}/>
            </div>
            <div className="g36 f-col h100 j-c">
                <div className="f-col a-c g12">
                    <img src={AtriIcon} className='atri-icon'/>
                    <p className="atri-heading">Good Evening CocoBean,<br />Ask me about your site’s analytics</p>
                </div>
                <div className="atri-input f-col g8">
                    <div className="f-row j-s-b">
                        <SecButton style={'plus'} iconLeft={Plus} />
                        <SecButton iconLeft={Scissors} />
                    </div>
                    <div className="atri-input-form f-row j-s-b">
                        <input placeholder='Ask Your Question' type="text" className='atri-input-field'/>
                        <SecButton iconLeft={Plane} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AtriChat