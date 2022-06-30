import { BoardData } from '../types/board_data';
import { CardData } from '../types/card_data';
import { WallData } from '../types/wall_data';

export default class Queries {
  public static addBoard = (data: WallData, board: BoardData): WallData => {
    const update = {
      ...data,
      boards:
                [...data.boards, { name: board.name, columns: board.columns, id: 1 }],
    };
    return update;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static editCard = (data: WallData, card: CardData) => null;
}
