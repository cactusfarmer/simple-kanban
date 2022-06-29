import { CardData } from "./card_data";
import { BoardPath } from "./board_path";

export type KanbanActions = {
    cardActions: CardActions
    boardActions: BoardActions
    columnActions: ColumnActions
};

export type BoardActions = {
    addBoard: Function,
    viewBoard: (path: BoardPath) => void
}

export type CardActions = {
    viewCard: (pathToCard: BoardPath, card: CardData) => void,
    editCard: Function
    moveCard: Function,
    addCard: Function,
    deleteCard: Function
}

export type ColumnActions = {}