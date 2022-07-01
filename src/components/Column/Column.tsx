import styled from 'styled-components';
import { KanbanEvents } from '../../types/kanban_events';
import { ColumnData } from '../../types/column_data';
import { KanbanPathToItem } from '../../types/kanban_paths';
import Card from '../Card/Card';

type Props = {
  column: ColumnData
  events: KanbanEvents
  columnPath: KanbanPathToItem
};

const ColumnWrap = styled.div`
display: flex;
flex-direction: column;
margin: 0 12px 0 12px;
width: 300px;`;

const ColumnHead = styled.h2`
padding: 8px`;

const ColumnMain = styled.div``;

function Column({ events: { cardEvents }, column, columnPath }: Props) {
  const { cards } = column;

  return (
    <ColumnWrap>
      <ColumnHead>
        {column.name}
      </ColumnHead>
      <ColumnMain>
        {
          cards.map((card, index) => (
            <Card
              key={card.id}
              card={card}
              events={cardEvents}
              cardPath={{
                ...columnPath,
                viaId: [...columnPath.viaId, card.id],
                viaIndex: [...columnPath.viaIndex, index],
              }}
            />
          ))
        }

      </ColumnMain>
    </ColumnWrap>
  );
}

export default Column;
