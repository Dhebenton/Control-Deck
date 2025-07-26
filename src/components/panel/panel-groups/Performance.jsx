import { useUndoState } from "../../../UndoContext";
import AnalyticsIcon from './icons/chart.svg'
import Clock from './icons/clock.svg'
import Speedometre from './icons/speed.svg'
import Bolt from './icons/bolt.svg'
import Warning from './icons/warning.svg'
import CPU from './icons/cpu.svg'
import Gear from './icons/gear.svg'
import React from "react";

const tabs = [
    { id: 'Speed Test', icon: Speedometre, group: 'Diagnostics' },
    { id: 'Core Web Vitals', icon: AnalyticsIcon, group: 'Diagnostics' },
    { id: 'Load Bottlenecks', icon: Warning, group: 'Diagnostics' },
    { id: 'Uptime Monitoring', icon: Clock, group: 'Monitoring' },
    { id: 'Resource Usage', icon: CPU, group: 'Monitoring' },
    { id: 'Performance Settings', icon: Gear, group: 'Settings' }
];

function Performance({}) {
    const { panelTab, setPanelTab } = useUndoState();
    const currentTab = panelTab.present;

    const groups = tabs.reduce((acc, tab) => {
        if (!acc[tab.group]) acc[tab.group] = [];
        acc[tab.group].push(tab);
        return acc;
    }, {});

    return (
        <div className="f-col g6">
            <button onClick={() => setPanelTab('Performance')} className={`panel-tab g12 ${currentTab === 'Performance' ? ' active' : ''}`}>
                <img src={Bolt} />
                <p>Performance</p>
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

export default Performance;