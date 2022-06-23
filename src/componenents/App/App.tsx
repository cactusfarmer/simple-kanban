import './App.css';
import Wall from '../Wall/Wall';
import data from '../../../data/boards.json'
import { WallData } from '../../types/wall_data';

const wallData: WallData = data
/* const wallData: WallData = {
  "boards": [
      {
          "name": "Building work",
          "columns": [
              {
                  "name": "To do",
                  "cards": [
                      {
                          "name": "Chimney",
                          "owner": "Matt",
                          "info": "1 am monday please"
                      }
                  ]
              }
          ]
      }
  ]
}*/

function App() {
    return (<Wall data={data.boards}></Wall>);
}

export default App;
