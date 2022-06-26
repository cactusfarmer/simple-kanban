import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import Board from '../Board/Board';

type Props = {
  editBoard: Function
  boards: BoardData[]
};

const WallWrap = styled.main`
position: relative;
flex-basis: 100vw;
min-width: 0;
min-height: 100%;`;

function Wall({ editBoard, boards }: Props) {
  return (
    <WallWrap>
      <Board board={boards[0]} editBoard={editBoard} boardPath={[0]} />
    </WallWrap>
  );
}

export default Wall;
