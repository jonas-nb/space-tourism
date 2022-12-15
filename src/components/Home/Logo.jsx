import React from "react";
import LogoPage from "../../assets/icons/logo.svg";

const Logo = () => {
  return (
    <div className="pt-6 sm:pt-10 xl:pt-14 ml-6 sm:ml-10 xl:ml-14 ">
      <img src={LogoPage} alt="" className="sm:w-14" />
    </div>
  );
};

export default Logo;
