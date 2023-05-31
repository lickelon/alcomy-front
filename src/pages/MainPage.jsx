import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const PageWrap = styled.div`
  background-color: #eee;
  text-align: center;
  ${Container} {
    background-color: #dee;
    width: 980px;
    padding: 10px;
    display: inline-block;
  }
`;

const MainPage = () => {
  return (
    <PageWrap>
      <Container>
        <h1>메인 페이지 입니다.</h1>
      </Container>
    </PageWrap>
  );
};

export default MainPage;
