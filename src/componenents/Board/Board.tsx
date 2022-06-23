import { BoardData } from "../../types/board_data"
import Column from "../Column/Column"

type Props = {
    data: BoardData
}

const Board = ({ data }: Props): any => (
    <div className="board">
        <h2>{data.name}</h2>
        <div>
            <ul className="columns">{
                data.columns.map((column) => (
                    <Column data={column}></Column>
                ))}
            </ul>
        </div>
    </div>
)

export default Board