import styled from 'styled-components';
import { ColumnData } from '../../types/column_data';
import Card from '../Card/Card';

type Props = {
  data: ColumnData
};

const ColumnWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 0 12px 0 12px;
width: 300px;`;

const ColumnHeader = styled.h2`
padding: 8px`;

function Column({ data }: Props) {
  return (
    <ColumnWrapper>
      <ColumnHeader>{data.name}</ColumnHeader>
      {
        data.cards.map((card) => (
          <Card data={card} />
        ))
      }
    </ColumnWrapper>
  );
}

export default Column;
