import styled from 'styled-components';
import equal from 'fast-deep-equal';
import { KanbanEvents } from '../../types/kanban_events';
import { ColumnData } from '../../types/column_data';
import { ColumnPath, ColumnPathNames, KanbanPathToItem } from '../../types/kanban_paths';
import Card from '../Card/Card';
import { getPathObject } from '../../library/helpers';
import { FormSetupData } from '../../types/form_setup_data';
import { ColumnTopFormData } from '../../types/column_top_form_data';

type Props = {
  column: ColumnData
  events: KanbanEvents
  path: KanbanPathToItem
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

const showForm = (columnTopFormData:ColumnTopFormData, columnPath: ColumnPath) : Boolean => {
  if (columnTopFormData.show === false && columnTopFormData.pathData === undefined) return false;
  if (equal(columnTopFormData.pathData, columnPath)) {
    return true;
  }
  return false;
};

function Column({
  events: { cardEvents, columnEvents: { addCard } },
  column, path, forms: { columnTop: columnTopForm },
}: Props) {
  const { cards } = column;
  const columnPath = getPathObject([...path.viaId, ...path.viaIndex], ColumnPathNames);

  console.log(columnTopForm, path);
  return (
    <ColumnWrap>
      <ColumnHead>
        {column.name}
        <button type="button" onClick={() => addCard(columnPath)}>
          +
        </button>
        {showForm(columnTopForm, columnPath) && (<div>Small form here</div>)}
      </ColumnHead>
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
