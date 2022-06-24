import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import Column from '../Column/Column';

type Props = {
  data: BoardData
};
const BoardWrapper = styled.div`
background-color: AliceBlue;
display: flex;
flex-direction: column;
height: 100%;
position: relative;
width: 100%;`;

const BoardHeader = styled.h2`
padding-left: 16px`;

const BoardHolder = styled.div`
/*overflow-x: scroll;*/
align-items: stretch;
display: flex;
height: calc(100% -44px);
padding: 0 16px 0 16px;
position: relative;`;

function Board({ data }: Props): any {
  return (
    <BoardWrapper>
      <BoardHeader>{data.name}</BoardHeader>
      <BoardHolder>
        {
          data.columns.map((column) => (
            <Column data={column} />
          ))
        }
      </BoardHolder>
    </BoardWrapper>
  );
}

export default Board;
