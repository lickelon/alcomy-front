import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import RecipeItem from "../components/RecipeItem";
import { getRecipeList } from "../services/api";

const ItemGrid = styled.div`
  display: inline-grid;
  grid: "...";
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 980px;
  padding: 10px;
`;

const Container = styled.div``;

const PageWrap = styled.div`
  background-color: #eee;
  text-align: center;
  ${Container} {
    background-color: #dee;
    width: 1000px;
    display: inline-block;
  }
`;

const RecipeListPage = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort") || "asc";
  const pivot = searchParams.get("pivot") || "";
  const navigate = useNavigate();

  const [selected, setSelected] = useState("asc");
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    getRecipeList(sort, pivot)
      .then((_recipeList) => {
        setRecipeList(_recipeList);
      })
      .catch((error) => {});
  }, [sort, pivot]);

  useEffect(() => {
    navigate("/list?sort=" + selected);
  }, [selected, navigate]);

  return (
    <PageWrap>
      <Container>
        <select onChange={handleSelect} value={selected}>
          <option value="asc">오름차순</option>
          <option value="desc">내림차순</option>
        </select>
        <ItemGrid>
          {recipeList.map((_id) => (
            <RecipeItem id={_id} key={_id} />
          ))}
        </ItemGrid>
      </Container>
    </PageWrap>
  );
};

export default RecipeListPage;
