import { useState, useEffect } from 'react';
import axios from 'axios';
import type { Session } from '../props/Session';

interface UseSessionsResult {
  sessions: Session[];
  loading: boolean;
  error: string | null;
  fetchSessions: () => void;
  createSession: (session: Session) => Promise<void>;
  setError: (error: string | null) => void;
  handleCreate: (session: Session) => Promise<void>;
}

export const useSessions = (): UseSessionsResult => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSessions = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/api/sessions', {
        params: {
          sortBy: 'priority',
          page: 0,
          size: 100
        }
      });
      setSessions(res.data);
    } catch (err: any) {
      setError(err.response?.data || 'Failed to fetch sessions');
    } finally {
      setLoading(false);
    }
  };

  const createSession = async (session: Session) => {
    try {
      await axios.post('/api/sessions', session);
      fetchSessions();
    } catch (err: any) {
      setError(err.response?.data || 'Failed to create session');
    }
  };

  const handleCreate = async (session: Session) => {
    await createSession(session);
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  return { sessions, loading, error, fetchSessions, createSession, setError, handleCreate };
};
