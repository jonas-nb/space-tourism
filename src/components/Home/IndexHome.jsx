import React from 'react'
import Menu from './Menu'
import styled from 'styled-components'
import Logo from './Logo'
import ArticleHome from './ArticleHome'
import ButtonExplore from './ButtonExplore'

const Menu_Bg = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
`
const IndexHome = () => {
    return (
        <div className="xl:w-full xl:flex xl:flex-col xl:justify-around">
            <Menu_Bg className="min-h-screen bg-mobile-bg sm:bg-tablet-bg xl:bg-desktop-bg ">
                <div className="xl:relative xl:top-[6rem] xl:flex xl:items-center xl:justify-around xl:mt-20 pt-20 xl:pt-0">
                    <ArticleHome />
                    <ButtonExplore />
                </div>
            </Menu_Bg>
        </div>
    )
}

export default IndexHome
