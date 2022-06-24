import styled from 'styled-components';

type Props = {
  data: string[]
};
const NavWrapper = styled.div`
                    background-color: #efefef;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    height: calc(100vh - 20px);
                    top:20px;
                    width: 300px;
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
