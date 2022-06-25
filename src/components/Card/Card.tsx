import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import { CardData } from '../../types/card_data';

type Props = {
  allBoards: BoardData[]
  card: CardData
  setData: Function
  ancestors: string[]
};

const CardWrap = styled.div`
background-color: white;
margin-bottom:16px;
box-sizing: border-box;
padding: 12px`;

const CardHead = styled.h3``;

const CardBody = styled.div``;

function Card({
  allBoards, setData, card, ancestors,
}: Props) {
  const path = [...ancestors, card.name];

  const handleDelete = () => {
    console.log(allBoards, setData);
    // setData(boardData);
  };

  return (
    <CardWrap>
      <CardHead>{card.name}</CardHead>
      <CardBody>
        {card.info}
        {path.toString()}
        <button onClick={handleDelete} type="button">Delete</button>
      </CardBody>
    </CardWrap>
  );
}

export default Card;
