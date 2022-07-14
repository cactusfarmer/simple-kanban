import styled from "styled-components";
import { BoardData } from "../../../types/board_data";
import { BoardEvents } from "../../../types/kanban_events";

type Props = {
    boardName: String
    boardId: number
    events: BoardEvents
    index: number
    selected: Boolean
}

/* const Button = styled.a`
display:inline-block;
padding:0.3em 1.2em;
margin:0 0.3em 0.3em 0;
border-radius:2em;
box-sizing: border-box;
text-decoration:none;
font-family:'Roboto',sans-serif;
font-weight:300;
color:#FFFFFF;
background-color:#4eb5f1;
border: ${props => props.selected ? "" : "" }
text-align:center;
transition: all 0.2s;

&:hover {
    background-color:#4095c6;
}`;*/

const Button  = styled.a.attrs((props : {selected: Boolean}) => props)`
display:inline-block;
padding:0.3em 1.2em;
margin:0 0.3em 0.3em 0;
border-radius:2em;
box-sizing: border-box;
text-decoration:none;
font-family:'Roboto',sans-serif;
font-weight:300;
color:#FFFFFF;
background-color:#4eb5f1;
border: ${(props) => props.selected ? "1px solid black" : "none" };
text-align:center;
transition: all 0.2s;

&:hover {
    background-color:#4095c6;
}`

// ${(props) => props.selected ? "1px solid black" : "none" }

const ButtonWrapper = styled.div``;
function NavButton({ boardName, boardId, index, selected, events: { viewBoard } }: Props) {
    return (
        <ButtonWrapper>
            <Button selected={selected} key={boardId} onClick={() => { viewBoard({ viaId: [boardId], viaIndex: [index] }); }}>
                {boardName}
            </Button>
        </ButtonWrapper>
    )
}

export default NavButton