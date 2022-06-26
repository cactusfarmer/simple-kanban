import styled from 'styled-components';
import { useState } from 'react';
import Wall from '../Wall/Wall';
import data from '../../data/boards.json';
import Nav from '../Nav/Nav';

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    min-height: 100%;`;

function App() {
  const [state, setState] = useState(data);

  const editBoard = (action: string, path: number[]) => {
    console.log(action, path);
    // const newState = state;
    // setState(newState);
    setState(state);
  };

  console.log('state', state);

  const { boards } = state;

  return (
    <Wrapper>
      <Nav boards={boards} editBoard={editBoard} />
      <Wall boards={boards} editBoard={editBoard} />
    </Wrapper>
  );
}

export default App;
