import styled from 'styled-components';
import { CardData } from '../../types/card_data';

const CardEditWrap = styled.div`
position: -webkit-sticky;
position: sticky;
z-index: 1500;
right: 0;
display: flex;
overflow-x: hidden;
overflow-y: auto;
flex-direction: column;
flex-shrink: 0;
width: 10vw;
border-left: 1px solid #999);
`;

type Props = {
  card: CardData
};

function CardEdit({ card }: Props) {
  return (
    <CardEditWrap>
      {card.info}
    </CardEditWrap>
  );
}

export default CardEdit;
