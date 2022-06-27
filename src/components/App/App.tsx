import styled from 'styled-components';
import { useState } from 'react';
import Wall from '../Wall/Wall';
import data from '../../data/boards.json';
import Nav from '../Nav/Nav';
import { BoardOperations } from '../../types/board_operations';

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    min-height: 100%;`;

function App() {
  const [state, setState] = useState(data);

  const operations: BoardOperations = {
    card: {
      update: (cardPath: number[]) => {
        console.log(cardPath);
        setState(state);
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
    },
  };

  const { boards } = state;

  return (
    <Wrapper>
      <Nav boards={boards} operations={operations} />
      <Wall boards={boards} operations={operations} />
    </Wrapper>
  );
}

export default App;
