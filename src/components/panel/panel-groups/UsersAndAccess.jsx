import { useUndoState } from "../../../UndoContext";
import User from './icons/user.svg'
import Users from './icons/users.svg'
import Key from './icons/key.svg'
import Bell from './icons/bell.svg'
import Shield from './icons/shield-hallow.svg'
import Folder from './icons/folder-open.svg'
import Gear from './icons/gear.svg'
import React from "react";

const tabs = [
    { id: 'Team Members', icon: Users, group: 'Identity & Roles' },
    { id: 'Roles & Permissions', icon: Key, group: 'Identity & Roles' },
    { id: 'Access Requests', icon: Bell, group: 'Access Control' },
    { id: 'Login Security', icon: Shield, group: 'Access Control' },
    { id: 'User Logs', icon: Folder, group: 'Access Control' },
    { id: 'Users Settings', icon: Gear, group: 'Settings' }
];

function UsersAndAccess({}) {
    const { panelTab, setPanelTab } = useUndoState();
    const currentTab = panelTab.present;

    const groups = tabs.reduce((acc, tab) => {
        if (!acc[tab.group]) acc[tab.group] = [];
        acc[tab.group].push(tab);
        return acc;
    }, {});

    return (
        <div className="f-col g6">
            <button onClick={() => setPanelTab('Users & Access')} className={`panel-tab g12 ${currentTab === 'Users & Access' ? ' active' : ''}`}>
                <img src={User} />
                <p>Users & Access</p>
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

export default UsersAndAccess;