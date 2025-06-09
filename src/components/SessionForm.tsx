import { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import type { Session } from '../props/Session';

const SessionForm = ({ onCreate }: { onCreate: (session: Session) => void }) => {
  const [title, setTitle] = useState('');
  const [speaker, setSpeaker] = useState('');
  const [priority, setPriority] = useState(1);
  const [startTime, setStartTime] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate({ title, speaker, priority, startTime });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <Grid container spacing={2}>
        <Grid >
          <TextField label="Title" value={title} onChange={e => setTitle(e.target.value)} fullWidth required />
        </Grid>
        <Grid >
          <TextField label="Speaker" value={speaker} onChange={e => setSpeaker(e.target.value)} fullWidth required />
        </Grid>
        <Grid>
          <TextField label="Priority" type="number" value={priority} onChange={e => setPriority(+e.target.value)} fullWidth required />
        </Grid>
        <Grid>
          <TextField type="datetime-local" value={startTime} onChange={e => setStartTime(e.target.value)} fullWidth required />
        </Grid>
        <Grid>
          <Button type="submit" variant="contained">Create Session</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SessionForm;