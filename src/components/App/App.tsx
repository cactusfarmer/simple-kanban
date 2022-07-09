import styled from 'styled-components';
import { useState } from 'react';
import { AddCardFormSetUp } from '../../types/user_forms/add_card_form_set_up';
import { CardWithPath } from '../../types/card_data_with_path';
import { ColumnPath, PathToItem } from '../../types/kanban_paths';
import { EditCardFormSetUp } from '../../types/user_forms/edit_card_form_set_up';
import { FormsSetup } from '../../types/user_forms/forms_setup';
import { KanbanEvents } from '../../types/kanban_events';
import { WallData } from '../../types/wall_data';
import data from '../../data/boards.json';
import EditCard from '../EditCard/EditCard';
import Nav from '../Nav/Nav';
import Queries from '../../library/queries';
import Wall from '../Wall/Wall';

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    min-height: 100%;`;

function App() {
  const [boardsData, updateBoards] = useState(data as WallData);

  const [userFormsSetUp, setUpUserForms] = useState(
    {
      editCardFormSetUp: { cardWithPath: undefined, show: false } as EditCardFormSetUp,
      addCardFormSetUp: { pathData: undefined, show: false } as AddCardFormSetUp,
    } as FormsSetup,
  );

  const [path, setPath] = useState(
    { viaId: [1], viaIndex: [0] } as PathToItem,
  );

  const kanbanEvents: KanbanEvents = {
    cardEvents: {
      addCard: () => { console.log('addCard'); },
      openAddCardForm: (columnToAddTo: ColumnPath) => {
        setUpUserForms({
          editCardFormSetUp: {
            show: false,
            cardWithPath: undefined,
          },
          addCardFormSetUp: {
            show: true,
            pathData: columnToAddTo,
          },
        });
        console.log(columnToAddTo);
      },
      editCard: (cardWithPath: CardWithPath) => {
        updateBoards(Queries.editCard(boardsData, cardWithPath));
        setUpUserForms({
          ...userFormsSetUp,
          editCardFormSetUp: {
            cardWithPath: undefined,
            show: false,
          },
        });
      },
      openEditCardForm: (cardWithPath: CardWithPath) => {
        setUpUserForms({
          addCardFormSetUp: {
            show: false,
            pathData: undefined,
          },
          editCardFormSetUp: {
            cardWithPath,
            show: true,
          },
        });
      },
      moveCard: (
        currentPath: number[],
        newPath: number[],
      ) => {
        console.log(currentPath, newPath);
      },
      deleteCard: (cardPath: number[]) => {
        console.log(cardPath);
      },
    },
    boardEvents: {
      addBoard: () => console.log('Add board'),
      viewBoard: (boardPath: PathToItem) => {
        console.log('viewBoard', boardPath);
        setUpUserForms({
          ...userFormsSetUp,
          editCardFormSetUp: {
            cardWithPath: undefined,
            show: false,
          },
        });
        setPath(boardPath);
      },
    },
    columnEvents: {

    },
  };
  const { editCardFormSetUp } = userFormsSetUp;
  const { boards } = boardsData;
  const { cardEvents, boardEvents } = kanbanEvents;
  return (
    <Wrapper>
      <Nav boards={boards} events={boardEvents} />
      <Wall
        boards={boards}
        events={kanbanEvents}
        currentPath={path}
        formSetUp={userFormsSetUp}
      />
      {editCardFormSetUp.cardWithPath !== undefined && editCardFormSetUp.show
        && (<EditCard formSetUp={editCardFormSetUp.cardWithPath} events={cardEvents} />)}
    </Wrapper>
  );
}

export default App;
