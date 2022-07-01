import styled from 'styled-components';
import { CardEvents } from '../../types/kanban_events';
import { CardData } from '../../types/card_data';
import { CardPathById, KanbanPathToItem } from '../../types/kanban_paths';
import { getPathObject } from '../../library/helpers';

type Props = {
  card: CardData
  events: CardEvents
  cardPath: KanbanPathToItem
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
  events: { viewCard }, card, cardPath,
}: Props) {
  const path = getPathObject(cardPath.viaId) as CardPathById;
  return (
    <CardWrap onClick={() => {
      viewCard({ card, path });
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
