import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import { BoardOperations } from '../../types/board_operations';
import Board from '../Board/Board';

type Props = {
  operations: BoardOperations
  boards: BoardData[]
};

const WallWrap = styled.main`
position: relative;
flex-basis: 100vw;
min-width: 0;
min-height: 100%;`;

function Wall({ operations, boards }: Props) {
  return (
    <WallWrap>
      <Board board={boards[0]} operations={operations} boardPath={[boards[0].id]} />
    </WallWrap>
  );
}

export default Wall;
