import React, { createContext, useState } from 'react'
import Vehicle_landscape from './assets/image-launch-vehicle-landscape.jpg'
import Capsule_landscape from './assets/image-space-capsule-landscape.jpg'
import Spaceport_landscape from './assets/image-spaceport-landscape.jpg'
import Vehicle_portrait from './assets/image-launch-vehicle-portrait.jpg'
import Capsule_portrait from './assets/image-space-capsule-portrait.jpg'
import Spaceport_portrait from './assets/image-spaceport-portrait.jpg'

export const TEC_CONTEXT = createContext()

export const TEC_PROVIDER = ({ children }) => {
    let [ctrl_state, setCtrl_State] = useState(0)
    let [image_landscape, setImage_landscape] = useState(Vehicle_landscape)
    let [image_portrait, setImage_portrait] = useState(Vehicle_portrait)

    function handle_zero() {
        setCtrl_State(0)
        setImage_landscape(Vehicle_landscape)
        setImage_portrait(Vehicle_portrait)
    }
    function handle_one() {
        setCtrl_State(1)
        setImage_landscape(Spaceport_landscape)
        setImage_portrait(Spaceport_portrait)
    }
    function handle_two() {
        setCtrl_State(2)
        setImage_landscape(Capsule_landscape)
        setImage_portrait(Capsule_portrait)
    }
    return (
        <TEC_CONTEXT.Provider
            value={{
                ctrl_state,
                handle_zero,
                handle_one,
                handle_two,
                image_landscape,
                image_portrait,
            }}
        >
            {children}
        </TEC_CONTEXT.Provider>
    )
}
