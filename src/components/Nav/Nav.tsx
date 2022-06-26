import styled from 'styled-components';
import { BoardData } from '../../types/board_data';

type Props = {
  boards: BoardData[]
  editBoard: Function
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

function Nav({ boards, editBoard }: Props) {
  return (
    <NavWrap>
      <NavBody>
        {boards?.map(({ name }, index) => (
          <li key={name}>
            {name}
            {' '}
            -
            {index}
          </li>
        ))}
        <button type="button" onClick={() => { editBoard('ADD', [3]); }}>Add Board</button>
      </NavBody>
    </NavWrap>
  );
}

export default Nav;
