import { useUndoState } from "../../../UndoContext";
import Card from './icons/card.svg'
import Tags from './icons/tag.svg'
import Cart from './icons/cart.svg'
import Users from './icons/users.svg'
import Shield from './icons/shield-hallow.svg'
import Gear from './icons/gear.svg'
import IntegrationsHub from './icons/integrations.svg'
import React from "react";

const tabs = [
    { id: 'Products & Pricing', icon: Tags, group: 'Commerce Configuration' },
    { id: 'Checkout Settings', icon: Cart, group: 'Commerce Configuration' },
    { id: 'Customer Management', icon: Users, group: 'Operations & Compliance' },
    { id: 'Security & Compliance', icon: Shield, group: 'Operations & Compliance' },
    { id: 'Payment Settings', icon: Gear, group: 'Settings' }
];

function PaymentGateway({}) {
    const { navigationTab, setNavigationTab, panelTab, setPanelTab } = useUndoState();
    const currentTab = panelTab.present;

    const groups = tabs.reduce((acc, tab) => {
        if (!acc[tab.group]) acc[tab.group] = [];
        acc[tab.group].push(tab);
        return acc;
    }, {});

    return (
        <div className="f-col g6">
            <button onClick={() => setPanelTab('Payment Gateway')} className={`panel-tab g12 ${currentTab === 'Payment Gateway' ? ' active' : ''}`}>
                <img src={Card} />
                <p>Payment Gateway</p>
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

export default PaymentGateway;