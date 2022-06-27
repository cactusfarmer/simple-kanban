import styled from 'styled-components';
import { BoardOperations } from '../../types/board_operations';
import { ColumnData } from '../../types/column_data';
import Card from '../Card/Card';

type Props = {
  column: ColumnData
  operations: BoardOperations
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

function Column({ operations, column, columnPath }: Props) {
  const { cards } = column;

  return (
    <ColumnWrap>
      <ColumnHead>
        {column.name}
      </ColumnHead>
      <ColumnMain>
        {
          cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              operations={operations}
              cardPath={[...columnPath, card.id]}
            />
          ))
        }

      </ColumnMain>
    </ColumnWrap>
  );
}

export default Column;
