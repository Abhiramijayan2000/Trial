import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const [showCount, setShowCount] = useState(false)
    return (
        <div>
            <button onClick={() => setShowCount(!showCount)}>{showCount ? 'Hide Show Count' : 'Show Count'}</button>
            {showCount ? (
                <>
                    <h4>Counter Show Open</h4>
                    <h2>Counter is - {count} </h2>
                    <button onClick={() => setCount(count+1)}>Incement</button>
                    <button onClick={() => setCount(count-1)}>Decrement</button>
                </>
            ) : null
            }
        </div>
    )
}

export default Counter
