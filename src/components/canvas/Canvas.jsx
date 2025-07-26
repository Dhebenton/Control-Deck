import { useState } from "react";
import Menu from "../menu/Menu";
import Panel from "../panel/Panel";
import './Canvas.css'

function Canvas({}) {
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
            <div className="flex">
                <Menu menuOpen={menuOpen} handlePanelClose={handlePanelClose} />
            </div>
        </div>
    )
}

export default Canvas