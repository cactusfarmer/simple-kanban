import { ColumnData } from "../../types/column_data"
import Card from "../Card/Card"

type Props = {
    data: ColumnData
}
const Column = ({ data }: Props) => (
    <li className="column">
        <h2>{data.name}</h2>
        <ul className="cards">{
            data.cards.map(card => (
                <Card data={card}></Card>
            ))
        }</ul>
    </li>
)

export default Column