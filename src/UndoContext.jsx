import { createContext, useContext, useRef } from 'react';
import useUndo from 'use-undo';

const UndoContext = createContext();

export function UndoProvider({ children }) {
    const [navigationTab, navigation] = useUndo('Analytics');
    const [panelTab, panel] = useUndo('Analytics');

    const panelHistoryRef = useRef({});
    const visitedTabs = useRef(new Set());

    const setNavigationTab = (tabId) => {
        // Save current panelTab before switching
        const currentNav = navigationTab.present;
        panelHistoryRef.current[currentNav] = panelTab.present;

        // Switch navigation tab
        navigation.set(tabId);

        // If visited before, restore previous panelTab; else use tabId
        if (visitedTabs.current.has(tabId)) {
            const lastPanel = panelHistoryRef.current[tabId] || tabId;
            panel.set(lastPanel);
        } else {
            panel.set(tabId);
            visitedTabs.current.add(tabId);
        }
    };

    const setPanelTab = panel.set;

    return (
        <UndoContext.Provider value={{
            navigationTab,
            setNavigationTab,
            panelTab,
            setPanelTab,
            undo: panel.undo,
            redo: panel.redo,
        }}>
            {children}
        </UndoContext.Provider>
    );
}

export function useUndoState() {
    return useContext(UndoContext);
}
