import { useUndoState } from "../../UndoContext";

import Dashboard from './assets/tabs/dashboard.svg'
import Atri from './assets/tabs/atri.svg'
import Analytics from './assets/tabs/chart.svg'
import Performance from './assets/tabs/performance.svg'
import SplitTesting from './assets/tabs/split-testing.svg'
import Notifications from './assets/tabs/notifications.svg'
import Security from './assets/tabs/security.svg'
import Integrations from './assets/tabs/intergrations.svg'
import BackupsAndRestore from './assets/tabs/backups-and-restore.svg'
import Configurations from './assets/tabs/configurations.svg'
import PlansAndBilling from './assets/tabs/plans-and-billing.svg'
import UsersAndAccess from './assets/tabs/users-and-access.svg'
import LogsAndReports from './assets/tabs/logs-and-reports.svg'



function Tabs() {
    const { navigationTab, setNavigationTab, setPanelTab } = useUndoState();
    const active = navigationTab.present;

    const tabs = [
        { id: 'Dashboard', icon: Dashboard },
        { id: 'Atri', icon: Atri },
        { id: 'Analytics', icon: Analytics },
        { id: 'Performance', icon: Performance },
        { id: 'Split Testing', icon: SplitTesting },
        { id: 'Notifications', icon: Notifications },
        { id: 'Security', icon: Security },
        { id: 'Integrations Hub', icon: Integrations },
        { id: 'Backups & Restore', icon: BackupsAndRestore },
        { id: 'Configurations', icon: Configurations },
        { id: 'Plans & Billing', icon: PlansAndBilling },
        { id: 'Users & Access', icon: UsersAndAccess },
        { id: 'Logs & Reports', icon: LogsAndReports }
    ];

    const handleTabClick = (id) => {
        setNavigationTab(id);
        setPanelTab(id);
    };


    return (
        <div className="f-col g6">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`tab g12 ${active === tab.id ? 'active' : ''}`}
                >
                    <img src={tab.icon} alt={tab.id} />
                    <p>{tab.id}</p>
                    <div></div>
                </button>
            ))}
        </div>
    );
}

export default Tabs;