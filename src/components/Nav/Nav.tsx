import styled from 'styled-components';
import { BoardData } from '../../types/board_data';
import { BoardOperations } from '../../types/board_operations';

type Props = {
  boards: BoardData[]
  operations: BoardOperations
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

function Nav({ boards, operations: { board } }: Props) {
  return (
    <NavWrap>
      <NavBody>
        <button type="button" onClick={() => board.add()}>+ Add new</button>
        <ul>
          {boards?.map(({ name, id }) => (
            <li key={name}>
              {name}
              {' '}
              -
              {id}
            </li>
          ))}
        </ul>

      </NavBody>
    </NavWrap>
  );
}

export default Nav;
