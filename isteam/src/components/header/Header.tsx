import styled from "styled-components";

export default function Header() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: left;
    color: #bf4f74;
  `;
  const LogoContainer = styled.header`
    color: white;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
    font-size: 32px;
    font-weight: 200;
  `;
  const Navigation = styled.nav`
    float: right;
    height: 100%;
  `;
  const A = styled.a`
    height: 100%;
    display: table;
   float left;
   padding: 0px 20px;
   `;
  const Li = styled.li`
    display: table-cell;
    vertical-align: middle;
    height: 100%;
    color: white;
    font-size: 16px;
  `;
  return (
    <>
      <div className="header">
        <LogoContainer>
          <Title>BetterSteam</Title>
        </LogoContainer>

        <Navigation>
          <A>
            <Li>About</Li>
          </A>
          <A>
            <Li>Lorem</Li>
          </A>
          <A>
            <Li>Lorem 123</Li>
          </A>
        </Navigation>
      </div>
    </>
  );
}
