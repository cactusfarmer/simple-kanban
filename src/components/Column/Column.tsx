import styled from 'styled-components';
import equal from 'fast-deep-equal';
import Card from '../Card/Card';
import AddCard from '../AddCard/AddCard';
import { KanbanEvents } from '../../types/kanban_events';
import { getPathObject } from '../../library/helpers';
import { FormsSetup } from '../../types/user_forms/forms_setup';
import { ColumnPath, ColumnPathNames, PathToItem } from '../../types/kanban_paths';
import { ColumnData } from '../../types/column_data';
import { AddCardFormSetUp } from '../../types/user_forms/add_card_form_set_up';

type Props = {
  column: ColumnData
  events: KanbanEvents
  currentPath: PathToItem
  formSetUp: FormsSetup
};

const ColumnWrap = styled.div`
display: flex;
flex-direction: column;
margin: 0 12px 0 12px;
width: 300px;`;

const ColumnHead = styled.h2`
padding: 8px`;

const ColumnMain = styled.div``;

const showAddCardForm = (addCardFormSetUp:AddCardFormSetUp, columnPath: ColumnPath) : Boolean => {
  if (addCardFormSetUp.show === false && addCardFormSetUp.pathData === undefined) return false;
  if (equal(addCardFormSetUp.pathData, columnPath)) {
    return true;
  }
  return false;
};

function Column({
  events: { cardEvents },
  column, currentPath, formSetUp: { addCardFormSetUp },
}: Props) {
  const { cards } = column;
  const columnPath = getPathObject([...currentPath.viaId,
    ...currentPath.viaIndex], ColumnPathNames);

  console.log(addCardFormSetUp, currentPath);
  return (
    <ColumnWrap>

      <ColumnHead>
        {column.name}
        <button type="button" onClick={() => cardEvents.openAddCardForm(columnPath)}>
          +
        </button>
      </ColumnHead>
      {showAddCardForm(addCardFormSetUp, columnPath) && (
      <AddCard events={cardEvents} />
      )}
      <ColumnMain>
        {
          cards.map((card, index) => (
            <Card
              key={card.id}
              card={card}
              events={cardEvents}
              currentPath={{
                ...currentPath,
                viaId: [...currentPath.viaId, card.id],
                viaIndex: [...currentPath.viaIndex, index],
              }}
            />
          ))
        }

      </ColumnMain>
    </ColumnWrap>
  );
}

export default Column;
