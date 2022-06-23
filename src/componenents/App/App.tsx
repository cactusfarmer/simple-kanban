import './App.css';
import Wall from '../Wall/Wall';
import data from '../../data/boards.json';
import { WallData } from '../../types/wall_data';

const { boards }: WallData = data;

function App() {
  return (<Wall data={boards} />);
}

export default App;
