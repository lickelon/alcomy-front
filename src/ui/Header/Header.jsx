import styled from "styled-components";

const Container = styled.div``;
const Logo = styled.div``;

const HeaderWrap = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 64px;
  background-color: dimgray;
  text-align: center;
  z-index: 10;
  a {
    text-decoration: none;
    color: black;
  }

  ${Container} {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: #a692ba;
  }
  ${Logo} {
    position: absolute;
    float: left;
    margin-left: 20px;
  }
  & nav {
    width: 100%;
    background-color: aliceblue;
    text-align: center;
    & > a {
      text-align: center;
      margin: 10px 10px 10px 10px;
      display: inline-block;
      text-decoration: none;
      color: black;
    }
    & > a:hover {
      color: chartreuse;
    }
  }
`;

const Header = (props) => {
  return (
    <HeaderWrap>
      <Container>
        <Logo>
          <a href="/">
            <img src="/alcomy_logo.png" alt="Logo" height="64px" width="64px"/>
          </a>
        </Logo>
        <nav>
          <a href="/list">칵테일 목록</a>
          <a href="/method">제조 기법</a>
          <a href="/ingredient">재료 목록</a>
          <a href="/view">레시피 확인</a>
        </nav>
      </Container>
    </HeaderWrap>
  );
};

export default Header;
