import styled from 'styled-components';
import { CardData } from '../../types/card_data';
import { CardEvents } from '../../types/kanban_events';

const CardViewWrap = styled.div`
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

const CardViewHead = styled.h2`
padding-left: 16px`;

type Props = {
  card: CardData
  events: CardEvents
};

function CardView({ card, events: { editCard } }: Props) {
  console.log('initial data', card.info);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const info = e.target.elements.info.value;
    editCard({
      ...card, info,
    });
  };

  const handleTextAreaChange = (e: any) => {
    // validation here...
    console.log('changeState', e.target.value);
  };

  return (
    <CardViewWrap>
      <CardViewHead>Edit card...</CardViewHead>
      <form action="" onSubmit={handleFormSubmit} key={card.info}>
        <input type="textarea" onChange={handleTextAreaChange} defaultValue={card.info} id="info" name="info" />
        <button type="submit">Update...</button>
      </form>
    </CardViewWrap>
  );
}

export default CardView;
