import { useUndoState } from "../../../UndoContext";
import AnalyticsIcon from './icons/chart.svg'
import Globe from './icons/globe.svg'
import Clock from './icons/clock.svg'
import Users from './icons/users.svg'
import Cursor from './icons/cursor.svg'
import Tag from './icons/tag.svg'
import Paper from './icons/paper.svg'
import Gear from './icons/gear.svg'
import React from "react";

const tabs = [
    { id: 'Traffic Source', icon: Globe, group: 'Site Analytics' },
    { id: 'Pages', icon: Paper, group: 'Site Analytics' },
    { id: 'Real Time', icon: Clock, group: 'Site Analytics' },
    { id: 'Audience', icon: Users, group: 'Users & Behaviours' },
    { id: 'Behaviours', icon: Cursor, group: 'Users & Behaviours' },
    { id: 'Conversions', icon: Tag, group: 'Users & Behaviours' },
    { id: 'Analytics Settings', icon: Gear, group: 'Settings' }
];

function Analytics({}) {
    const { panelTab, setPanelTab } = useUndoState();
    const currentTab = panelTab.present;

    const groups = tabs.reduce((acc, tab) => {
        if (!acc[tab.group]) acc[tab.group] = [];
        acc[tab.group].push(tab);
        return acc;
    }, {});

    return (
        <div className="f-col g6">
            <button onClick={() => setPanelTab('Analytics')} className={`panel-tab g12 ${currentTab === 'Analytics' ? ' active' : ''}`}>
                <img src={AnalyticsIcon} />
                <p>Analytics</p>
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

export default Analytics;