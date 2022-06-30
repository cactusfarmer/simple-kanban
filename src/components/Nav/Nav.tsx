import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import { BoardEvents } from '../../types/kanban_events';

type Props = {
  boards: BoardData[]
  events: BoardEvents
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

function Nav({ boards, events: { viewBoard } }: Props) {
  return (
    <NavWrap>
      <NavHead>
        All Boards
      </NavHead>
      <NavBody>
        {boards?.map(({ name, id }, index) => (
          <div key={id}>
            <button type="button" onClick={() => { viewBoard({ viaId: [id], viaIndex: [index] }); }}>
              {name}
            </button>
          </div>
        ))}
      </NavBody>
    </NavWrap>
  );
}

export default Nav;
