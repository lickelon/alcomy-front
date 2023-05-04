import styled from "styled-components";

const FooterWrap = styled.footer`
  background: #696969;
  p {
    text-align: center;
    margin: 0px;
  }
  padding: 0px;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <p>This is Footer</p>
    </FooterWrap>
  );
};

export default Footer;
