import { BoardData } from '../../types/board_data';
import Board from '../Board/Board';

type Props = {
  data: BoardData[]
};

function Wall({ data }: Props) {
  return (
    <div className="wall">
      {
        data.map((b: BoardData) => (
          <Board data={b} />
        ))
}
    </div>
  );
}

export default Wall;
