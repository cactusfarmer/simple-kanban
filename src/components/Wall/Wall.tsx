import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import { BoardOperations } from '../../types/board_operations';
import { BoardPath } from '../../types/board_path';
import Board from '../Board/Board';

type Props = {
  operations: BoardOperations
  boards: BoardData[]
  boardPath: BoardPath
};

const WallWrap = styled.main`
position: relative;
flex-basis: 100vw;
min-width: 0;
min-height: 100%;
margin: 0 !important`;

function Wall({ operations, boards, boardPath }: Props) {
  const { viaIndex } = boardPath;
  // console.log(boardPath);
  return (
    <WallWrap>
      <Board
        board={boards[viaIndex[0]]}
        operations={operations}
        boardPath={boardPath}
      />
    </WallWrap>
  );
}

export default Wall;
