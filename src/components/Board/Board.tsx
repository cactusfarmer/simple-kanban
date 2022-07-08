import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import { FormSetupData } from '../../types/form_setup_data';
import { KanbanEvents } from '../../types/kanban_events';
import { PathToItem } from '../../types/kanban_paths';
import Column from '../Column/Column';

type Props = {
  board: BoardData
  events: KanbanEvents
  path: PathToItem // number[]
  forms: FormSetupData
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
  board, events, path, forms,
}: Props): any {
  const { columns } = board;
  // console.log(columns);
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
              path={{
                ...path,
                viaId:
                [...path.viaId, column.id],
                viaIndex: [...path.viaIndex, index],
              }}
              forms={forms}
            />
          ))
        }
      </BoardBody>
    </BoardWrap>
  );
}

export default Board;
