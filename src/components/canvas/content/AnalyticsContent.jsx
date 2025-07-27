import { useUndoState } from "../../../UndoContext"
import Analytics from "../../content/analytics/tabs/Analytics";

function AnalyticsContent({}) {
    const { panelTab } = useUndoState();
    const currentTab = panelTab.present;

    return (
        <>
            { currentTab === 'Analytics' && <Analytics /> }
        </>
    )
}

export default AnalyticsContent