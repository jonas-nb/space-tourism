import React from "react";
import Menu from "./Menu";
import styled from "styled-components";
import Logo from "./Logo";
import ArticleHome from "./ArticleHome";
import ButtonExplore from "./ButtonExplore";
import { Home_Provider } from "./HomeContext";

const Menu_Bg = styled.div`
  background-image: url("src/assets/imgs/home/background-home-mobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;
const IndexHome = () => {
  return (
    <Menu_Bg className="w-full h-screen">
      <Logo />
      <ArticleHome />
      <ButtonExplore />
    </Menu_Bg>
  );
};

export default IndexHome;
