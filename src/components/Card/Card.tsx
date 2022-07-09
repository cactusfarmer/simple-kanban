import styled from 'styled-components';
import { CardEvents } from '../../types/kanban_events';
import { CardData } from '../../types/card_data';
import {
  CardPath, CardPathNames, PathToItem,
} from '../../types/kanban_paths';
import { getPathObject } from '../../library/helpers';

type Props = {
  card: CardData
  events: CardEvents
  currentPath: PathToItem
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
  events: { openEditCardForm }, card, currentPath,
}: Props) {
  const cardPath = getPathObject(
    [...currentPath.viaId, ...currentPath.viaIndex],
    CardPathNames,
  ) as CardPath;
  return (
    <CardWrap onClick={() => {
      openEditCardForm({ card, path: cardPath });
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
