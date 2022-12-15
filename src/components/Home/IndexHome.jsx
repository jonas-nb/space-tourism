import React from "react";
import Menu from "./Menu";
import styled from "styled-components";
import Logo from "./Logo";
import ArticleHome from "./ArticleHome";
import ButtonExplore from "./ButtonExplore";

const Menu_Bg = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
`;
const IndexHome = () => {
  return (
    <Menu_Bg className="min-h-screen bg-mobile-bg sm:bg-tablet-bg xl:bg-desktop-bg ">
      <Logo />
      <div className="xl:flex xl:items-center xl:justify-around xl:mt-20">
        <ArticleHome />
        <ButtonExplore />
      </div>
    </Menu_Bg>
  );
};

export default IndexHome;
