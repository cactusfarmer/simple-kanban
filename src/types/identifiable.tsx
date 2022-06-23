import { BoardData } from './board_data';
import { CardData } from './card_data';
import { ColumnData } from './column_data';

export type Identifyable = BoardData[] | ColumnData[] | CardData[];
