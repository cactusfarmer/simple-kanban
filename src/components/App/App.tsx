import styled from 'styled-components';
import { useState } from 'react';
import Wall from '../Wall/Wall';
import data from '../../data/boards.json';
import Nav from '../Nav/Nav';
import { KanbanEvents } from '../../types/kanban_events';
import CardView from '../CardView/CardView';
import { CardData } from '../../types/card_data';
import { BoardPath } from '../../types/board_path';
import { SidePanelData } from '../../types/side_panel_data';
import Queries from '../../library/queries';

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    min-height: 100%;`;

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [boardsData, updateBoards] = useState(data);
  const [sidePanel, setSidePanel] = useState(
    { cardData: undefined, visible: false } as SidePanelData,
  );

  const [boardPath, setChosenBoardById] = useState(
    { viaId: [1], viaIndex: [0] } as BoardPath,
  );

  const kanbanEvents: KanbanEvents = {
    cardEvents: {
      editCard: (card: CardData) => {
        Queries.editCard(boardsData, card);
        setSidePanel({ cardData: undefined, visible: false });
      },
      viewCard: (pathToCard: BoardPath, card: CardData) => {
        console.log('viewCard', pathToCard, card);
        setSidePanel({
          cardData: card, visible: true,
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
      viewBoard: (path: BoardPath) => {
        console.log('viewBoard', path);
        setSidePanel({ cardData: undefined, visible: false });
        setChosenBoardById(path);
      },
    },
    columnEvents: {},
  };

  const { boards } = boardsData;
  const { cardEvents, boardEvents } = kanbanEvents;
  const { cardData, visible } = sidePanel;
  return (
    <Wrapper>
      <Nav boards={boards} events={boardEvents} />
      <Wall boards={boards} events={kanbanEvents} boardPath={boardPath} />
      {cardData !== undefined && visible
      && (<CardView card={cardData} events={cardEvents} />)}
    </Wrapper>
  );
}

export default App;
