import styled from 'styled-components';
import { useState } from 'react';
import Wall from '../Wall/Wall';
import data from '../../data/boards.json';
import Nav from '../Nav/Nav';
import { KanbanEvents } from '../../types/kanban_events';
import CardView from '../CardView/CardView';
import { ColumnPath, KanbanPathToItem } from '../../types/kanban_paths';
import { SidePanelData } from '../../types/side_panel_data';
import { CardWithPath } from '../../types/card_data_with_path';
import Queries from '../../library/queries';
import { WallData } from '../../types/wall_data';
import { ColumnTopFormData } from '../../types/column_top_form_data';
import { FormSetupData } from '../../types/form_setup_data';

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    min-height: 100%;`;

function App() {
  const [boardsData, updateBoards] = useState(data as WallData);

  const [formSetupData, setFormsData] = useState(
    {
      sidePanel: { cardWithPath: undefined, show: false } as SidePanelData,
      columnTop: { pathData: undefined, show: false } as ColumnTopFormData,
    } as FormSetupData,
  );

  const [boardPath, setChosenBoardById] = useState(
    { viaId: [1], viaIndex: [0] } as KanbanPathToItem,
  );

  const kanbanEvents: KanbanEvents = {
    cardEvents: {
      updateCard: (cardWithPath: CardWithPath) => {
        updateBoards(Queries.editCard(boardsData, cardWithPath));
        setFormsData({
          ...formSetupData,
          sidePanel: {
            cardWithPath: undefined,
            show: false,
          },
        });
      },
      viewCard: (cardWithPath: CardWithPath) => {
        setFormsData({
          ...formSetupData,
          sidePanel: {
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
      viewBoard: (path: KanbanPathToItem) => {
        console.log('viewBoard', path);
        setFormsData({
          ...formSetupData,
          sidePanel: {
            cardWithPath: undefined,
            show: false,
          },
        });
        setChosenBoardById(path);
      },
    },
    columnEvents: {
      addCard: (columnToAddTo: ColumnPath) => {
        setFormsData({
          ...formSetupData,
          columnTop: {
            show: true,
            pathData: columnToAddTo,
          },
        });
        console.log(columnToAddTo);
      },
    },
  };
  const { sidePanel } = formSetupData;
  const { boards } = boardsData;
  const { cardEvents, boardEvents } = kanbanEvents;
  return (
    <Wrapper>
      <Nav boards={boards} events={boardEvents} />
      <Wall
        boards={boards}
        events={kanbanEvents}
        path={boardPath}
        forms={formSetupData}
      />
      {sidePanel.cardWithPath !== undefined && sidePanel.show
        && (<CardView forms={sidePanel.cardWithPath} events={cardEvents} />)}
    </Wrapper>
  );
}

export default App;
