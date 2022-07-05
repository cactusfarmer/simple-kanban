import { ColumnData } from './column_data';
import { BoardItem } from '../interfaces/board_item';

export type BoardData = BoardItem & {
  columns: ColumnData[]
};
