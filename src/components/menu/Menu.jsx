import { useEffect } from 'react';
import SecButton from "../buttons/SecButton";
import Button from '../buttons/Button';
import DropdownButton from '../buttons/DropdownButton';
import Toolbar from "./dropdown-menus/Toolbar";
import MenuIcon from "./MenuIcon";
import { useUndoState } from "../../UndoContext";

import Reload from '../assets/icons/reload.svg';
import FullScreen from '../assets/icons/fullscreen.svg';
import OpenPanel from '../assets/icons/openpanel.svg';

import './Menu.css';

function Menu({ handlePanelClose, menuOpen }) {
    const {
        panelTab,
        undoNavigation,
        redoNavigation,
        undoPanel,
        redoPanel
    } = useUndoState();

    const currentTab = panelTab.present;

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.key === 'z' && !e.shiftKey) {
                e.preventDefault();
                undoNavigation();
                undoPanel();
            }
            if (e.ctrlKey && e.key.toLowerCase() === 'z' && e.shiftKey) {
                e.preventDefault();
                redoNavigation();
                redoPanel();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [undoNavigation, redoNavigation, undoPanel, redoPanel]);

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
                <Button style="icon" iconLeft={Reload} />
                <Button
                    style="icon"
                    iconLeft={FullScreen}
                    click={() => {
                        const elem = document.documentElement;
                        if (!document.fullscreenElement) {
                            elem.requestFullscreen?.();
                        } else {
                            document.exitFullscreen?.();
                        }
                    }}
                />
            </div>
            <Button text="Go Back" click={() => {
                undoNavigation();
                undoPanel();
            }} />
            <div className="f-row g8">
                <Toolbar />
                <DropdownButton style="green" text="Published" />
            </div>
        </div>
    );
}

export default Menu;
