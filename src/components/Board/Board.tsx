import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import Column from '../Column/Column';

type Props = {
  allBoards: BoardData[]
  board: BoardData
  setState: Function
};
const BoardWrap = styled.div`
background-color: AliceBlue;
display: flex;
flex-direction: column;
height: 100%;
position: relative;
width: 100%;`;

const BoardHead = styled.h2`
padding-left: 16px`;

const BoardBody = styled.div`
/*overflow-x: scroll;*/
align-items: stretch;
display: flex;
height: calc(100% -44px);
padding: 0 16px 0 16px;
position: relative;`;

function Board({ allBoards, board, setState }: Props): any {
  const path = [board.name];

  const { columns } = board;

  return (
    <BoardWrap>
      <BoardHead>{board.name}</BoardHead>
      <BoardBody>
        {
          columns.map((column) => (
            <Column allBoards={allBoards} setState={setState} column={column} ancestors={path} />
          ))
        }
      </BoardBody>
    </BoardWrap>
  );
}

export default Board;
