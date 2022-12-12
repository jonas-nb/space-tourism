import React, { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";

import { Link } from "react-router-dom";
import { Home_Context } from "./HomeContext";
const Menu_Container = styled.div``;
const Menu_Animation = keyframes`
0% {
    transform: scaleX(0);
    transform-origin: 100% 100%;
    opacity: 1;
  }
  100% {
    transform: scaleX(1);
    transform-origin: 100% 100%;
    opacity: 1;
  }
`;
const Menu_Navbar = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background-color: #000000ea;
  animation: ${Menu_Animation} 0.2s linear;
`;

const Menu = () => {
  let { setButtonState, buttonState } = useContext(Home_Context);

  console.log(buttonState);
  console.log(setButtonState);
  return (
    <div>
      <Menu_Container>
        <button
          className="pt-10 w-10 h-10 bg-transparent absolute top-0 right-0 z-50"
          onClick={() =>
            buttonState === false ? setButtonState(true) : setButtonState(false)
          }
        >
          {buttonState === false ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
              <g fill="#D0D6F9" fill-rule="evenodd">
                <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
              </g>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
              <g fill="#D0D6F9" fill-rule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          )}
        </button>
      </Menu_Container>
      {buttonState === false ? (
        <></>
      ) : (
        <Menu_Navbar className="w-52 h-full">
          <div className="flex flex-col justify-around h-52 mt-28 pl-5 uppercase text-white">
            <Link className="text-white focus:text-emerald-700" to="/">
              <b>00</b> home
            </Link>
            <Link
              className="text-white focus:text-emerald-700"
              to="/Destination"
            >
              <b>01</b> destination
            </Link>
            <Link className="text-white focus:text-emerald-700" to="/Crew">
              <b>02</b> crew
            </Link>
            <Link
              className="text-white focus:text-emerald-700"
              to="/Technology"
            >
              <b>03</b> technology
            </Link>
          </div>
        </Menu_Navbar>
      )}
    </div>
  );
};

export default Menu;
