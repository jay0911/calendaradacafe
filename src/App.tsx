import { Container, Typography, Snackbar, Alert, CircularProgress } from '@mui/material';
import SessionForm from './components/SessionForm.tsx';
import CalendarView from './components/CalendarView.tsx';
import { useSessions } from './hooks/useSession.tsx';

const App = () => {
  const { sessions, loading, error, setError, handleCreate } = useSessions();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Event Planning Calendar
      </Typography>
      <SessionForm onCreate={handleCreate} />
      {loading ? <CircularProgress /> : <CalendarView sessions={sessions} />}
      <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError(null)}>
        <Alert onClose={() => setError(null)} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default App;
