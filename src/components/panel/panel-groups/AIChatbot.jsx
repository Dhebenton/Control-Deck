import { useUndoState } from "../../../UndoContext";
import Bot from './icons/chat-bot.svg'
import Message from './icons/message.svg'
import Sparkles from './icons/sparkles.svg'
import Bolt from './icons/bolt.svg'
import Pallet from './icons/pallet.svg'
import Wrench from './icons/wrench.svg'
import Folder from './icons/folder-open.svg'
import Gear from './icons/gear.svg'
import IntegrationsHub from './icons/integrations.svg'
import React from "react";

const tabs = [
    { id: 'Conversation Flow Builder', icon: Message, group: 'Logic & Training' },
    { id: 'Training Phrases', icon: Sparkles, group: 'Logic & Training' },
    { id: 'Triggers & Responses', icon: Bolt, group: 'Logic & Training' },
    { id: 'Chat Panel Editor', icon: Pallet, group: 'Interface & Channels' },
    { id: 'Channel Settings', icon: Wrench, group: 'Interface & Channels' },
    { id: 'Chat Logs', icon: Folder, group: 'Interface & Channels' },
    { id: 'Payment Settings', icon: Gear, group: 'Settings' }
];

function AIChatbot({}) {
    const { navigationTab, setNavigationTab, panelTab, setPanelTab } = useUndoState();
    const currentTab = panelTab.present;

    const groups = tabs.reduce((acc, tab) => {
        if (!acc[tab.group]) acc[tab.group] = [];
        acc[tab.group].push(tab);
        return acc;
    }, {});

    return (
        <div className="f-col g6">
            <button onClick={() => setPanelTab('AI Chatbot')} className={`panel-tab g12 ${currentTab === 'AI Chatbot' ? ' active' : ''}`}>
                <img src={Bot} />
                <p>AI Chatbot</p>
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

export default AIChatbot;