import { useUndoState } from "../../../UndoContext";
import Folder from './icons/folder-open.svg'
import Monitor from './icons/monitor.svg'
import Paper from './icons/paper.svg'
import Cloud from './icons/cloud.svg'
import Search from './icons/searchcircle.svg'
import Shield from './icons/shield-hallow.svg'
import ClipBoard from './icons/clip-board.svg'
import Wrench from './icons/wrench.svg'
import Gear from './icons/gear.svg'
import React from "react";

const tabs = [
    { id: 'System Logs', icon: Monitor, group: 'Core Logs' },
    { id: 'Deployment Logs', icon: Paper, group: 'Core Logs' },
    { id: 'Uptime Reports', icon: Cloud, group: 'Core Logs' },
    { id: 'Audit Trail', icon: Search, group: 'Security & Compliance' },
    { id: 'Security Logs', icon: Shield, group: 'Security & Compliance' },
    { id: 'Custom Reports', icon: ClipBoard, group: 'Reporting' },
    { id: 'Reports Configuration', icon: Wrench, group: 'Reporting' },
    { id: 'Report Settings', icon: Gear, group: 'Settings' },
];

function LogsAndReports({}) {
    const { panelTab, setPanelTab } = useUndoState();
    const currentTab = panelTab.present;

    const groups = tabs.reduce((acc, tab) => {
        if (!acc[tab.group]) acc[tab.group] = [];
        acc[tab.group].push(tab);
        return acc;
    }, {});

    return (
        <div className="f-col g6">
            <button onClick={() => setPanelTab('Logs & Reports')} className={`panel-tab g12 ${currentTab === 'Logs & Reports' ? ' active' : ''}`}>
                <img src={Folder} />
                <p>Logs & Reports</p>
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

export default LogsAndReports;