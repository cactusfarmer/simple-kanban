import styled from 'styled-components';
import { CardData } from '../../types/card_data';

type Props = {
  card: CardData
  editBoard: Function
  cardPath: number[]
};

const CardWrap = styled.div`
background-color: white;
margin-bottom:16px;
box-sizing: border-box;
padding: 12px`;

const CardHead = styled.h3``;

const CardBody = styled.div``;

function Card({
  editBoard, card, cardPath,
}: Props) {
  return (
    <CardWrap>
      <CardHead>
        <div>{card.name}</div>
        <button
          onClick={() => {
            editBoard('DELETE', cardPath);
          }}
          type="button"
        >
          Delete
        </button>
      </CardHead>
      <CardBody>
        {card.info}
      </CardBody>
    </CardWrap>
  );
}

export default Card;
