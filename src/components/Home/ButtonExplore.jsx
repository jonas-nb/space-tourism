import React, { useContext } from "react";
import styled from "styled-components";
import { Home_Context } from "./HomeContext";

const Explore_button = styled.button`
  display: block;
  margin: auto;
  margin-top: 3rem;
  width: 8rem;
  height: 8rem;
  border-radius: 100%;
  text-transform: uppercase;
`;

const ButtonExplore = () => {
  let { setButtonState, buttonState } = useContext(Home_Context);

  console.log(buttonState);
  return (
    <Explore_button
      onClick={() =>
        buttonState === false ? setButtonState(true) : setButtonState(false)
      }
      className="font-bellefair text-lg font-[900] transition-all duration-300 hover:outline hover:outline-[2rem] hover:outline-[#474c5e]"
    >
      explore
    </Explore_button>
  );
};

export default ButtonExplore;
