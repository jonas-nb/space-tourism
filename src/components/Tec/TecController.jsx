import React, { useContext } from 'react'
import { TEC_CONTEXT } from './TecContext'
import './assets/btn.css'
const TecController = () => {
    let { handle_zero, handle_one, handle_two, ctrl_state } =
        useContext(TEC_CONTEXT)

    return (
        <div className="w-5/12 m-auto mt-5 flex justify-around">
            <button
                className={
                    ctrl_state === 0
                        ? 'bg-white text-black tecButton font-bellefair'
                        : 'tecButton font-bellefair focus:bg-white focus:text-black'
                }
                onClick={handle_zero}
            >
                1
            </button>
            <button
                className="tecButton font-bellefair focus:bg-white focus:text-black"
                onClick={handle_one}
            >
                2
            </button>
            <button
                className="tecButton font-bellefair focus:bg-white focus:text-black"
                onClick={handle_two}
            >
                3
            </button>
        </div>
    )
}

export default TecController
