import styled from 'styled-components';
import equal from 'fast-deep-equal';
import { KanbanEvents } from '../../types/kanban_events';
import { ColumnData } from '../../types/column_data';
import { ColumnPath, ColumnPathNames, PathToItem } from '../../types/kanban_paths';
import Card from '../Card/Card';
import { getPathObject } from '../../library/helpers';
import { FormSetupData } from '../../types/form_setup_data';
import { AddCardSetUpData } from '../../types/add_card_set_up_data';
import AddCard from '../AddCard/AddCard';

type Props = {
  column: ColumnData
  events: KanbanEvents
  path: PathToItem
  forms: FormSetupData
};

const ColumnWrap = styled.div`
display: flex;
flex-direction: column;
margin: 0 12px 0 12px;
width: 300px;`;

const ColumnHead = styled.h2`
padding: 8px`;

const ColumnMain = styled.div``;

const showForm = (columnTopFormData:AddCardSetUpData, columnPath: ColumnPath) : Boolean => {
  if (columnTopFormData.show === false && columnTopFormData.pathData === undefined) return false;
  if (equal(columnTopFormData.pathData, columnPath)) {
    return true;
  }
  return false;
};

function Column({
  events: { cardEvents, cardEvents: { openAddCard } },
  column, path, forms: { addCard: columnTopForm },
}: Props) {
  const { cards } = column;
  const columnPath = getPathObject([...path.viaId, ...path.viaIndex], ColumnPathNames);

  console.log(columnTopForm, path);
  return (
    <ColumnWrap>

      <ColumnHead>
        {column.name}
        <button type="button" onClick={() => openAddCard(columnPath)}>
          +
        </button>
      </ColumnHead>
      {showForm(columnTopForm, columnPath) && (
      <AddCard events={cardEvents} />
      )}
      <ColumnMain>
        {
          cards.map((card, index) => (
            <Card
              key={card.id}
              card={card}
              events={cardEvents}
              path={{
                ...path,
                viaId: [...path.viaId, card.id],
                viaIndex: [...path.viaIndex, index],
              }}
            />
          ))
        }

      </ColumnMain>
    </ColumnWrap>
  );
}

export default Column;
