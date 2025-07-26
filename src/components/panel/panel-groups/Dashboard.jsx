import { useUndoState } from "../../../UndoContext";
import Home from './icons/home.svg'
import MegaPhone from './icons/megaphone.svg'
import Tag from './icons/tag.svg'
import Gear from './icons/gear.svg'
import React from "react";

const tabs = [
    { id: 'Marketing Funnel', icon: MegaPhone, group: 'Custom Dashboard' },
    { id: 'Conversion Funnel', icon: Tag, group: 'Custom Dashboard' },
];

function Dashboard({}) {
    const { panelTab, setPanelTab } = useUndoState();
    const currentTab = panelTab.present;

    const groups = tabs.reduce((acc, tab) => {
        if (!acc[tab.group]) acc[tab.group] = [];
        acc[tab.group].push(tab);
        return acc;
    }, {});

    return (
        <div className="f-col g6">
            <button onClick={() => setPanelTab('Dashboard')} className={`panel-tab g12 ${currentTab === 'Dashboard' ? ' active' : ''}`}>
                <img src={Home} />
                <p>Dashboard</p>
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
            <p className="panel-label">Dashboard Settings</p>
            <button onClick={() => setPanelTab('Dashboard Settings')} className={`panel-tab g12 ${currentTab === 'Dashboard Settings' ? ' active' : ''}`}>
                <img src={Gear} />
                <p>Dashboard Settings</p>
                <div></div>
            </button>
        </div>
    );
}

export default Dashboard;
