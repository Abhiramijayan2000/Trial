import React, { useState } from 'react'
import './Remainder.css'
function Remainder() {
    const [remainder, setRemainder] = useState([]);
    const [newRemainder, setNewRemainder] = useState("");

    const handleInputChange = (event) => {
        setNewRemainder(event.target.value)

    }
    const handleAddRemainder = () => {
        if (newRemainder.trim()) {
            setRemainder([...remainder, newRemainder])
            setNewRemainder("")
        }
    }

    const handleDeleteRemainder = (index) => {
        setRemainder(remainder.filter((item, itemIndex) => itemIndex !== index))
    }
    return (
        <div className='container'>
            <h1>To Do App</h1>
            <div className='input-contaner'>
                <input
                    type='text'
                    value={newRemainder}
                    placeholder='Enter a remainder'
                    onChange={handleInputChange}
                />
                <button className='add-btn' onClick={handleAddRemainder}>Add ToDo</button>
            </div>
            {
                remainder.length > 0 ? (
                    <ul className='remainder-list'>
                        {
                            remainder.map((remainder, index) => (
                                <li key={index}>
                                    {remainder}
                                    <button onClick={() => handleDeleteRemainder(index)} className='delete-btn'>Delete</button>
                                </li>
                            ))
                        }
                    </ul>)
                    : <p>No ToDo'sfound</p>
            }


        </div>
    )
}

export default Remainder
