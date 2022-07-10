import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import { UserFormsSetup } from '../../types/user_forms/user_forms_setup';
import { KanbanEvents } from '../../types/kanban_events';
import { PathToItem } from '../../types/kanban_paths';
import Column from '../Column/Column';

type Props = {
  board: BoardData
  events: KanbanEvents
  currentPath: PathToItem // number[]
  formSetUp: UserFormsSetup
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
  board, events, currentPath, formSetUp,
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
              currentPath={{
                ...currentPath,
                viaId:
                [...currentPath.viaId, column.id],
                viaIndex: [...currentPath.viaIndex, index],
              }}
              formSetUp={formSetUp}
            />
          ))
        }
      </BoardBody>
    </BoardWrap>
  );
}

export default Board;
