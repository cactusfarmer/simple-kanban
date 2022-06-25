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
  const [{ boards }, setState] = useState(data);

  return (
    <Wrapper>
      <Nav allBoards={boards} setState={setState} />
      <Wall allBoards={boards} setState={setState} />
    </Wrapper>
  );
}

export default App;
