import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Home/Menu'
import IndexHome from './components/Home/IndexHome'
import IndexDestination from './components/Destination/IndexDestination'
import Logo from './components/Home/Logo'

const App = () => {
    return (
        <div className="">
            <Logo />
            <Menu />
            <Routes>
                <Route path="/" element={<IndexHome />} />
                <Route path="/Destination" element={<IndexDestination />} />
                {/* <Route path="*" element={<Erro404 />} />
        <Route path="/Crew" element={<Crew_Route />} />
        <Route path="/Destination" element={<Destination_Route />} /> */}
            </Routes>
        </div>
    )
}

export default App
