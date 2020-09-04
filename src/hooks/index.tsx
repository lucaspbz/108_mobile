import React from 'react';

import { AuthProvider } from './auth';
import { ScheduleProvider } from './schedule';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ScheduleProvider>{children}</ScheduleProvider>
  </AuthProvider>
);

export default AppProvider;
