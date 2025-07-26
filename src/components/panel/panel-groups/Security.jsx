import { useUndoState } from "../../../UndoContext";
import Shield from './icons/shield.svg'
import ShieldHallow from './icons/shield-hallow.svg'
import Lock from './icons/lock.svg'
import Bolt from './icons/bolt.svg'
import Key from './icons/key.svg'
import LockOpen from './icons/lockopen.svg'
import FolderOpen from './icons/folder-open.svg'
import Warning from './icons/warning.svg'
import Gear from './icons/gear.svg'
import React from "react";

const tabs = [
    { id: 'Firewall Settings', icon: ShieldHallow, group: 'Network & Protocol Security' },
    { id: 'SSL/TLS', icon: Lock, group: 'Network & Protocol Security' },
    { id: 'DDoS Protection', icon: Bolt, group: 'Network & Protocol Security' },
    { id: 'Permissions & Access', icon: Key, group: 'Access & Authentication' },
    { id: 'Login Security', icon: LockOpen, group: 'Access & Authentication' },
    { id: 'Audit Logs', icon: FolderOpen, group: 'Monitoring & Response' },
    { id: 'Threat Detection', icon: Warning, group: 'Monitoring & Response' },
    { id: 'Security Settings', icon: Gear, group: 'Settings' }
];

function Security({}) {
    const { panelTab, setPanelTab } = useUndoState();
    const currentTab = panelTab.present;

    const groups = tabs.reduce((acc, tab) => {
        if (!acc[tab.group]) acc[tab.group] = [];
        acc[tab.group].push(tab);
        return acc;
    }, {});

    return (
        <div className="f-col g6">
            <button onClick={() => setPanelTab('Security')} className={`panel-tab g12 ${currentTab === 'Security' ? ' active' : ''}`}>
                <img src={Shield} />
                <p>Security</p>
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

export default Security;