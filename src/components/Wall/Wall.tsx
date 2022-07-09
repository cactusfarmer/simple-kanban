import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import { FormsSetup } from '../../types/user_forms/forms_setup';
import { KanbanEvents } from '../../types/kanban_events';
import { PathToItem } from '../../types/kanban_paths';
import Board from '../Board/Board';

type Props = {
  events: KanbanEvents
  boards: BoardData[]
  currentPath : PathToItem
  formSetUp: FormsSetup
};

const WallWrap = styled.main`
position: relative;
flex-basis: 100vw;
min-width: 0;
min-height: 100%;
margin: 0 !important`;

function Wall({
  events, boards, currentPath, currentPath: { viaIndex: index }, formSetUp,
}: Props) {
  return (
    <WallWrap>
      <Board
        board={boards[index[0]]}
        events={events}
        currentPath={currentPath}
        formSetUp={formSetUp}
      />
    </WallWrap>
  );
}

export default Wall;
