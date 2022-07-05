import styled from 'styled-components';
import { useState } from 'react';
import Wall from '../Wall/Wall';
import data from '../../data/boards.json';
import Nav from '../Nav/Nav';
import { KanbanEvents } from '../../types/kanban_events';
import CardView from '../CardView/CardView';
import { KanbanPathToItem } from '../../types/kanban_paths';
import { SidePanelData } from '../../types/side_panel_data';
import { CardWithPath } from '../../types/card_data_with_path';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Queries from '../../library/queries';
import { WallData } from '../../types/wall_data';

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    min-height: 100%;`;

const boardLoad = (walldata: WallData) : void => console.log(walldata);

function App() {
  boardLoad(data as WallData);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [boardsData, updateBoards] = useState(data as WallData);
  const [sidePanel, setSidePanel] = useState(
    { panelData: undefined, show: false } as SidePanelData,
  );

  const [boardPath, setChosenBoardById] = useState(
    { viaId: [1], viaIndex: [0] } as KanbanPathToItem,
  );

  const kanbanEvents: KanbanEvents = {
    cardEvents: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      updateCard: (cardWithPath: CardWithPath) => {
        updateBoards(Queries.editCard(boardsData, cardWithPath));
        setSidePanel({ panelData: undefined, show: false });
      },
      viewCard: (cardWithPath: CardWithPath) => {
        setSidePanel({
          panelData: cardWithPath, show: true,
        });
      },
      moveCard: (
        currentPath: number[],
        newPath: number[],
      ) => {
        console.log(currentPath, newPath);
      },
      addCard: (columnPath: number[]) => {
        console.log(columnPath);
      },
      deleteCard: (cardPath: number[]) => {
        console.log(cardPath);
      },
    },
    boardEvents: {
      addBoard: () => console.log('Add board'),
      viewBoard: (path: KanbanPathToItem) => {
        console.log('viewBoard', path);
        setSidePanel({ panelData: undefined, show: false });
        setChosenBoardById(path);
      },
    },
    columnEvents: {},
  };

  const { boards } = boardsData;
  const { cardEvents, boardEvents } = kanbanEvents;
  return (
    <Wrapper>
      <Nav boards={boards} events={boardEvents} />
      <Wall boards={boards} events={kanbanEvents} boardPath={boardPath} />
      {sidePanel.panelData !== undefined && sidePanel.show
        && (<CardView data={sidePanel.panelData} events={cardEvents} />)}
    </Wrapper>
  );
}

export default App;
