import { ColumnData } from '../../types/column_data';
import Card from '../Card/Card';

type Props = {
  data: ColumnData
};
function Column({ data }: Props) {
  return (
    <li className="column">
      <h2>{data.name}</h2>
      <ul className="cards">
        {
            data.cards.map((card) => (
              <Card data={card} />
            ))
        }
      </ul>
    </li>
  );
}

export default Column;
