import React, { useState } from 'react'

export const myContext = React.createContext()

const Provider = props => {
    // const testArray = [
    //     1599452160267,
    //     1599452759948,
    //     1599453359196,
    //     1599453778152,
    //     1599453921130,
    //     1599453948944,
    //     1599453951130,
    //     1599453958152,
    //     1599453959196,
    //     1599453959948,
    //     1599453960267,
    //     1599453964490
    // ];
    // const [timedEvents, addTimedEvents] = useState(testArray);
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