import { useState } from "react";
import Menu from "../menu/Menu";
import Panel from "../panel/Panel";
import './Canvas.css'
import { useUndoState } from "../../UndoContext";
import AnalyticsContent from "./content/AnalyticsContent";

function Canvas({}) {
    const { navigationTab } = useUndoState();
    const currentNav = navigationTab.present;

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

    return (
        <div className="canvas flex f-row a-s">
            <Panel panelOpen={panelOpen} handlePanelClose={handlePanelClose} />
            <div className="flex content-wrap">
                <Menu menuOpen={menuOpen} handlePanelClose={handlePanelClose} />
                { currentNav === 'Analytics' && <AnalyticsContent /> }
            </div>
        </div>
    )
}

export default Canvas