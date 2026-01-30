import { useAuth } from '../context/AuthContext';
import './Settings.css';

/**
 * Settings page
 * Account and subscription management
 */
function Settings() {
  const { user } = useAuth();

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <div className="settings-section">
        <h2>Account</h2>
        <p>Email: {user?.email}</p>
        <p>Plan: {user?.subscription?.plan || 'Free'}</p>
      </div>
    </div>
  );
}

export default Settings;