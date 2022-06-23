import { BoardData } from "../../types/board_data"
import { WallData } from "../../types/wall_data"
import Board from "../Board/Board"

type Props = {
    data: BoardData[]
}

const Wall = ({ data }: Props) => (
    <div className="wall">{
        data.map((b: BoardData) => (
            <Board data={b} />
        ))}
    </div>
)

export default Wall