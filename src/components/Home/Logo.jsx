import React from 'react'
import LogoPage from '../../assets/icons/logo.svg'

const Logo = () => {
    return (
        <div className="w-10 sm:w-14 absolute top-7 sm:top-10 left-5 sm:left-10">
            <img src={LogoPage} alt="" className="sm:w-14" />
        </div>
    )
}

export default Logo
