import { useState } from 'react';
import { Grid, Box, Typography, Container } from '@mui/material';
import {
  DndContext,
  type DragEndEvent,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  type DragStartEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from '@dnd-kit/sortable';

import { ReportCard } from '../ReportCard';
import { SearchBar } from '../SearchBar';
import { useReportsStore } from '../../hooks';

export const ReportsGrid: React.FC = () => {
  const { reports, searchQuery, setSearchQuery, reorderReports } =
    useReportsStore();
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeReport = activeId
    ? reports.find((report) => report.id === activeId)
    : null;

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor),
  );

  const filteredReports = reports.filter((report) =>
    report.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveId(active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = reports.findIndex((item) => item.id === active.id);
      const newIndex = reports.findIndex((item) => item.id === over.id);

      reorderReports(arrayMove(reports, oldIndex, newIndex));
    }

    setActiveId(null);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>

      <SearchBar
        initialQuery={searchQuery}
        onSearch={setSearchQuery}
        placeholder="Search by title..."
      />

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={reports.map((report) => report.id)}
          strategy={rectSortingStrategy}
        >
          <Grid container spacing={3}>
            {filteredReports.map((report) => (
              <Grid key={report.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <ReportCard report={report} />
              </Grid>
            ))}
          </Grid>
        </SortableContext>

        <DragOverlay adjustScale>
          {activeReport ? (
            <Box>
              <ReportCard report={activeReport} />
            </Box>
          ) : null}
        </DragOverlay>
      </DndContext>
    </Container>
  );
};
