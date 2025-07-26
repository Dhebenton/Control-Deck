import { useUndoState } from "../../../UndoContext";
import Flow from './icons/flow.svg'
import Map from './icons/map.svg'
import Folder from './icons/folder-down.svg'
import Signal from './icons/signal.svg'
import Clock from './icons/clock.svg'
import NoSign from './icons/nosign.svg'
import Gear from './icons/gear.svg'
import IntegrationsHub from './icons/integrations.svg'
import React from "react";

const tabs = [
    { id: 'Sitemap Preview', icon: Map, group: 'Controls & Submissions' },
    { id: 'Manual Submission', icon: Folder, group: 'Controls & Submissions' },
    { id: 'Search Engine Ping', icon: Signal, group: 'Controls & Submissions' },
    { id: 'Auto-Update Settings', icon: Clock, group: 'Automation & Filters' },
    { id: 'URL Exclusions', icon: NoSign, group: 'Automation & Filters' },
    { id: 'Sitemap Settings', icon: Gear, group: 'Settings' }
];

function AutoSitemap({}) {
    const { navigationTab, setNavigationTab, panelTab, setPanelTab } = useUndoState();
    const currentTab = panelTab.present;

    const groups = tabs.reduce((acc, tab) => {
        if (!acc[tab.group]) acc[tab.group] = [];
        acc[tab.group].push(tab);
        return acc;
    }, {});

    return (
        <div className="f-col g6">
            <button onClick={() => setPanelTab('Auto Sitemap')} className={`panel-tab g12 ${currentTab === 'Auto Sitemap' ? ' active' : ''}`}>
                <img src={Flow} />
                <p>Auto Sitemap</p>
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

export default AutoSitemap;