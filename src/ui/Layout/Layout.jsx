import Footer from "../Footer/Footer";
import Header from "../Header/Header";
//import "./Layout.css";
import styled from "styled-components";

const Main = styled.main`
  margin-top: 64px;
  padding: 0px;
`;

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
