import { useState } from "react";
import Menu from "../menu/Menu";
import Panel from "../panel/Panel";
import './Canvas.css'
import { useUndoState } from "../../UndoContext";
import AnalyticsContent from "./content/AnalyticsContent";
import './Sidepanel.css'
import AtriChat from "./sidepanels/atri-chat/AtriChat";

function Canvas({}) {
    const { navigationTab } = useUndoState();
    const currentNav = navigationTab.present;

    const [ sidePanel, setSidePanel ] = useState(false)
    const [ sidePanelTransition, setSidePanelTransition ] = useState(true)

    const [ panelOpen, setPanelOpen ] = useState(true)
    const [ menuOpen, setMenuOpen ] = useState(false)

    function handlePanelClose() {
        if (panelOpen) {
            setPanelOpen(false)
            setTimeout(() => setMenuOpen(true), 300)
        } else {
            setMenuOpen(false)
            setTimeout(() => setPanelOpen(true), 180)
        }
    }

    function handleSidePanel() {
        if (sidePanel) {
            setSidePanelTransition(true)
            setTimeout(() => setSidePanel(false), 300)
        } else {
            setTimeout(() => setSidePanelTransition(false), 1)
            setSidePanel(true)
        }
    }

    return (
        <div className="canvas flex f-row a-s">
            
            <Panel panelOpen={panelOpen} handlePanelClose={handlePanelClose} />
            <div className="flex">
                <Menu menuOpen={menuOpen} handlePanelClose={handlePanelClose} />
                
                <div className="f-row dashboard a-s">
                    { currentNav === 'Analytics' && <AnalyticsContent handleSidePanel={handleSidePanel} /> }
                    { sidePanel === true &&
                        <div className={`sidepanel ${sidePanelTransition ? 'transition' : ''}`}>
                            <AtriChat handleSidePanel={handleSidePanel}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Canvas