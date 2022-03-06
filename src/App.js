import React from 'react';
import DashboardShell from './features/Dashboard/DashboardShell';
import DashboardContext from './common/context/DashboardContext';
import {sales} from './mocks';

const dashboardInitialState = {
  loading: false,
  error: null,
  data: sales,
  salesTotal: 140,
  subscriptionsTotal: 220,
};

const App = () => {
  return (
    <DashboardContext.Provider value={dashboardInitialState}>
      <DashboardShell />
    </DashboardContext.Provider>
  );
};

export default App;
