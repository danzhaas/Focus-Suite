import React, { useState } from 'react'

export const myContext = React.createContext()

const Provider = props => {
    const [timeInit, startTime] = useState(75);
    const [timeFinal, endTime] = useState(0);
    const [distractions, addDistraction] = useState([]);

    return (
        <myContext.Provider value={{
            timeInit,
            begin: () => {startTime(Date.now()); distractions.push(timeInit); addDistraction(distractions); console.log(distractions)},
            timeFinal,
            end: () => {endTime(Date.now()); distractions.push(timeFinal); addDistraction(distractions); console.log(distractions)},
            distractions,
            logDistraction (duration) {
                const distractEnd=Date.now();
                const distractBegin=(distractEnd-duration);
                distractions.push(distractBegin, distractEnd);
                addDistraction(distractions);
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