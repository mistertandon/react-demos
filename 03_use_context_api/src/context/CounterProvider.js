import React, { useState, createContext } from 'react';


export const CounterContext = createContext({});

export const CounterProvider = ({ children }) => {

    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <CounterContext.Provider value={{ count, handleCount }}>
            {
                children
            }
        </CounterContext.Provider>
    )
}