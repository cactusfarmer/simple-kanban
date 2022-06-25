import styled from 'styled-components';
import { CardData } from '../../types/card_data';

type Props = {
  data: CardData
};

const CardWrap = styled.div`
background-color: white;
margin-bottom:16px;
box-sizing: border-box;
padding: 12px`;

const CardHead = styled.h3``;

const CardBody = styled.div``;

function Card({ data }: Props) {
  return (
    <CardWrap>
      <CardHead>{data.name}</CardHead>
      <CardBody>{data.info}</CardBody>
    </CardWrap>
  );
}

export default Card;
