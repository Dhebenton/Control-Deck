import { useUndoState } from "../../../UndoContext";
import Backups from './icons/squaresround.svg'
import Reset from './icons/reload.svg'
import Calendar from './icons/calendar.svg'
import Squares from './icons/squares.svg'
import Folder from './icons/folder-open.svg'
import Gear from './icons/gear.svg'
import React from "react";

const tabs = [
    { id: 'Manual Backup', icon: Reset, group: 'Backup Actions' },
    { id: 'Backup Schedule', icon: Calendar, group: 'Backup Actions' },
    { id: 'Restore Points', icon: Squares, group: 'Recovery & History' },
    { id: 'Backup Logs', icon: Folder, group: 'Recovery & History' },
    { id: 'Backup Settings', icon: Gear, group: 'Settings' }
];

function BackupsAndRestore({}) {
    const { panelTab, setPanelTab } = useUndoState();
    const currentTab = panelTab.present;

    const groups = tabs.reduce((acc, tab) => {
        if (!acc[tab.group]) acc[tab.group] = [];
        acc[tab.group].push(tab);
        return acc;
    }, {});

    return (
        <div className="f-col g6">
            <button onClick={() => setPanelTab('Backups & Restore')} className={`panel-tab g12 ${currentTab === 'Backups & Restore' ? ' active' : ''}`}>
                <img src={Backups} />
                <p>Backups & Restore</p>
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

export default BackupsAndRestore;