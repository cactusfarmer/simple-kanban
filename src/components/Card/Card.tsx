import styled from 'styled-components';
import { CardEvents } from '../../types/kanban_events';
import { CardData } from '../../types/card_data';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CardPath, CardPathById, KanbanPathToItem } from '../../types/kanban_paths';
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
  const propertyNames = ['boardId', 'columnId', 'cardId', 'boardIndex', 'columnIndex', 'cardIndex'];
  const path = getPathObject(
    [...cardPath.viaId, ...cardPath.viaIndex],
    propertyNames,
  ) as CardPath;
  console.log(path);
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
