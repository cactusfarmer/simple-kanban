import styled from 'styled-components';
import { CardEvents } from '../../types/kanban_events';

type Props = {
  events: CardEvents
};

const AddCardHead = styled.h2`
`;

const AddCardWrap = styled.div`background-color: white;
cursor: pointer;
margin-bottom:16px;
box-sizing: border-box;
padding: 0`;

function AddCard({ events } : Props) {
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    events.addCard();
    console.log('add card');
  };

  const handleChange = () => {
    console.log('change');
  };

  return (
    <AddCardWrap>
      <AddCardHead>
        <form onSubmit={handleFormSubmit}>
          <input type="text" onChange={handleChange} />
          <button type="submit">Add card</button>
        </form>
      </AddCardHead>
    </AddCardWrap>
  );
}

export default AddCard;
