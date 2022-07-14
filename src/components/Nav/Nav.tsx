import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import { NavEvents } from '../../types/kanban_events';
import { NavButton } from './NavButton';
// import ButtonWrap from './NavButton/NavButton';

type Props = {
  boards: BoardData[]
  events: NavEvents
};
const NavWrap = styled.div`
                    background-color: #efefef;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    height: calc(100vh - 20px);
                    top:20px;
                    width: 300px;
`;
const NavBody = styled.ul``;

const NavHead = styled.h2`
padding-left: 16px`;

function Nav({ boards, events }: Props) {
  return (
    <NavWrap>
      <NavHead>
        All Boards
      </NavHead>
      <NavBody>
        {
          boards?.map(({ name, id }, index) => (
            <NavButton selected={events.isSelected(id)} key={id} onClick={() => { events.viewBoard({ viaId: [id], viaIndex: [index] }); }}>{name}</NavButton>
          ))
        }
      </NavBody>
    </NavWrap>
  )
}

export default Nav;
