import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getRecipeNameById } from "../services/api";

const Box = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 100%;
  background-color: #efe;
  border-radius: 10px;
  &:hover {
    background-color: #cec;
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  p {
    position: absolute;
    margin: 0px;
    bottom: 0%;
    left: 50%;
    white-space: pre;
    transform: translate(-50%, -50%);
  }
`;

const RecipeItem = (props) => {
  const [recipeName, setRecipeName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    getRecipeNameById(props.id)
      .then((_recipeName) => {
        setRecipeName(_recipeName);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [props.id]);

  const ItemClicked = (id) => {
    navigate("/view?id=" + id);
  };

  return (
    <Box id={props.id} onClick={() => ItemClicked(props.id)}>
      <img src="cocktail.png" alt="cocktail Img"></img>
      <p>{recipeName}</p>
    </Box>
  );
};

export default RecipeItem;
