import { useUndoState } from "../../../UndoContext";
import Form from './icons/form.svg'
import OpenFolder from './icons/folder-open.svg'
import Chat from './icons/message.svg'
import Backups from './icons/squares.svg'
import Bolt from './icons/bolt.svg'
import Pallet from './icons/pallet.svg'
import Check from './icons/check.svg'
import Beaker from './icons/beaker.svg'
import Gear from './icons/gear.svg'
import IntegrationsHub from './icons/integrations.svg'
import React from "react";

const tabs = [
    { id: 'Submission Logs', icon: OpenFolder, group: 'Responses' },
    { id: 'Auto-Responses', icon: Chat, group: 'Responses' },
    { id: 'Form Manager', icon: Backups, group: 'Management' },
    { id: 'Integrations', icon: Bolt, group: 'Management' },
    { id: 'Form Builder', icon: Pallet, group: 'Builder' },
    { id: 'Validation Rules', icon: Check, group: 'Builder' },
    { id: 'Conditional Logic', icon: Beaker, group: 'Builder' },
    { id: 'Smart Forms Settings', icon: Gear, group: 'Settings' }
];

function SmartForms({}) {
    const { navigationTab, setNavigationTab, panelTab, setPanelTab } = useUndoState();
    const currentTab = panelTab.present;

    const groups = tabs.reduce((acc, tab) => {
        if (!acc[tab.group]) acc[tab.group] = [];
        acc[tab.group].push(tab);
        return acc;
    }, {});

    return (
        <div className="f-col g6">
            <button onClick={() => setPanelTab('Smart Forms')} className={`panel-tab g12 ${currentTab === 'Smart Forms' ? ' active' : ''}`}>
                <img src={Form} />
                <p>Smart Forms</p>
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

export default SmartForms;