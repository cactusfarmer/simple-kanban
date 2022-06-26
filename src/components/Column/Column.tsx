import styled from 'styled-components';
import { ColumnData } from '../../types/column_data';
import Card from '../Card/Card';

type Props = {
  column: ColumnData
  editBoard: Function
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

function Column({ editBoard, column, columnPath }: Props) {
  const { cards } = column;

  return (
    <ColumnWrap>
      <ColumnHead>
        <div>{column.name}</div>
        <button
          onClick={() => {
            editBoard('DELETE', columnPath);
          }}
          type="button"
        >
          Delete
        </button>
      </ColumnHead>
      <ColumnMain>
        {
          cards.map((card, cardIndex) => (
            <Card
              key={card.name}
              card={card}
              editBoard={editBoard}
              cardPath={[...columnPath, cardIndex]}
            />
          ))
        }

      </ColumnMain>
    </ColumnWrap>
  );
}

export default Column;
