import { CardData } from "./card_data";
import { BoardPath } from "./board_path";

export type KanbanActions = {
    card: CardActions
    board: BoardActions
    column: ColumnActions
};

export type BoardActions = {
    add: Function,
    view: (path: BoardPath) => void
}

export type CardActions = {
    edit: (pathToCard: BoardPath, card: CardData) => void,
    move: Function,
    add: Function,
    delete: Function
}

export type ColumnActions = {}