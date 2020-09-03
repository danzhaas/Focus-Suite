import React, { useState } from 'react'

export const myContext = React.createContext()

const Provider = props => {
    const [timeInit, startTime] = useState(0);
    const [timeFinal, endTime] = useState(0);
    const [distractions, addDistraction] = useState([]);

    return (
        <myContext.Provider value={{
            timeInit,
            begin: () => {startTime(Date.now()); addDistraction(timeInit); console.log(distractions)},
            timeFinal,
            end: () => {endTime(Date.now()); addDistraction(timeFinal); console.log(distractions)},
            distractions,
            logDistraction (duration) {
                const distractEnd=Date.now();
                const distractBegin=(distractEnd-duration);
                addDistraction(distractions.push(distractBegin, distractEnd));                
                console.log(distractions)
            }
        }}>
            {props.children}
        </myContext.Provider>
    )
};

export default ({ element }) => (
    <Provider>
        {element}
    </Provider>
);