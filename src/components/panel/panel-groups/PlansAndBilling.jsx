import { useUndoState } from "../../../UndoContext";
import Rocket from './icons/rocket.svg'
import Monitor from './icons/monitor.svg'
import Integrations from './icons/integrations.svg'
import Wrench from './icons/wrench.svg'
import Tag from './icons/tag.svg'
import Card from './icons/card.svg'
import Gear from './icons/gear.svg'
import React from "react";

const tabs = [
    { id: 'Website Plans', icon: Monitor, group: 'Plans' },
    { id: 'Integrations', icon: Integrations, group: 'Plans' },
    { id: 'Subscription Controls', icon: Wrench, group: 'Subscription Controls' },
    { id: 'Billing History', icon: Tag, group: 'Billing & Payments' },
    { id: 'Payment Methods', icon: Card, group: 'Billing & Payments' },
];

function PlansAndBilling({}) {
    const { panelTab, setPanelTab } = useUndoState();
    const currentTab = panelTab.present;

    const groups = tabs.reduce((acc, tab) => {
        if (!acc[tab.group]) acc[tab.group] = [];
        acc[tab.group].push(tab);
        return acc;
    }, {});

    return (
        <div className="f-col g6">
            <button onClick={() => setPanelTab('Plans & Billing')} className={`panel-tab g12 ${currentTab === 'Plans & Billing' ? ' active' : ''}`}>
                <img src={Rocket} />
                <p>Plans & Billing</p>
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

export default PlansAndBilling;