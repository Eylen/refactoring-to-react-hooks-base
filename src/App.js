import React from 'react';
import DashboardShell from './features/Dashboard/DashboardShell';
import DashboardContext from './common/context/DashboardContext';

const dashboardInitialState = {
  loading: false,
  error: null,
  data: [],
  salesTotal: 0,
  subscriptionsTotal: 0,
};

const App = () => {
  return (
    <DashboardContext.Provider value={dashboardInitialState}>
      <DashboardShell />
    </DashboardContext.Provider>
  );
};

export default App;
