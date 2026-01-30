import { useState, useEffect } from 'react';
import api from '../utils/api';

/**
 * useReports hook
 * Fetches and manages user's reports list
 */
export function useReports() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReports = async () => {
    try {
      setLoading(true);
      const res = await api.get('/reports');
      setReports(res.data.reports);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch reports');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const createReport = async (reportData) => {
    const res = await api.post('/reports', reportData);
    setReports(prev => [res.data.report, ...prev]);
    return res.data.report;
  };

  const updateReport = async (id, reportData) => {
    const res = await api.put(`/reports/${id}`, reportData);
    setReports(prev => prev.map(r => r._id === id ? res.data.report : r));
    return res.data.report;
  };

  const deleteReport = async (id) => {
    await api.delete(`/reports/${id}`);
    setReports(prev => prev.filter(r => r._id !== id));
  };

  return {
    reports,
    loading,
    error,
    fetchReports,
    createReport,
    updateReport,
    deleteReport
  };
}