import styled from "styled-components";

const Container = styled.div``;
const Logo = styled.div``;

const HeaderWrap = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: dimgray;
  text-align: center;

  a {
    text-decoration: none;
    color: black;
  }

  ${Container} {
    width: 1000px;
    height: 80px;
    display: inline-block;
    background-color: #333;
  }
  ${Logo} {
    display: flex;
    float: left;
    background-color: #e0e8ee;
    margin: 8px 20px 8px 20px;
  }
  & nav {
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
          <a href="/">Alcomy</a>
        </Logo>
        <nav>
          <a href="/list">칵테일 목록</a>
          <a href="/view">레시피 확인</a>
        </nav>
      </Container>
    </HeaderWrap>
  );
};

export default Header;
