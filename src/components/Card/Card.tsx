import styled from 'styled-components';
import { CardData } from '../../types/card_data';

type Props = {
  data: CardData
};

const CardWrapper = styled.div`
background-color: white;
margin-bottom:16px;
box-sizing: border-box;
padding: 12px`;

function Card({ data }: Props) {
  return (
    <CardWrapper>
      <h3>{data.name}</h3>
      <div>{data.info}</div>
    </CardWrapper>
  );
}

export default Card;
