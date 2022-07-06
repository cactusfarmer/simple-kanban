import { BoardItem } from '../interfaces/board_item';
import { ColumnData } from './column_data';

export type BoardData = BoardItem & {
  sortchildrenby : string
  columns: ColumnData[]
};
