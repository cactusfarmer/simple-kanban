import styled from 'styled-components';
import { CardActions } from '../../types/kanban_actions';
import { CardData } from '../../types/card_data';
import { BoardPath } from '../../types/board_path';

type Props = {
  card: CardData
  actions: CardActions
  cardPath: BoardPath
};

const CardWrap = styled.div`
background-color: white;
cursor: pointer;
margin-bottom:16px;
box-sizing: border-box;
padding: 12px`;

const CardHead = styled.h3``;

const CardBody = styled.div``;

function Card({
  actions, card, cardPath,
}: Props) {
  return (
    <CardWrap onClick={() => {
      actions.viewCard(cardPath, card);
    }}
    >
      <CardHead>
        {card.name}
      </CardHead>
      <CardBody>
        {card.info}
      </CardBody>
    </CardWrap>
  );
}

export default Card;
