import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import { KanbanEvents } from '../../types/kanban_events';
import { BoardPath } from '../../types/board_path';
import Column from '../Column/Column';

type Props = {
  board: BoardData
  events: KanbanEvents
  boardPath: BoardPath // number[]
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
  board, events, boardPath,
}: Props): any {
  const { columns } = board;

  return (
    <BoardWrap>
      <BoardHead>
        {board.name}
      </BoardHead>
      <BoardBody>
        {
          columns.map((column, index) => (
            <Column
              key={column.id}
              events={events}
              column={column}
              columnPath={{
                ...boardPath,
                viaId:
                [...boardPath.viaId, column.id],
                viaIndex: [...boardPath.viaIndex, index],
              }}
            />
          ))
        }
      </BoardBody>
    </BoardWrap>
  );
}

export default Board;
