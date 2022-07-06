import { BoardItem } from '../interfaces/board_item';

export type CardData = BoardItem & {
  owner?: string
  info?: string,
};
