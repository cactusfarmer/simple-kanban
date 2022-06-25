import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import Board from '../Board/Board';

type Props = {
  allBoards: BoardData[]
  setState: Function
};

const WallWrap = styled.main`
position: relative;
flex-basis: 100vw;
min-width: 0;
min-height: 100%;`;

function Wall({ allBoards, setState: setData }: Props) {
  return (
    <WallWrap>
      <Board allBoards={allBoards} board={allBoards[0]} setData={setData} />
    </WallWrap>
  );
}

export default Wall;
