import { BoardData } from '../../types/board_data';
import Column from '../Column/Column';

type Props = {
  data: BoardData
};

function Board({ data }: Props): any {
  return (
    <div className="board">
      <h2>{data.name}</h2>
      <div>
        <ul className="columns">
          {
            data.columns.map((column) => (
              <Column data={column} />
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Board;
