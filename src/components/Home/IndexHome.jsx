import React from "react";
import Menu from "./Menu";
import styled from "styled-components";
import Logo from "./Logo";

const Menu_Bg = styled.div`
  border: 1px solid blue;
  width: 100vw;
  height: 100vh;
  background-image: url("src/assets/imgs/home/background-home-mobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;
const IndexHome = () => {
  return (
    <Menu_Bg>
      <Logo />
    </Menu_Bg>
  );
};

export default IndexHome;
