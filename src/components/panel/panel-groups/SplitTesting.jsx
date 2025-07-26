import { useUndoState } from "../../../UndoContext";
import Beaker from './icons/beaker.svg'
import Wrench from './icons/wrench.svg'
import PieChart from './icons/pie-chart.svg'
import Cursor from './icons/cursor.svg'
import Fire from './icons/flame.svg'
import Tag from './icons/tag.svg'
import Clipboard from './icons/clip-board.svg'
import Gear from './icons/gear.svg'
import React from "react";

const tabs = [
    { id: 'Test Manager', icon: Wrench, group: 'Test Configuration' },
    { id: 'Traffic Control', icon: PieChart, group: 'Test Configuration' },
    { id: 'User Paths', icon: Cursor, group: 'Behavioural Analysis' },
    { id: 'Heatmaps', icon: Fire, group: 'Behavioural Analysis' },
    { id: 'Conversion Insights', icon: Tag, group: 'Behavioural Analysis' },
    { id: 'Test Reports', icon: Clipboard, group: 'Settings & Reports' },
    { id: 'Split Testing Settings', icon: Gear, group: 'Settings & Reports' }
];

function SplitTesting({}) {
    const { panelTab, setPanelTab } = useUndoState();
    const currentTab = panelTab.present;

    const groups = tabs.reduce((acc, tab) => {
        if (!acc[tab.group]) acc[tab.group] = [];
        acc[tab.group].push(tab);
        return acc;
    }, {});

    return (
        <div className="f-col g6">
            <button onClick={() => setPanelTab('Split Testing')} className={`panel-tab g12 ${currentTab === 'Split Testing' ? ' active' : ''}`}>
                <img src={Beaker} />
                <p>Split Testing</p>
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

export default SplitTesting;