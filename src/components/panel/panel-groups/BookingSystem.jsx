import { useUndoState } from "../../../UndoContext";
import Calendar from './icons/calendar.svg'
import Palet from './icons/pallet.svg'
import ClipBoard from './icons/clip-board.svg'
import Clock from './icons/clock.svg'
import Paper from './icons/paper.svg'
import Bolt from './icons/bolt.svg'
import Bell from './icons/bell.svg'
import Users from './icons/users.svg'
import Card from './icons/card.svg'
import Gear from './icons/gear.svg'
import IntegrationsHub from './icons/integrations.svg'
import React from "react";

const tabs = [
    { id: 'Calendar Styling', icon: Palet, group: 'Calendar' },
    { id: 'Appointment Types', icon: ClipBoard, group: 'Calendar' },
    { id: 'Availability & Slots', icon: Clock, group: 'Calendar' },
    { id: 'Drafts & Scheduling', icon: Paper, group: 'Automation' },
    { id: 'Automation & Flows', icon: Bolt, group: 'Automation' },
    { id: 'Booking Notifications', icon: Bell, group: 'Automation' },
    { id: 'Client Management', icon: Users, group: 'Clients & Payments' },
    { id: 'Payment Settings', icon: Card, group: 'Clients & Payments' },
    { id: 'Booking Settings', icon: Gear, group: 'Settings' },
];

function BookingSystem({}) {
    const { navigationTab, setNavigationTab, panelTab, setPanelTab } = useUndoState();
    const currentTab = panelTab.present;

    const groups = tabs.reduce((acc, tab) => {
        if (!acc[tab.group]) acc[tab.group] = [];
        acc[tab.group].push(tab);
        return acc;
    }, {});

    return (
        <div className="f-col g6">
            <button onClick={() => setPanelTab('Booking System')} className={`panel-tab g12 ${currentTab === 'Booking System' ? ' active' : ''}`}>
                <img src={Calendar} />
                <p>Booking System</p>
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
            <button onClick={() => { setNavigationTab('Integrations Hub'); setPanelTab('Integrations Hub');}} className="panel-tab g12 abs">
                <img src={IntegrationsHub} />
                <p>Back To Hub</p>
                <div></div>
            </button>
        </div>
    );
}

export default BookingSystem;