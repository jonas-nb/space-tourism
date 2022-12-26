import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Explore_button = styled.button`
    display: block;
    margin: auto;
    margin-top: 3rem;
    width: 8rem;
    height: 8rem;
    @media (min-width: 1280px) {
        width: 15rem;
        height: 15rem;
    }
    border-radius: 100%;
    text-transform: uppercase;
`

const ButtonExplore = () => {
    const navega = useNavigate()

    return (
        <div>
            <Explore_button
                onClick={() => navega('/Destination')}
                className="z-50 font-bellefair text-lg xl:text-3xl font-[900] transition-all duration-300 hover:outline hover:outline-[2rem] hover:outline-[#474c5e]"
            >
                explore
            </Explore_button>
        </div>
    )
}

export default ButtonExplore
