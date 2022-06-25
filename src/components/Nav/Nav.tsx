import styled from 'styled-components';

type Props = {
  data: string[]
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

function Nav({ data }: Props) {
  return (
    <NavWrap>
      <NavBody>
        {data.map((d) => (
          <li>{d}</li>
        ))}
      </NavBody>
    </NavWrap>
  );
}

export default Nav;
