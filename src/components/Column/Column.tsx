import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import { ColumnData } from '../../types/column_data';
import Card from '../Card/Card';

type Props = {
  allBoards: BoardData[]
  column: ColumnData
  setState: Function
  columnPath: number[]
};

const ColumnWrap = styled.div`
display: flex;
flex-direction: column;
margin: 0 12px 0 12px;
width: 300px;`;

const ColumnHead = styled.h2`
padding: 8px`;

const ColumnMain = styled.div``;

function Column({
  allBoards, setState, column, columnPath,
}: Props) {
  // const path = [...ancestors, column.name];

  const { cards } = column;
  const handleDelete = () => {
    console.log(allBoards, setState);
    // setState(boardData);
  };

  return (
    <ColumnWrap>
      <ColumnHead>
        {column.name}
      </ColumnHead>
      <ColumnMain>
        {
          cards.map((card, cardIndex) => (
            <Card
              allBoards={allBoards}
              card={card}
              setState={setState}
              cardPath={[...columnPath, cardIndex]}
            />
          ))
        }
        <button onClick={handleDelete} type="button">Delete</button>
      </ColumnMain>
    </ColumnWrap>
  );
}

export default Column;
