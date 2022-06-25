import styled from 'styled-components';
import Wall from '../Wall/Wall';
import data from '../../data/boards.json';
import { WallData } from '../../types/wall_data';
import Nav from '../Nav/Nav';

const AppWrap = styled.div`
    box-sizing: border-box;
    display: flex;
    min-height: 100%;`;

const { boards }: WallData = data;

const boardNames: string[] = boards.map((b) => b.name);

function App() {
  return (
    <AppWrap>
      <Nav data={boardNames} />
      <Wall data={boards} />
    </AppWrap>
  );
}

export default App;
