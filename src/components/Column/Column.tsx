import styled from 'styled-components';
import equal from 'fast-deep-equal';
import Card from '../Card/Card';
import AddCard from '../AddCard/AddCard';
import { KanbanEvents } from '../../types/kanban_events';
import { getPathObject } from '../../library/helpers';
import { UserFormsSetup } from '../../types/user_forms/user_forms_setup';
import { ColumnPath, ColumnPathNames, PathToItem } from '../../types/kanban_paths';
import { ColumnData } from '../../types/column_data';
import { FormSetUp } from '../../types/user_forms/form_set_up';

type Props = {
  column: ColumnData
  events: KanbanEvents
  currentPath: PathToItem
  formSetUp: UserFormsSetup
};

const ColumnWrap = styled.div`
display: flex;
flex-direction: column;
margin: 0 12px 0 12px;
width: 300px;`;

const ColumnHead = styled.h2`
padding: 8px`;

const ColumnMain = styled.div``;

const showAddCardForm = (formSetUp:FormSetUp, columnPath: ColumnPath) : Boolean => {
  if (formSetUp.show === false && formSetUp.data === null) return false;
  if (equal(formSetUp.data.columnPath, columnPath)) {
    return true;
  }
  return false;
};

function Column({
  events: { cardEvents },
  column, currentPath, formSetUp: { addCardFormSetUp },
}: Props) {
  const { cards } = column;
  const currentColumn = getPathObject([...currentPath.viaId,
    ...currentPath.viaIndex], ColumnPathNames);

  return (
    <ColumnWrap>

      <ColumnHead>
        {column.name}
        <button type="button" onClick={() => cardEvents.openAddCardForm(currentColumn, cards)}>
          +
        </button>
      </ColumnHead>
      {showAddCardForm(addCardFormSetUp, currentColumn) && (
      <AddCard events={cardEvents} formSetup={addCardFormSetUp.data} />
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
