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

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    min-height: 100%;`;

function App() {
  const [boardsData, updateBoards] = useState(data);
  const panel: SidePanelData = { cardData: undefined };
  const [sidePanel, setSidePanel] = useState(panel);
  const [boardPath, setChosenBoardById] = useState({ viaId: [1], viaIndex: [0] } as BoardPath);

  console.log(updateBoards.length);

  const kanbanEvents: KanbanEvents = {
    cardEvents: {
      editCard: (card: CardData) => {
        console.log('editCard', card);
        setSidePanel({ cardData: undefined });
      },
      viewCard: (pathToCard: BoardPath, card: CardData) => {
        console.log('viewCard', pathToCard, card);
        setSidePanel({
          cardData: card,
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
        setSidePanel({ cardData: undefined });
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
      {sidePanel?.cardData && (<CardView sidePanelData={sidePanel} events={cardEvents} />)}
    </Wrapper>
  );
}

export default App;
