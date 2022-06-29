import styled from 'styled-components';
import { useState } from 'react';
import Wall from '../Wall/Wall';
import data from '../../data/boards.json';
import Nav from '../Nav/Nav';
import { KanbanActions } from '../../types/kanban_actions';
import CardEdit from '../CardEdit/CardEdit';
import { CardData } from '../../types/card_data';
import { BoardPath } from '../../types/board_path';

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    min-height: 100%;`;

function App() {
  const [boardsData, updateBoards] = useState(data);
  const panel: { data?: CardData } = {};
  const [sidePanel, setSidePanel] = useState(panel);
  const [boardPath, setChosenBoardById] = useState({ viaId: [1], viaIndex: [0] } as BoardPath);

  const actions: KanbanActions = {
    card: {
      edit: (pathToCard: BoardPath, card: CardData) => {
        console.log(pathToCard);
        setSidePanel({
          data: card,
        });
        updateBoards(boardsData);
      },
      move: (
        currentPath: number[],
        newPath: number[],
      ) => {
        console.log(currentPath, newPath);
      },
      add: (columnPath: number[]) => {
        console.log(columnPath);
      },
      delete: (cardPath: number[]) => {
        console.log(cardPath);
      },
    },
    board: {
      add: () => console.log('Add board'),
      view: (path: BoardPath) => {
        setSidePanel({});
        setChosenBoardById(path);
      },
    },
    column: {},
  };

  const { boards } = boardsData;

  return (
    <Wrapper>
      <Nav boards={boards} actions={actions.board} />
      <Wall boards={boards} actions={actions} boardPath={boardPath} />
      {sidePanel?.data && (<CardEdit card={sidePanel.data} actions={actions.card} />)}
    </Wrapper>
  );
}

export default App;
