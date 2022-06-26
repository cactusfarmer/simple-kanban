import styled from 'styled-components';
import { BoardData } from '../../types/board_data';

type Props = {
  allBoards: BoardData[]
  setState: Function
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

function Nav({ allBoards, setState }: Props) {
  console.log(allBoards, setState);
  return (
    <NavWrap>
      <NavBody>
        {allBoards.map(({ name }, index) => (
          <li>
            {name}
            {' '}
            -
            {index}
          </li>
        ))}
      </NavBody>
    </NavWrap>
  );
}

export default Nav;
