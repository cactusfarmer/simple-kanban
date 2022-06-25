import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import { ColumnData } from '../../types/column_data';
import Card from '../Card/Card';

type Props = {
  allBoards: BoardData[]
  column: ColumnData
  setState: Function
  ancestors: string[]
};

const ColumnWrap = styled.div`
display: flex;
flex-direction: column;
margin: 0 12px 0 12px;
width: 300px;`;

const ColumnHead = styled.h2`
padding: 8px`;

const ColumnMain = styled.div``;

function Column({
  allBoards, setState, column, ancestors,
}: Props) {
  const path = [...ancestors, column.name];

  const handleDelete = () => {
    console.log(allBoards, setState)
    //setState(boardData);
  };

  return (
    <ColumnWrap>
      <ColumnHead>
        {column.name}
        {path.toString()}
      </ColumnHead>
      <ColumnMain>
        {
          column.cards.map((card) => (
            <Card allBoards={allBoards} card={card} setState={setState} ancestors={path} />
          ))
        }
        <button onClick={handleDelete} type="button">Delete</button>
      </ColumnMain>
    </ColumnWrap>
  );
}

export default Column;
