import './Panel.css'
import { useUndoState } from '../../UndoContext'
import SecButton from '../buttons/SecButton';
import ClosePanel from '../assets/icons/close-panel.svg'
import Dashboard from './panel-groups/Dashboard';
import Atri from './panel-groups/Atri';
import Analytics from './panel-groups/Analytics';
import Performance from './panel-groups/Performance';
import SplitTesting from './panel-groups/SplitTesting';
import Notifications from './panel-groups/Notifications';
import Security from './panel-groups/Security';
import IntegrationsHub from './panel-groups/IntegrationsHub';
import CMS from './panel-groups/CMS';
import BookingSystem from './panel-groups/BookingSystem';
import ImageOptimiser from './panel-groups/ImageOptimiser';
import CookiesManager from './panel-groups/CookiesManager';
import SmartForms from './panel-groups/SmartForms';
import PaymentGateway from './panel-groups/PaymentGateway';
import AIChatbot from './panel-groups/AIChatbot';
import AutoSitemap from './panel-groups/AutoSitemap';
import BackupsAndRestore from './panel-groups/BackupsAndRestore';
import Configurations from './panel-groups/Configurations';
import PlansAndBilling from './panel-groups/PlansAndBilling';
import UsersAndAccess from './panel-groups/UsersAndAccess';
import LogsAndReports from './panel-groups/LogsAndReports';

function Panel({}) {
    const { navigationTab, setNavigationTab, setPanelTab } = useUndoState();
    const active = navigationTab.present;

    return (
        <div className="panel f-col a-f-e g40">
            <div className="f-row j-s-b">
                {active}
                <SecButton iconLeft={ClosePanel} />
            </div>
            { active === 'Dashboard' && <Dashboard /> }
            { active === 'Atri' && <Atri /> }
            { active === 'Analytics' && <Analytics /> }
            { active === 'Performance' && <Performance />}
            { active === 'Split Testing' && <SplitTesting />}
            { active === 'Notifications' && <Notifications />}
            { active === 'Security' && <Security /> } 
            { active === 'Integrations Hub' && <IntegrationsHub /> }
            { active === 'CMS' && <CMS /> }
            { active === 'Booking System' && <BookingSystem /> }
            { active === 'Image Optimiser' && <ImageOptimiser /> }
            { active === 'Cookies Manager' && <CookiesManager /> }
            { active === 'Smart Forms' && <SmartForms /> }
            { active === 'Payment Gateway' && <PaymentGateway /> }
            { active === 'AI Chatbot' && <AIChatbot />}
            { active === 'Auto Sitemap' && <AutoSitemap /> }
            { active === 'Backups & Restore' && <BackupsAndRestore /> }
            { active === 'Configurations' && <Configurations /> }
            { active === 'Plans & Billing' && <PlansAndBilling />}
            { active === 'Users & Access' && <UsersAndAccess /> }
            { active === 'Logs & Reports' && <LogsAndReports /> }
        </div>
    )
}

export default Panel