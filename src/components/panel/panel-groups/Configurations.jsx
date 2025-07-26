import { useUndoState } from "../../../UndoContext";
import Globe from './icons/globe.svg'
import Cloud from './icons/cloudup.svg'
import Code from './icons/codebrackets.svg'
import Link from './icons/link.svg'
import Folder from './icons/folder-open.svg'
import Search from './icons/searchcircle.svg'
import Terminal from './icons/codeline.svg'
import CMSicon from './icons/cms.svg'
import SquareHallow from './icons/squarehallow.svg'
import Gear from './icons/gear.svg'
import React from "react";

const tabs = [
    { id: 'Manual Backup', icon: Cloud, group: 'Deployment & Runtime' },
    { id: 'Backup Schedule', icon: Code, group: 'Deployment & Runtime' },
    { id: 'Backup Schedule', icon: Link, group: 'Deployment & Runtime' },
    { id: 'Backup Schedule', icon: Folder, group: 'Deployment & Runtime' },
    { id: 'Restore Points', icon: Search, group: 'Site Behaviour & Metadata' },
    { id: 'Backup Logs', icon: Terminal, group: 'Site Behaviour & Metadata' },
    { id: 'Backup Logs', icon: CMSicon, group: 'Site Behaviour & Metadata' },
    { id: 'Security Settings', icon: SquareHallow, group: 'System-Level & Settings' },
    { id: 'Security Settings', icon: Gear, group: 'System-Level & Settings' }
];

function Configurations({}) {
    const { panelTab, setPanelTab } = useUndoState();
    const currentTab = panelTab.present;

    const groups = tabs.reduce((acc, tab) => {
        if (!acc[tab.group]) acc[tab.group] = [];
        acc[tab.group].push(tab);
        return acc;
    }, {});

    return (
        <div className="f-col g6">
            <button onClick={() => setPanelTab('Configurations')} className={`panel-tab g12 ${currentTab === 'Configurations' ? ' active' : ''}`}>
                <img src={Globe} />
                <p>Configurations</p>
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

export default Configurations;