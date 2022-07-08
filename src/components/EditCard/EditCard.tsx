import styled from 'styled-components';
import { CardEvents } from '../../types/kanban_events';
import { CardWithPath } from '../../types/card_data_with_path';

const EditCardWrap = styled.div`
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

const EditCardHead = styled.h2`
padding-left: 16px`;

type Props = {
  forms: CardWithPath
  events: CardEvents
};

function EditCard({ forms: data, events: { editCard: updateCard } }: Props) {
  console.log('initial data', data.card.info);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const info = e.target.elements.info.value;
    updateCard({
      ...data, card: { ...data.card, info },
    });
  };

  const handleTextAreaChange = (e: any) => {
    // validation here...
    console.log('changeState', e.target.value);
  };

  return (
    <EditCardWrap>
      <EditCardHead>Edit card...</EditCardHead>
      <form action="" onSubmit={handleFormSubmit} key={data.card.info}>
        <input type="textarea" onChange={handleTextAreaChange} defaultValue={data.card.info} id="info" name="info" />
        <button type="submit">Update...</button>
      </form>
    </EditCardWrap>
  );
}

export default EditCard;
