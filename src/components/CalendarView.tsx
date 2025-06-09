import { Paper, Typography, Tooltip } from '@mui/material';
import type { CalendarViewProps } from '../props/CalendarViewProps';

const CalendarView = ({ sessions }: CalendarViewProps) => {
  return (
    <div>
      {sessions.map((session, index) => (
        <Tooltip key={index} title={`Speaker: ${session.speaker}\nTime: ${new Date(session.startTime).toLocaleString()}`}>
          <Paper style={{ marginBottom: 10, padding: 10, backgroundColor: session.priority >= 5 ? '#ffcdd2' : '#bbdefb' }}>
            <Typography variant="subtitle1">{session.title}</Typography>
            <Typography variant="body2">{session.speaker}</Typography>
            <Typography variant="body2">{new Date(session.startTime).toLocaleString()}</Typography>
          </Paper>
        </Tooltip>
      ))}
    </div>
  );
};

export default CalendarView;