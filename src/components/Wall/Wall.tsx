import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import { KanbanEvents } from '../../types/kanban_events';
import { KanbanPathToItem } from '../../types/kanban_paths';
import Board from '../Board/Board';

type Props = {
  events: KanbanEvents
  boards: BoardData[]
  boardPath: KanbanPathToItem
};

const WallWrap = styled.main`
position: relative;
flex-basis: 100vw;
min-width: 0;
min-height: 100%;
margin: 0 !important`;

function Wall({
  events, boards, boardPath, boardPath: { viaIndex: index },
}: Props) {
  return (
    <WallWrap>
      <Board
        board={boards[index[0]]}
        events={events}
        boardPath={boardPath}
      />
    </WallWrap>
  );
}

export default Wall;
