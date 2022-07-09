import styled from 'styled-components';
import equal from 'fast-deep-equal';
import { KanbanEvents } from '../../types/kanban_events';
import { ColumnData } from '../../types/column_data';
import { ColumnPath, ColumnPathNames, PathToItem } from '../../types/kanban_paths';
import Card from '../Card/Card';
import { getPathObject } from '../../library/helpers';
import { FormsSetup } from '../../types/user_forms/forms_setup';
import { AddCardFormSetUp } from '../../types/user_forms/add_card_form_set_up';
import AddCard from '../AddCard/AddCard';

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

const showAddCardForm = (columnTopFormData:AddCardFormSetUp, columnPath: ColumnPath) : Boolean => {
  if (columnTopFormData.show === false && columnTopFormData.pathData === undefined) return false;
  if (equal(columnTopFormData.pathData, columnPath)) {
    return true;
  }
  return false;
};

function Column({
  events: { cardEvents, cardEvents: { openAddCardForm } },
  column, currentPath, formSetUp,
}: Props) {
  const { cards } = column;
  const columnPath = getPathObject([...currentPath.viaId,
    ...currentPath.viaIndex], ColumnPathNames);

  console.log(formSetUp.addCardFormSetUp, currentPath);
  return (
    <ColumnWrap>

      <ColumnHead>
        {column.name}
        <button type="button" onClick={() => openAddCardForm(columnPath)}>
          +
        </button>
      </ColumnHead>
      {showAddCardForm(formSetUp.addCardFormSetUp, columnPath) && (
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
