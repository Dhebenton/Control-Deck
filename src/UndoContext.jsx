import { createContext, useContext } from 'react';
import useUndo from 'use-undo';

const UndoContext = createContext();

export function UndoProvider({ children }) {
    const [navigationTab, navigation] = useUndo('Dashboard');
    const [panelTab, panel] = useUndo('Dashboard');

    return (
        <UndoContext.Provider value={{
            navigationTab,
            setNavigationTab: navigation.set,
            panelTab,
            setPanelTab: panel.set
        }}>
            {children}
        </UndoContext.Provider>
    );
}

export function useUndoState() {
    return useContext(UndoContext);
}
