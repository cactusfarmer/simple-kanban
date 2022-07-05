import { ColumnData } from './column_data';

export type BoardData = {
  id: number
  name: string
  sortchildrenby : string
  columns: ColumnData[]
};
