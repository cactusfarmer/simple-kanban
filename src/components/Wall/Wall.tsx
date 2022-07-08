import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import { FormSetupData } from '../../types/form_setup_data';
import { KanbanEvents } from '../../types/kanban_events';
import { KanbanPathToItem } from '../../types/kanban_paths';
import Board from '../Board/Board';

type Props = {
  events: KanbanEvents
  boards: BoardData[]
  path : KanbanPathToItem
  forms: FormSetupData
};

const WallWrap = styled.main`
position: relative;
flex-basis: 100vw;
min-width: 0;
min-height: 100%;
margin: 0 !important`;

function Wall({
  events, boards, path, path: { viaIndex: index }, forms,
}: Props) {
  return (
    <WallWrap>
      <Board
        board={boards[index[0]]}
        events={events}
        path={path}
        forms={forms}
      />
    </WallWrap>
  );
}

export default Wall;
