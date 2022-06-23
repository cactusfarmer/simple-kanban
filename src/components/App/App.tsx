import './App.css';
import styled from 'styled-components';
import Wall from '../Wall/Wall';
import data from '../../data/boards.json';
import { WallData } from '../../types/wall_data';

const Wrapper = styled.div`
background: gray`;

const { boards }: WallData = data;

function App() {
  return (
    <Wrapper>
      <Wall data={boards} />
    </Wrapper>
  );
}

export default App;
