import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Pricing from './pages/Pricing';
import Settings from './pages/Settings';
import ProtectedRoute from './components/Auth/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route 
        path="/settings" 
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}

export default App;