import { CardData } from '../../types/card_data';

type Props = {
  data: CardData
};

function Card({ data }: Props) {
  return (
    <li>
      <h3>{data.name}</h3>
    </li>
  );
}

export default Card;
