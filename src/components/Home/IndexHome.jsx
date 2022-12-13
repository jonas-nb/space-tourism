import React from "react";
import Menu from "./Menu";
import styled from "styled-components";
import Logo from "./Logo";
import ArticleHome from "./ArticleHome";
import ButtonExplore from "./ButtonExplore";
import bg from "./img/bg.jpg";

const Menu_Bg = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
`;
const IndexHome = () => {
  return (
    <Menu_Bg
      className="border border-blue-500 h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Logo />
      <ArticleHome />
      <ButtonExplore />
    </Menu_Bg>
  );
};

export default IndexHome;
