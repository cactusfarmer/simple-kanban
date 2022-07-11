import { BoardData } from './board_data';
import { CardData } from './card_data';
import { ColumnData } from './column_data';
import { WallData } from './wall_data';

export type CardQueryParts = {
  wall: WallData,
  allBoards: BoardData[],
  ourBoard: BoardData,
  allColumns: ColumnData[],
  ourColumn: ColumnData,
  ourCards: CardData[],
};
