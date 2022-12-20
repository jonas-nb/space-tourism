import React from 'react'
import LogoPage from '../../assets/icons/logo.svg'

const Logo = () => {
    return (
        <div className="absolute mt-8 sm:mt-10 xl:mt-16 ml-4 sm:ml-8 xl:ml-14 ">
            <img src={LogoPage} alt="" className="w-11 sm:w-16 xl:w-14" />
        </div>
    )
}

export default Logo
