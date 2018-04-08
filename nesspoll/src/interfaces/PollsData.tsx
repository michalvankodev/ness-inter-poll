export interface PollsData {
  id: number;
  name: string;
  status: 'Live' | 'Finished' | 'Scheduled';
  status_id: number;
  date_start: Date;
  date_end: Date;
}