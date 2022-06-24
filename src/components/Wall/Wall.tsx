import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import Board from '../Board/Board';

type Props = {
  data: BoardData[]
};

const WallWrapper = styled.main`
position: relative;
flex-basis: 100vw;
min-width: 0;
min-height: 100%;`;

function Wall({ data }: Props) {
  return (
    <WallWrapper>
      {
        data.map((b: BoardData) => (
          <Board data={b} />
        ))
      }
    </WallWrapper>
  );
}

export default Wall;
