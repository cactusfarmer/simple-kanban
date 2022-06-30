import { CardData } from "./card_data";
import { BoardPath } from "./board_path";

export type KanbanEvents = {
    cardEvents: CardEvents
    boardEvents: BoardEvents
    columnEvents: ColumnEvents
};

export type BoardEvents = {
    addBoard: Function,
    viewBoard: (path: BoardPath) => void
}

export type CardEvents = {
    viewCard: (pathToCard: BoardPath, card: CardData) => void,
    editCard: Function
    moveCard: Function,
    addCard: Function,
    deleteCard: Function
}

export type ColumnEvents = {}