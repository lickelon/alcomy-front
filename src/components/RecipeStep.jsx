import styled from "styled-components";

const Step = styled.li`
  list-style-position: inside;
  margin: 10px 10px 10px 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #e99;
  padding-left: 10px;
  &:hover {
    background-color: #e88;
  }
  a {
    text-decoration: none;
  }
`;
const RecipeStep = (props) => {
  return (
    <Step>
      <a href="/stir">{props.method}</a>
      <span> </span>
      <a href="/syrup">{props.ingredient}</a>
    </Step>
  );
};

export default RecipeStep;
