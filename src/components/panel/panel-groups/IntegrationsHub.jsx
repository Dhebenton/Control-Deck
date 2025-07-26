import { useUndoState } from "../../../UndoContext";
import Integrations from './icons/integrations.svg'
import CMSicon from './icons/cms.svg'
import Calendar from './icons/calendar.svg'
import Image from './icons/image.svg'
import Cookies from './icons/cookies.svg'
import Form from './icons/form.svg'
import Card from './icons/card.svg'
import Bot from './icons/chat-bot.svg'
import Flow from './icons/flow.svg'
import IntegrationsManage from './icons/integrations-manage.svg'
import Gear from './icons/gear.svg'
import React from "react";

const tabs = [
    { id: 'CMS', icon: CMSicon, group: 'Intergrations' },
    { id: 'Booking System', icon: Calendar, group: 'Intergrations' },
    { id: 'Image Optimiser', icon: Image, group: 'Intergrations' },
    { id: 'Cookies Manager', icon: Cookies, group: 'Intergrations' },
    { id: 'Smart Forms', icon: Form, group: 'Intergrations' },
    { id: 'Payment Gateway ', icon: Card, group: 'Intergrations' },
    { id: 'AI Chatbot', icon: Bot, group: 'Intergrations' },
    { id: 'Auto Sitemap', icon: Flow, group: 'Intergrations' }
];

function IntegrationsHub({}) {
    const { navigationTab, setNavigationTab ,panelTab, setPanelTab } = useUndoState();
    const currentTab = panelTab.present;
    const navTab = navigationTab.present

    const groups = tabs.reduce((acc, tab) => {
        if (!acc[tab.group]) acc[tab.group] = [];
        acc[tab.group].push(tab);
        return acc;
    }, {});

    return (
        <div className="f-col g6">
            <button onClick={() => setPanelTab('Integrations Hub')} className={`panel-tab g12 ${currentTab === 'Integrations Hub' ? ' active' : ''}`}>
                <img src={Integrations} />
                <p>Integrations Hub</p>
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
                                onClick={() => { setNavigationTab(tab.id); setPanelTab(tab.id);}}
                            >
                                <img src={tab.icon} />
                                <p>{tab.id}</p>
                                <div></div>
                            </button>
                        );
                    })}
                </React.Fragment>
            ))}
            <p className="panel-label">Settings</p>
            <button onClick={() => setPanelTab('Manage Integrations')} className={`panel-tab g12 ${currentTab === 'Manage Integrations' ? ' active' : ''}`}>
                <img src={IntegrationsManage} />
                <p>Manage Integrations</p>
                <div></div>
            </button>
            <button onClick={() => setPanelTab('Integrations Settings')} className={`panel-tab g12 ${currentTab === 'Integrations Settings' ? ' active' : ''}`}>
                <img src={Gear} />
                <p>Integrations Settings</p>
                <div></div>
            </button>
        </div>
    );
}

export default IntegrationsHub;