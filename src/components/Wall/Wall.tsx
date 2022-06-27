import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import { BoardOperations } from '../../types/board_operations';
import Board from '../Board/Board';

type Props = {
  operations: BoardOperations
  boards: BoardData[]
  boardPath: number
};

const WallWrap = styled.main`
position: relative;
flex-basis: 100vw;
min-width: 0;
min-height: 100%;
margin: 0 !important`;

function Wall({ operations, boards, boardPath }: Props) {
  return (
    <WallWrap>
      <Board
        board={boards[boardPath]}
        operations={operations}
        boardPath={{ viaIndex: [boardPath], viaId: [boards[boardPath].id] }}
      />
    </WallWrap>
  );
}

export default Wall;
