import React, { useContext } from 'react'
import { TEC_CONTEXT } from './TecContext'

const TecController = () => {
    let { handle_zero, handle_one, handle_two } = useContext(TEC_CONTEXT)

    return (
        <div className="w-32 h-10 flex justify-around border">
            <button onClick={handle_zero}>1</button>
            <button onClick={handle_one}>2</button>
            <button onClick={handle_two}>3</button>
        </div>
    )
}

export default TecController
