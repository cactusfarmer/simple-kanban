import styled from 'styled-components';
import { KanbanActions } from '../../types/kanban_actions';
import { ColumnData } from '../../types/column_data';
import { BoardPath } from '../../types/board_path';
import Card from '../Card/Card';

type Props = {
  column: ColumnData
  actions: KanbanActions
  columnPath: BoardPath
};

const ColumnWrap = styled.div`
display: flex;
flex-direction: column;
margin: 0 12px 0 12px;
width: 300px;`;

const ColumnHead = styled.h2`
padding: 8px`;

const ColumnMain = styled.div``;

function Column({ actions: { cardActions }, column, columnPath }: Props) {
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
              actions={cardActions}
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
