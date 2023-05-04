import styled from "styled-components";
import RecipeItem from "../components/RecipeItem";

const Container = styled.div``;

const PageWrap = styled.div`
  background-color: #eee;
  text-align: center;
  li {
    list-style: none;
  }
  ${Container} {
    background-color: #dee;
    width: 1000px;
    display: inline-block;
  }
`;

const ListRow = styled.ul`
  padding: 0px;
`;
const ListCol = styled.ul`
  clear: both;
  padding: 0px;
  & > RecipeItem {
    float: left;
    width: 230px;
    height: 230px;
    margin: 10px;
    background-color: #efe;
  }
  & > RecipeItem:hover {
    float: left;
    width: 230px;
    height: 230px;
    margin: 10px;
    background-color: #cec;
  }
`;

const RecipeListPage = () => {
  return (
    <PageWrap>
      <Container>
        <ListRow>
          <ListCol>
            <RecipeItem id="1" />
            <RecipeItem id="2" />
            <RecipeItem id="3" />
            <RecipeItem id="4" />
          </ListCol>
          <ListCol>
            <RecipeItem id="5" />
            <RecipeItem id="6" />
            <RecipeItem id="7" />
            <RecipeItem id="8" />
          </ListCol>
          <ListCol>
            <RecipeItem id="9" />
            <RecipeItem id="10" />
            <RecipeItem id="11" />
            <RecipeItem id="12" />
          </ListCol>
          <ListCol>
            <RecipeItem id="13" />
            <RecipeItem id="14" />
            <RecipeItem id="15" />
            <RecipeItem id="16" />
          </ListCol>
        </ListRow>
      </Container>
    </PageWrap>
  );
};

export default RecipeListPage;
