import { useUndoState } from "../../../UndoContext"
import Analytics from "../../content/analytics/tabs/Analytics";

function AnalyticsContent({ handleSidePanel }) {
    const { panelTab } = useUndoState();
    const currentTab = panelTab.present;

    return (
        <>
            { currentTab === 'Analytics' && <Analytics handleSidePanel={handleSidePanel}/> }
        </>
    )
}

export default AnalyticsContent