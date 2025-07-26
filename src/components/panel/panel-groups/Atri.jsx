import { useUndoState } from "../../../UndoContext";
import AtriIcon from './icons/atri.svg'
import Paper from './icons/paper.svg'
import Search from './icons/searchcircle.svg'
import ClipBoard from './icons/clip-board.svg'
import OpenFolder from './icons/folder-open.svg'
import Gear from './icons/gear.svg'
import React from "react";

const tabs = [
    { id: 'Blog Generator', icon: Paper, group: 'Content Generator' },
    { id: 'Metadata Assistant', icon: Search, group: 'Content Generator' },
    { id: 'Insight Reports', icon: ClipBoard, group: 'Content Generator' },
    { id: 'Saved Replies', icon: OpenFolder, group: 'Settings & Configuration' },
    { id: 'Atri Settings', icon: Gear, group: 'Settings & Configuration' }
];

function Atri({}) {
    const { panelTab, setPanelTab } = useUndoState();
    const currentTab = panelTab.present;

    const groups = tabs.reduce((acc, tab) => {
        if (!acc[tab.group]) acc[tab.group] = [];
        acc[tab.group].push(tab);
        return acc;
    }, {});

    return (
        <div className="f-col g6">
            <button onClick={() => setPanelTab('Atri')} className={`panel-tab g12 ${currentTab === 'Atri' ? ' active' : ''}`}>
                <img src={AtriIcon} />
                <p>Atri</p>
                <div></div>
            </button>
            {Object.entries(groups).map(([groupName, groupTabs]) => (
                <React.Fragment key={groupName}>
                    <p className="panel-label">{groupName}</p>
                    {groupTabs.map((tab, i) => {
                        const isActive = currentTab === tab.id;
                        return (
                            <button
                                key={i}
                                className={`panel-tab g12 ${isActive ? ' active' : ''}`}
                                onClick={() => setPanelTab(tab.id)}
                            >
                                <img src={tab.icon} />
                                <p>{tab.id}</p>
                                <div></div>
                            </button>
                        );
                    })}
                </React.Fragment>
            ))}
        </div>
    );
}

export default Atri;