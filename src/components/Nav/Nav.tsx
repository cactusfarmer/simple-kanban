import styled from 'styled-components';

type Props = {
  data: string[]
};
const NavWrapper = styled.div`
                    width: 300px;
                    top:50px;
                    height: calc(100vh - 20px);
                    box-sizing: border-box;
                    background-color: azure;
                    border-right: 1px solid gainsboro;
                    display: flex;
                    flex-direction: column;
`;

function Nav({ data }: Props) {
  return (
    <NavWrapper>
      <ul>
        {data.map((d) => (
          <li>{d}</li>
        ))}
      </ul>
    </NavWrapper>
  );
}

export default Nav;
