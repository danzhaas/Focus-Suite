import React, { useState } from 'react'

export const myContext = React.createContext()

const Provider = props => {
    const [timedEvents, addTimedEvents] = useState([]);

    return (
        <myContext.Provider value={{
            timedEvents,
            toggleTimer () {
                timedEvents.push(Date.now()); 
                addTimedEvents(timedEvents);
                console.log(timedEvents)
            },
            logDistraction (duration) {
                const distractEnd=Date.now();
                const distractBegin=(distractEnd-duration);
                timedEvents.push(distractBegin, distractEnd);
                addTimedEvents(timedEvents);
                console.log(timedEvents)
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