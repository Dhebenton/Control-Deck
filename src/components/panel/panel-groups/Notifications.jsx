import { useUndoState } from "../../../UndoContext";
import Bell from './icons/bell.svg'
import Monitor from './icons/monitor.svg'
import Users from './icons/users.svg'
import Bolt from './icons/bolt.svg'
import Plane from './icons/plane.svg'
import Wrench from './icons/wrench.svg'
import Gear from './icons/gear.svg'
import React from "react";

const tabs = [
    { id: 'System Alerts', icon: Monitor, group: 'Events & Alerts' },
    { id: 'User Events', icon: Users, group: 'Events & Alerts' },
    { id: 'Custom Events', icon: Bolt, group: 'Events & Alerts' },
    { id: 'Custom Triggers', icon: Wrench, group: 'Configuration' },
    { id: 'Delivery Channels', icon: Plane, group: 'Configuration' },
    { id: 'Notifications Settings', icon: Gear, group: 'Settings' }

];

function Notifications({}) {
    const { panelTab, setPanelTab } = useUndoState();
    const currentTab = panelTab.present;

    const groups = tabs.reduce((acc, tab) => {
        if (!acc[tab.group]) acc[tab.group] = [];
        acc[tab.group].push(tab);
        return acc;
    }, {});

    return (
        <div className="f-col g6">
            <button onClick={() => setPanelTab('Notifications')} className={`panel-tab g12 ${currentTab === 'Notifications' ? ' active' : ''}`}>
                <img src={Bell} />
                <p>Notifications</p>
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

export default Notifications;