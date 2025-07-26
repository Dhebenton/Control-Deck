import SecButton from "../buttons/SecButton";
import { useUndoState } from "../../UndoContext";
import MenuIcon from "./MenuIcon";
import Reload from '../assets/icons/reload.svg'
import FullScreen from '../assets/icons/fullscreen.svg'
import Button from '../buttons/Button'
import DropdownButton from '../buttons/DropdownButton'
import './Menu.css'
import OpenPanel from '../assets/icons/openpanel.svg'
import Toolbar from "./dropdown-menus/Toolbar";

function Menu({ handlePanelClose, menuOpen}) {
    const { panelTab } = useUndoState();
    const currentTab = panelTab.present;

    return (
        <div className="menu f-row g12">
            <div className="f-row flex">
                <div className={`menu-button-wrap ${menuOpen ? 'open' : ''}`}>
                    <SecButton iconLeft={OpenPanel} click={handlePanelClose} />
                </div>
                <MenuIcon />
                {currentTab}
            </div>
            <div className="f-row g8">
                <Button style={'icon'} iconLeft={Reload} />
                <Button style={'icon'} iconLeft={FullScreen} />
            </div>
            <Button text={'Go Back'} />
            <div className="f-row g8">
                <Toolbar />
                <DropdownButton style={'green'} text={'Published'}/>
            </div>
        </div>
    )
}

export default Menu