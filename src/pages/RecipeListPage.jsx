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

const QueryArea = styled.div`
  gap: 10px;
  width: 980px;
  padding: 10px;
  & select {
    float: left;
  }
  & input {
    float: right;

  }
`;

const RecipeListPage = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort") || "name";
  const order = searchParams.get("order") || "asc";
  const navigate = useNavigate();

  const [query, setQuery] = useState({
    search: "",
    sort: "",
    order: "",
    offset: 0,
    limit: 16,
  });
  const [selected, setSelected] = useState("name_asc");
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    getRecipeList(sort, order)
      .then((_recipeList) => {
        setRecipeList(_recipeList);
      })
      .catch((error) => {});
  }, [sort, order]);

  useEffect(() => {
    const sortMap = {
      name_asc: { sort: "name", order: "asc" },
      name_desc: { sort: "name", order: "desc" },
      abv_asc: { sort: "abv", order: "asc" },
      abv_desc: { sort: "abv", order: "desc" },
      latest: { sort: "latest", order: "desc" },
      popular: { sort: "popular", order: "desc" },
    };
    const { sort, order } = sortMap[selected] || {};
    if (sort && order) {
      navigate(`/list?sort=${sort}&order=${order}`);
    }
  }, [selected, navigate]);

  const activeEnter = (e) => {
    if(e.key === "Enter") {
      alert(`${query.search} 입력 완료`);
    }
  }

  return (
    <PageWrap>
      <Container>
        <h1>칵테일 목록</h1>
        <QueryArea>
          <select onChange={handleSelect} value={selected}>
            <option value="name_asc">이름 오름차순</option>
            <option value="name_desc">이름 내림차순</option>
            <option value="abv_asc">도수 낮은순</option>
            <option value="abv_desc">도수 높은순</option>
            <option value="latest">최신순</option>
            <option value="popular">인기도순</option>
          </select>
          <input placeholder="검색" value={query.search} type="text" onChange={(e) => setQuery((prevState) => { return { ...prevState, search: e.target.value } })} onKeyDown={(e) => activeEnter(e)}></input>
        </QueryArea>
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
