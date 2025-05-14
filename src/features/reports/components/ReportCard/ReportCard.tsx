import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  Card,
  CardContent,
  Typography,
  Box,
  CardActionArea,
} from '@mui/material';
import { format } from 'date-fns';

import type { Report } from '../../hooks';

interface ReportCardProps {
  report: Report;
}

export const ReportCard: React.FC<ReportCardProps> = ({ report }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: report.id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    position: 'relative',
    zIndex: isDragging ? 1 : 0,
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      {...attributes}
    >
      <CardActionArea
        sx={{
          padding: 1.3,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}
        {...listeners}
      >
        <CardContent
          sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
        >
          <Typography variant="h6" component="h2" gutterBottom noWrap>
            {report.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              flexGrow: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              mb: 2,
            }}
          >
            {report.content}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: 'auto',
            }}
          >
            <Typography variant="caption" color="text.secondary">
              Created: {format(report.createdAt, 'MMM d, yyyy')}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Updated: {format(report.updatedAt, 'MMM d, yyyy')}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
