import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import { BoardOperations } from '../../types/board_operations';
import { KanbanElement } from '../../types/kanban_element';
import Board from '../Board/Board';

type Props = {
  operations: BoardOperations
  boards: BoardData[]
};

const WallWrap = styled.main`
position: relative;
flex-basis: 100vw;
min-width: 0;
min-height: 100%;
margin: 0 !important`;

function Wall({ operations, boards }: Props) {
  const path : KanbanElement[] = [{ id: boards[0].id, elementIndex: 0 }];

  return (
    <WallWrap>
      <Board board={boards[0]} operations={operations} boardPath={path} />
    </WallWrap>
  );
}

export default Wall;
