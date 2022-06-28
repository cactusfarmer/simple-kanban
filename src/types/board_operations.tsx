import { CardData } from "./card_data";
import { BoardPath } from "./board_path";

export type BoardOperations = {
    card: {
        edit: (pathToCard: BoardPath, card: CardData) => void,
        move: Function,
        add: Function,
        delete: Function
    },
    board: {
        add: Function,
        view: (path: BoardPath) => void
    }
};