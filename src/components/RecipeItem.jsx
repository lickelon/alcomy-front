import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  float: left;
  width: 230px;
  height: 230px;
  margin: 10px;
  background-color: #efe;
  border-radius: 10px;
  &:hover {
    background-color: #cec;
  }
`;

const RecipeItem = (props) => {
  const [recipeName, setRecipeName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://127.0.0.1:8000/recipe/" + props.id)
      .then((response) => response.json())
      .then((data) => {
        setRecipeName(data.name);
      })
      .catch(() => {
        setRecipeName("대충 레시피 이름" + props.id);
      });
  }, [props.id]);

  const ItemClicked = (id) => {
    navigate("/view?id=" + id + "&name=" + recipeName); // TODO name을 넘기지 않고 view 페이지에서 이름 및 레시피 얻어오기
  };

  return <Box onClick={() => ItemClicked(props.id)}>{recipeName}</Box>;
};

export default RecipeItem;
