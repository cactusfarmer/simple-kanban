import styled from 'styled-components';
import { useState } from 'react';
import Wall from '../Wall/Wall';
import data from '../../data/boards.json';
import Nav from '../Nav/Nav';
import { KanbanEvents } from '../../types/kanban_events';
import EditCard from '../EditCard/EditCard';
import { ColumnPath, PathToItem } from '../../types/kanban_paths';
import { EditCardSetUpData } from '../../types/edit_card_set_up_data';
import { CardWithPath } from '../../types/card_data_with_path';
import Queries from '../../library/queries';
import { WallData } from '../../types/wall_data';
import { AddCardSetUpData } from '../../types/add_card_set_up_data';
import { FormSetupData } from '../../types/form_setup_data';

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    min-height: 100%;`;

function App() {
  const [boardsData, updateBoards] = useState(data as WallData);

  const [formSetUp, setFormSetUp] = useState(
    {
      editCard: { cardWithPath: undefined, show: false } as EditCardSetUpData,
      addCard: { pathData: undefined, show: false } as AddCardSetUpData,
    } as FormSetupData,
  );

  const [path, setPath] = useState(
    { viaId: [1], viaIndex: [0] } as PathToItem,
  );

  const kanbanEvents: KanbanEvents = {
    cardEvents: {
      addCard: () => { console.log('addCard'); },
      openAddCard: (columnToAddTo: ColumnPath) => {
        setFormSetUp({
          editCard: {
            show: false,
            cardWithPath: undefined,
          },
          addCard: {
            show: true,
            pathData: columnToAddTo,
          },
        });
        console.log(columnToAddTo);
      },
      editCard: (cardWithPath: CardWithPath) => {
        updateBoards(Queries.editCard(boardsData, cardWithPath));
        setFormSetUp({
          ...formSetUp,
          editCard: {
            cardWithPath: undefined,
            show: false,
          },
        });
      },
      openEditCard: (cardWithPath: CardWithPath) => {
        setFormSetUp({
          addCard: {
            show: false,
            pathData: undefined,
          },
          editCard: {
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
        setFormSetUp({
          ...formSetUp,
          editCard: {
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
  const { editCard: sidePanel } = formSetUp;
  const { boards } = boardsData;
  const { cardEvents, boardEvents } = kanbanEvents;
  return (
    <Wrapper>
      <Nav boards={boards} events={boardEvents} />
      <Wall
        boards={boards}
        events={kanbanEvents}
        path={path}
        forms={formSetUp}
      />
      {sidePanel.cardWithPath !== undefined && sidePanel.show
        && (<EditCard forms={sidePanel.cardWithPath} events={cardEvents} />)}
    </Wrapper>
  );
}

export default App;
