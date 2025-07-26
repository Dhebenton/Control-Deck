import { useUndoState } from "../../../UndoContext";
import Cookies from './icons/cookies.svg'
import Backups from './icons/squares.svg'
import Globe from './icons/globe.svg'
import Code from './icons/codebrackets.svg'
import OpenFolder from './icons/folder-open.svg'
import Pallet from './icons/pallet.svg'
import Wrench from './icons/wrench.svg'
import Gear from './icons/gear.svg'
import IntegrationsHub from './icons/integrations.svg'
import React from "react";

const tabs = [
    { id: 'Cookie Categories', icon: Backups, group: 'Monitoring' },
    { id: 'Geo-based Consent Rules', icon: Globe, group: 'Monitoring' },
    { id: 'Third-party Scripts Control', icon: Code, group: 'Monitoring' },
    { id: 'Lazy Load Settings', icon: OpenFolder, group: 'Monitoring' },
    { id: 'Consent Banner Editor', icon: Pallet, group: 'Banner Configuration' },
    { id: 'Previous Edits', icon: Wrench, group: 'Banner Configuration' },
    { id: 'Cookies Settings', icon: Gear, group: 'Settings' }
];

function CookiesManager({}) {
    const { navigationTab, setNavigationTab, panelTab, setPanelTab } = useUndoState();
    const currentTab = panelTab.present;

    const groups = tabs.reduce((acc, tab) => {
        if (!acc[tab.group]) acc[tab.group] = [];
        acc[tab.group].push(tab);
        return acc;
    }, {});

    return (
        <div className="f-col g6">
            <button onClick={() => setPanelTab('Cookies Manager')} className={`panel-tab g12 ${currentTab === 'Cookies Manager' ? ' active' : ''}`}>
                <img src={Cookies} />
                <p>Cookies Manager</p>
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

export default CookiesManager;