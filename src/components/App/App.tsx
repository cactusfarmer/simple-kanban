import styled from 'styled-components';
import { useState } from 'react';
import Wall from '../Wall/Wall';
import data from '../../data/boards.json';
import Nav from '../Nav/Nav';
import { BoardOperations } from '../../types/board_operations';
import CardEdit from '../CardEdit/CardEdit';
import { CardData } from '../../types/card_data';
import { Navigation } from '../../types/navigation';

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    min-height: 100%;`;

function App() {
  const [boardsData, updateBoards] = useState(data);
  const panel: { data?: CardData } = {};
  const [sidePanel, setSidePanel] = useState(panel);
  const [chosenBoard, setChosenBoard] = useState(0);

  const operations: BoardOperations = {
    card: {
      edit: (cardPath: Navigation) => {
        console.log(cardPath);
        // This is potentially better but would mean having the
        // card paths being made of array indexes?
        const card = boardsData.boards[cardPath.viaIndex[0]]
          .columns[cardPath.viaIndex[1]]
          .cards[cardPath.viaIndex[2]];
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
      view: (board: Navigation) => {
        setSidePanel({});
        setChosenBoard(board.viaIndex[0]);
      },
    },
  };

  const { boards } = boardsData;

  return (
    <Wrapper>
      <Nav boards={boards} operations={operations} />
      <Wall boards={boards} operations={operations} boardPath={chosenBoard} />
      {sidePanel?.data && (<CardEdit card={sidePanel.data} />)}
    </Wrapper>
  );
}

export default App;
