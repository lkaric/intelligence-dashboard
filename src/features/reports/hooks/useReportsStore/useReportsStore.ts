import { create } from 'zustand';

export interface Report {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ReportState {
  reports: Report[];
  searchQuery: string;

  setSearchQuery: (query: string) => void;
  addReport: (report: Omit<Report, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateReport: (id: string, updates: Partial<Report>) => void;
  reorderReports: (reports: Report[]) => void;
}

const createInitialReports = (): Report[] => {
  return Array.from({ length: 6 }, (_, index) => ({
    id: `report-${index + 1}`,
    title: `Report ${index + 1}`,
    content: `This is the content for report ${index + 1}. Click to edit.`,
    createdAt: new Date(Date.now() - Math.random() * 10000000000),
    updatedAt: new Date(Date.now() - Math.random() * 1000000000),
  }));
};

export const useReportsStore = create<ReportState>((set) => ({
  reports: createInitialReports(),
  searchQuery: '',

  setSearchQuery: (query) => set({ searchQuery: query }),

  addReport: (reportData) =>
    set((state) => {
      const newReport: Report = {
        id: crypto.randomUUID(),
        ...reportData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      return { reports: [...state.reports, newReport] };
    }),

  updateReport: (id, updates) =>
    set((state) => ({
      reports: state.reports.map((report) =>
        report.id === id
          ? { ...report, ...updates, updatedAt: new Date() }
          : report,
      ),
    })),

  reorderReports: (reports) => set({ reports }),
}));
