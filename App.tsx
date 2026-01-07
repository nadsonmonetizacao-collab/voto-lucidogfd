
import React, { useState, useEffect } from 'react';
import { ViewState, User } from './types';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Plans from './components/Plans';
import Dashboard from './components/Dashboard';
import AdminGuide from './components/AdminGuide';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('veritas_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      // Optionally redirect to dashboard if already logged in
    }
  }, []);

  const handleLogin = (email: string) => {
    const newUser: User = { email, plan: 'free' };
    setUser(newUser);
    localStorage.setItem('veritas_user', JSON.stringify(newUser));
    setView(ViewState.PLANS);
  };

  const handleSelectPlan = (plan: User['plan']) => {
    if (user) {
      const updatedUser = { ...user, plan };
      setUser(updatedUser);
      localStorage.setItem('veritas_user', JSON.stringify(updatedUser));
    }
    setView(ViewState.DASHBOARD);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('veritas_user');
    setView(ViewState.HOME);
  };

  return (
    <div className="min-h-screen">
      {view === ViewState.HOME && <LandingPage onStart={() => setView(ViewState.LOGIN)} onAdmin={() => setView(ViewState.ADMIN_GUIDE)} />}
      {view === ViewState.LOGIN && <Login onLogin={handleLogin} onBack={() => setView(ViewState.HOME)} />}
      {view === ViewState.PLANS && <Plans onSelect={handleSelectPlan} />}
      {view === ViewState.DASHBOARD && user && <Dashboard user={user} onLogout={logout} />}
      {view === ViewState.ADMIN_GUIDE && <AdminGuide onBack={() => setView(ViewState.HOME)} />}
    </div>
  );
};

export default App;
