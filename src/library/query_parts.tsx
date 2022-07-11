import { CardQueryParts } from '../types/card_query_parts';
import { ColumnPath } from '../types/kanban_paths';
import { WallData } from '../types/wall_data';
import { getBoardByIndex, getColumnByIndex } from './helpers';

const cardQueryParts = (
  data: WallData,
  { boardIndex, columnIndex }: ColumnPath,
): CardQueryParts => {
  const { boards } = data;
  const board = getBoardByIndex(boards, boardIndex);
  const { columns } = board;
  const column = getColumnByIndex(columns, columnIndex);
  const { cards } = column;
  return {
    wall: data,
    allBoards: boards,
    ourBoard: board,
    allColumns: columns,
    ourColumn: column,
    ourCards: cards,
  };
};

export default cardQueryParts;
