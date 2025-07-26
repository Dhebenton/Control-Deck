import { useUndoState } from "../../../UndoContext";
import Image from './icons/image.svg'
import Backups from './icons/squares.svg'
import OpenFolder from './icons/folder-open.svg'
import Cloud from './icons/cloud.svg'
import Pause from './icons/pause.svg'
import Wrench from './icons/wrench.svg'
import Gear from './icons/gear.svg'
import IntegrationsHub from './icons/integrations.svg'
import React from "react";

const tabs = [
    { id: 'Image Library', icon: Backups, group: 'Monitoring' },
    { id: 'Optimisation Logs', icon: OpenFolder, group: 'Monitoring' },
    { id: 'CDN Delivery Toggle', icon: Cloud, group: 'Delivery & Performance' },
    { id: 'Lazy Load Settings', icon: Pause, group: 'Delivery & Performance' },
    { id: 'Compression Settings', icon: Wrench, group: 'Delivery & Performance' },
    { id: 'Optimisation Settings', icon: Gear, group: 'Settings' }
];

function ImageOptimiser({}) {
    const { navigationTab, setNavigationTab, panelTab, setPanelTab } = useUndoState();
    const currentTab = panelTab.present;

    const groups = tabs.reduce((acc, tab) => {
        if (!acc[tab.group]) acc[tab.group] = [];
        acc[tab.group].push(tab);
        return acc;
    }, {});

    return (
        <div className="f-col g6">
            <button onClick={() => setPanelTab('Image Optimiser')} className={`panel-tab g12 ${currentTab === 'Image Optimiser' ? ' active' : ''}`}>
                <img src={Image} />
                <p>Image Optimiser</p>
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

export default ImageOptimiser;