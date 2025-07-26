import './Panel.css'
import { useUndoState } from '../../UndoContext'
import SecButton from '../buttons/SecButton';
import ClosePanel from '../assets/icons/close-panel.svg'
import Dashboard from './panel-groups/Dashboard';
import Atri from './panel-groups/Atri';
import Analytics from './panel-groups/Analytics';
import Performance from './panel-groups/Performance';
import { act } from 'react';
import SplitTesting from './panel-groups/SplitTesting';
import Notifications from './panel-groups/Notifications';
import Security from './panel-groups/Security';
import IntegrationsHub from './panel-groups/IntegrationsHub';
import CMS from './panel-groups/CMS';

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
        </div>
    )
}

export default Panel