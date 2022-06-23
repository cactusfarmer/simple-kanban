import { CardData } from "../../types/card_data"

type Props = {
    data: CardData
}

const Card = ({ data }: Props) => (
    <li>
        <h3>{data.name}</h3>
    </li>
)

export default Card