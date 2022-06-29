import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import { KanbanActions } from '../../types/kanban_actions';
import { BoardPath } from '../../types/board_path';
import Board from '../Board/Board';

type Props = {
  actions: KanbanActions
  boards: BoardData[]
  boardPath: BoardPath
};

const WallWrap = styled.main`
position: relative;
flex-basis: 100vw;
min-width: 0;
min-height: 100%;
margin: 0 !important`;

function Wall({
  actions, boards, boardPath, boardPath: { viaIndex: index },
}: Props) {
  return (
    <WallWrap>
      <Board
        board={boards[index[0]]}
        actions={actions}
        boardPath={boardPath}
      />
    </WallWrap>
  );
}

export default Wall;
