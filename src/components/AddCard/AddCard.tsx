import styled from 'styled-components';
import { CardData } from '../../types/card_data';
import { CardEvents } from '../../types/kanban_events';
import { AddCardFormSetUp } from '../../types/user_forms/add_card_form_setup';

type Props = {
  events: CardEvents
  formSetup: AddCardFormSetUp
};

const AddCardHead = styled.h2`
`;

const AddCardWrap = styled.div`background-color: white;
cursor: pointer;
margin-bottom:16px;
box-sizing: border-box;
padding: 0`;

// Need to pass id value to add to here really
function AddCard({ events, formSetup } : Props) {
  console.log('addcard: ', formSetup);
  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    const card : CardData = {
      id: (formSetup.lastInsertId + 1),
      name: e.target.elements.name.value,
      owner: 'Matt',
    };

    events.addCard(card, formSetup.columnPath);
  };

  const handleChange = (e: any) => {
    console.log('change', e.target.value);
  };

  return (
    <AddCardWrap>
      <AddCardHead>
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="card name" onChange={handleChange} name="name" id="name" />
          <button type="submit">Add card</button>
        </form>
      </AddCardHead>
    </AddCardWrap>
  );
}

export default AddCard;
