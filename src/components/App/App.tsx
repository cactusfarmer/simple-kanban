import styled from 'styled-components';
import { useState } from 'react';
import { CardDataWithPath } from '../../types/card_data_with_path';
import { ColumnPath, PathToItem } from '../../types/kanban_paths';
import { UserFormsSetup } from '../../types/user_forms/user_forms_setup';
import { KanbanEvents } from '../../types/kanban_events';
import { WallData } from '../../types/wall_data';
import data from '../../data/boards.json';
import EditCard from '../EditCard/EditCard';
import Nav from '../Nav/Nav';
import Queries from '../../library/queries';
import Wall from '../Wall/Wall';
import { FormSetUp } from '../../types/user_forms/form_set_up';
import { CardData } from '../../types/card_data';
import { AddCardFormSetUp } from '../../types/user_forms/add_card_form_setup';

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    min-height: 100%;`;

function App() {
  const [boardsData, updateBoards] = useState(data as WallData);

  const [userFormsSetUp, setUpUserForms] = useState(
    {
      editCardFormSetUp: { data: null, show: false } as FormSetUp,
      addCardFormSetUp: { data: null, show: false } as FormSetUp,
    } as UserFormsSetup,
  );

  const [path, setPath] = useState(
    { viaId: [1], viaIndex: [0] } as PathToItem,
  );

  const kanbanEvents: KanbanEvents = {
    cardEvents: {
      addCard: (card: CardData) => { console.log(card); },
      openAddCardForm: (columnPath: ColumnPath, currentCards: CardData[]) => {
        const formSetup : AddCardFormSetUp = {
          columnPath,
          lastInsertId: Queries.getLastInsertId(currentCards),
        };
        setUpUserForms({
          editCardFormSetUp: {
            show: false,
            data: null,
          },
          addCardFormSetUp: {
            show: true,
            data: formSetup,
          },
        });
      },
      editCard: (cardWithPath: CardDataWithPath) => {
        updateBoards(Queries.editCard(boardsData, cardWithPath));
        setUpUserForms({
          ...userFormsSetUp,
          editCardFormSetUp: {
            data: null,
            show: false,
          },
        });
      },
      openEditCardForm: (cardWithPath: CardDataWithPath) => {
        setUpUserForms({
          addCardFormSetUp: {
            show: false,
            data: null,
          },
          editCardFormSetUp: {
            data: cardWithPath,
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
            data: null,
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
      {editCardFormSetUp.data !== null && editCardFormSetUp.show
        && (<EditCard formSetUp={editCardFormSetUp.data} events={cardEvents} />)}
    </Wrapper>
  );
}

export default App;
