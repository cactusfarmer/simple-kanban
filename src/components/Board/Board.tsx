import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import Column from '../Column/Column';

type Props = {
  board: BoardData
  editBoard: Function
  boardPath: number[]
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

function Board({
  board, editBoard, boardPath,
}: Props): any {
  const { columns } = board;

  return (
    <BoardWrap>
      <BoardHead>
        <div>{board.name}</div>
        <button
          onClick={() => {
            editBoard('DELETE', boardPath);
          }}
          type="button"
        >
          Delete
        </button>
      </BoardHead>
      <BoardBody>
        {
          columns.map((column, columnIndex) => (
            <Column
              key={column.name}
              editBoard={editBoard}
              column={column}
              columnPath={[...boardPath, columnIndex]}
            />
          ))
        }
      </BoardBody>
    </BoardWrap>
  );
}

export default Board;
