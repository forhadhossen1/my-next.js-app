"use client"
import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h2>Counter : {counter}</h2>

            <div className="flex gap-5 ">
                <button className='btn btn-primary' onClick={() => setCounter(counter + 1)}>Incress</button>
                <button className='btn btn-primary' onClick={() => setCounter(counter - 1)}>Incress</button>
            </div>
        </div>
    );
};

export default Counter;