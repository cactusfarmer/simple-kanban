import styled from 'styled-components';
import { CardActions } from '../../types/kanban_actions';
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

const CardEditHead = styled.h2`
padding-left: 16px`;

type Props = {
  card: CardData
  actions: CardActions
};

function CardEdit({ card, actions : {editCard} }: Props) {
  const handleUpdate = (e: any) => {
    e.preventDefault();
    editCard();
  };

  return (
    <CardEditWrap>
      <CardEditHead>Edit card...</CardEditHead>
      <form action="" onSubmit={handleUpdate}>
        {card.info}
      </form>
    </CardEditWrap>
  );
}

export default CardEdit;
