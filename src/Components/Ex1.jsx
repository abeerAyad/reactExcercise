import { useState } from "react"

const Ex1 = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="counter">
            <h2>Counter : {count}</h2>
            <button onClick={() => setCount((oldCount) => oldCount + 1)}>Increament</button>
            <button onClick={() => setCount((oldCount) => oldCount - 1)}>Decreament</button>
            <button onClick={() => setCount((oldCount) => oldCount = 0)}>Reset</button>
        </div>
    )
}

export default Ex1;