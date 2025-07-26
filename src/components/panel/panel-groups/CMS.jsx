import { useUndoState } from "../../../UndoContext";
import CMSicon from './icons/cms.svg'
import Backups from './icons/squaresround.svg'
import Wrench from './icons/wrench.svg'
import Image from './icons/image.svg'
import Calendar from './icons/calendar.svg'
import Squares from './icons/squares.svg'
import Gear from './icons/gear.svg'
import IntegrationsHub from './icons/integrations.svg'
import React from "react";

const tabs = [
    { id: 'Content Manager', icon: Backups, group: 'Content Structure' },
    { id: 'Custom Fields', icon: Wrench, group: 'Content Structure' },
    { id: 'Media Library', icon: Image, group: 'Content Structure' },
    { id: 'Drafts & Scheduling', icon: Calendar, group: 'Content Workflow' },
    { id: 'Version History', icon: Squares, group: 'Content Workflow' },
    { id: 'CMS Settings', icon: Gear, group: 'Settings' }
];

function CMS({}) {
    const { navigationTab, setNavigationTab, panelTab, setPanelTab } = useUndoState();
    const currentTab = panelTab.present;

    const groups = tabs.reduce((acc, tab) => {
        if (!acc[tab.group]) acc[tab.group] = [];
        acc[tab.group].push(tab);
        return acc;
    }, {});

    return (
        <div className="f-col g6">
            <button onClick={() => setPanelTab('CMS')} className={`panel-tab g12 ${currentTab === 'CMS' ? ' active' : ''}`}>
                <img src={CMSicon} />
                <p>CMS</p>
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

export default CMS;