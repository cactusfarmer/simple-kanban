import styled from 'styled-components';
import { ColumnData } from '../../types/column_data';
import Card from '../Card/Card';

type Props = {
  data: ColumnData
};

const ColumnWrap = styled.div`
display: flex;
flex-direction: column;
margin: 0 12px 0 12px;
width: 300px;`;

const ColumnHead = styled.h2`
padding: 8px`;

const ColumnMain = styled.div``;

function Column({ data }: Props) {
  return (
    <ColumnWrap>
      <ColumnHead>{data.name}</ColumnHead>
      <ColumnMain>
        {
          data.cards.map((card) => (
            <Card data={card} />
          ))
        }
      </ColumnMain>
    </ColumnWrap>
  );
}

export default Column;
