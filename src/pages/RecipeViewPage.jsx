import React from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const CocktailName = styled.h2``;

const CocktailImage = styled.div``;

const PageWrap = styled.div`
  background-color: #eee;
  text-align: center;
  ${Container} {
    background-color: #dee;
    width: 1000px;
    display: inline-block;
  }
  ${CocktailName} {
    text-align: left;
    margin: 20px 40px 20px 40px;
  }
  ${CocktailImage} {
    clear: both;
    float: left;
    width: 230px;
    height: 230px;
    background-color: #fee;
    margin: 10px;
    border-radius: 10px;
  }
  ol {
    text-align: left;
    font-size: 20px;
    float: left;
    width: 730px;
    padding: 0px;
    margin: 0px 10px;
    li {
      list-style-position: inside;
      margin: 10px 10px 10px 10px;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      background-color: #e99;
      padding-left: 10px;
      &:hover {
        background-color: #e88;
      }
    }
  }
`;

const RecipeViewPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  if (id === null) {
    return (
      <PageWrap>
        <Container>
          <h1>잘못된 접근입니다.</h1>
        </Container>
      </PageWrap>
    );
  }
  return (
    <PageWrap>
      <Container>
        <CocktailName>{name}</CocktailName>
        <CocktailImage>대충 이미지 {id}</CocktailImage>
        <ol>
          {/* TODO recipeStep 컴포넌트 구현 (재료, 기법등을 통한 조합식 설명) */}
          <li>대충 만드는 방법1</li>
          <li>대충 만드는 방법2</li>
          <li>대충 만드는 방법3</li>
          <li>대충 만드는 방법4</li>
        </ol>
      </Container>
    </PageWrap>
  );
};

export default RecipeViewPage;
