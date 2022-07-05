import { ColumnData } from './column_data';
// import { SortBy } from './sort_by';

export type BoardData = {
  id: number
  name: string
  sortchildrenby : string
  columns: ColumnData[]
};
