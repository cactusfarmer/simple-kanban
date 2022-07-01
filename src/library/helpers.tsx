import util from 'util';
import { BoardData } from '../types/board_data';
import { CardData } from '../types/card_data';
import { ColumnData } from '../types/column_data';

const logObj = (obj: object) => {
  console.log(util.inspect(obj, { showHidden: false, depth: null, colors: true }));
};
/** end */

const getOtherBoards = (
  boards: BoardData[],
  boardId: number,
) => boards.filter(({ id }) => id !== boardId);

const getOtherColumns = (
  columns: ColumnData[],
  columnId: number,
) => columns.filter(({ id }) => id !== columnId);

const getOtherCards = (
  cards: CardData[],
  cardId: number,
) => cards.filter(({ id }) => id !== cardId);

const getBoard = (boards: BoardData[], boardId: number) => {
  const board = boards.find(({ id }) => id === boardId);
  if (board === undefined) throw Error('No board of this id');
  return board;
};

const getColumn = (columns: ColumnData[], columnId: number) => {
  const column = columns.find(({ id }) => id === columnId);
  if (column === undefined) throw Error('No column of this id');
  return column;
};

const getCard = (cards: CardData[], cardId: number) => {
  const card = cards.find(({ id }) => id === cardId);
  if (card === undefined) throw Error('No card of this id');
  return card;
};

const getPathObject = (path: number[]) => {
  const propertyNames = ['boardId', 'columnId', 'cardId'];

  const pathObject = path.reduce((obj, c, i) => {
    const o = obj; // https://eslint.org/docs/latest/rules/no-param-reassign
    o[propertyNames[i]] = c;
    return o;
  }, {} as any);

  return pathObject;
};

export {
  getPathObject, logObj, getOtherBoards,
  getOtherColumns, getOtherCards, getBoard, getColumn, getCard,
};
