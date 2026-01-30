import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import LoginModal from '../components/Auth/LoginModal';
import './Dashboard.css';

/**
 * Dashboard
 * Main page - shows reports list and analysis view
 */
function Dashboard() {
  const { user, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Merge-it</h1>
        <div className="header-actions">
          {user ? (
            <>
              <span className="user-email">{user.email}</span>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <button onClick={() => setShowLogin(true)}>Login</button>
          )}
        </div>
      </header>

      <main className="dashboard-main">
        {user ? (
          <div className="reports-section">
            <h2>Your Reports</h2>
            <p className="placeholder">Report list and analyzer coming soon...</p>
          </div>
        ) : (
          <div className="welcome-section">
            <h2>GTO Report Analyzer</h2>
            <p>Import and analyze aggregated reports from GTO+, Simple Postflop, and PioSOLVER.</p>
            <button className="cta-button" onClick={() => setShowLogin(true)}>
              Get Started
            </button>
          </div>
        )}
      </main>

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
}

export default Dashboard;