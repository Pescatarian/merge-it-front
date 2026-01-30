import { createContext, useContext, useState } from 'react';

const ReportContext = createContext(null);

/**
 * ReportContext
 * Manages global report state - current report, selected board, view mode
 */
export function ReportProvider({ children }) {
  const [currentReport, setCurrentReport] = useState(null);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [viewMode, setViewMode] = useState('aggregate'); // 'aggregate' | 'board'

  const clearSelection = () => {
    setCurrentReport(null);
    setSelectedBoard(null);
    setViewMode('aggregate');
  };

  return (
    <ReportContext.Provider value={{
      currentReport,
      setCurrentReport,
      selectedBoard,
      setSelectedBoard,
      viewMode,
      setViewMode,
      clearSelection
    }}>
      {children}
    </ReportContext.Provider>
  );
}

export const useReport = () => useContext(ReportContext);