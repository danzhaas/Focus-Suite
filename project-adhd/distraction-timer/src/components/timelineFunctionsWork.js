// ███████╗██╗███╗   ██╗ █████╗ ██╗         ██████╗ ██████╗  █████╗ ███████╗████████╗███████╗
// ██╔════╝██║████╗  ██║██╔══██╗██║         ██╔══██╗██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██╔════╝
// █████╗  ██║██╔██╗ ██║███████║██║         ██║  ██║██████╔╝███████║█████╗     ██║   ███████╗
// ██╔══╝  ██║██║╚██╗██║██╔══██║██║         ██║  ██║██╔══██╗██╔══██║██╔══╝     ██║   ╚════██║
// ██║     ██║██║ ╚████║██║  ██║███████╗    ██████╔╝██║  ██║██║  ██║██║        ██║   ███████║
// ╚═╝     ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝        ╚═╝   ╚══════╝

//Pie graph

function calculateEventDurations (eventArray, eventType) {
    const startIndex, durations = [];
    eventType == "task" ? ( startIndex = 0 ) : ( startIndex = 1 );
    for (i=startIndex; i<eventArray.length; i + 2) {
        eventDuration = eventArray[i+1] - eventArray[i];
        durations.push(eventDuration);
    }
    return durations
}

const taskTimeSum = (calculateEventDurations (timedEvents, tasks)).reduce((total, num) => (total + num))
const distractionTimeSum = (calculateEventDurations (timedEvents, distractions)).reduce((total, num) => (total + num))


//Timeline

//helper functions: 
function isEven(value) {
    if (value%2 == 0)
        return true;
    else
        return false;
};

function generateDatatableRows (array) {
    //establish the variable to export
    var datatableRows = [];
    //loop for each number in the array
    for ( i = 0; i < array.length; i++ ) { 
        const row = [
            "focus",
            isEven( i ) ? ("distracted") : ("focus"),
            array[i],
            array[i+1],
        ];
        datatableRows = datatableRows.push(row);
    }
    return datatableRows;
}

//inline code
const datatable = {[
    //The first object in the datatable is columns:
    [
        { type: 'string', id: 'Focus' },
        { type: 'string', id: 'Name' },
        { type: 'date', id: 'Start' },
        { type: 'date', id: 'End' },
    ],
    //the rest of the items are rows data corresponding to the columns
    generateDatatableRows( timedEvents )
]}


//distracted timer

function calculateEventDurations (eventArray, eventType) {
    const startIndex, durations = [];
    eventType == "task" ? ( startIndex = 0 ) : ( startIndex = 1 );
    for (i=startIndex; i<eventArray.length; i + 2) {
        eventDuration = eventArray[i+1] - eventArray[i];
        durations.push(eventDuration);
    };
    return durations;
}

const distractionTimeSum = calculateEventDurations (timedEvents, distractions).reduce((total, num) => (total + num))


//Format timeline inconsistencies

//look through timedEvents array for sequential values that are not in chronological order.  

//When i > i+1, set i+1 = i.

function adjustTimeline (array) {
const adjustedTimeline =[];
    //When i > i+1, set i+1 = i.
    for ( i = 0; i < array.length; i++ ) {
        const num; 
        array[i] <= array[i+1] ? (num = i) : (num = i+1))
        adjustedTimeline = adjustedTimeline.push(array[i])
    }
    return adjustedTimeline;
}





// ██████╗  ██████╗ ██╗   ██╗ ██████╗ ██╗  ██╗    ██████╗ ██████╗  █████╗ ███████╗████████╗███████╗
// ██╔══██╗██╔═══██╗██║   ██║██╔════╝ ██║  ██║    ██╔══██╗██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██╔════╝
// ██████╔╝██║   ██║██║   ██║██║  ███╗███████║    ██║  ██║██████╔╝███████║█████╗     ██║   ███████╗
// ██╔══██╗██║   ██║██║   ██║██║   ██║██╔══██║    ██║  ██║██╔══██╗██╔══██║██╔══╝     ██║   ╚════██║
// ██║  ██║╚██████╔╝╚██████╔╝╚██████╔╝██║  ██║    ██████╔╝██║  ██║██║  ██║██║        ██║   ███████║
// ╚═╝  ╚═╝ ╚═════╝  ╚═════╝  ╚═════╝ ╚═╝  ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝        ╚═╝   ╚══════╝
                                                                                                
//just showing my work on these functions

// ██████╗ ██╗███████╗     ██████╗ ██████╗  █████╗ ██████╗ ██╗  ██╗
// ██╔══██╗██║██╔════╝    ██╔════╝ ██╔══██╗██╔══██╗██╔══██╗██║  ██║
// ██████╔╝██║█████╗      ██║  ███╗██████╔╝███████║██████╔╝███████║
// ██╔═══╝ ██║██╔══╝      ██║   ██║██╔══██╗██╔══██║██╔═══╝ ██╔══██║
// ██║     ██║███████╗    ╚██████╔╝██║  ██║██║  ██║██║     ██║  ██║
// ╚═╝     ╚═╝╚══════╝     ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝
                                                                
    purpose: show relative time spent distracted out of whole task time
    vision: data={[
                ['Task', 'Hours per Day'],
                ['Task', 2],
                ['Distracted', 11],
            ]}
                ='task', sum of task time = 0-1 + 2-3 + 4-5 + 6-7...
                'distracted', sum of distraction time = 1-2 + 3-4 + 5-6 + 7-8 +...


    organized: //code rough draft below

                function calculateEventDurations (eventArray, eventType) {
                    const startIndex, durations = [];
                    eventType == "task" ? ( startIndex = 0 ) : ( startIndex = 1 );
                    for (i=startIndex, i<eventArray.length, i + 2) {
                        eventDuration = eventArray[i+1] - eventArray[i];
                        durations.push(eventDuration);
                    };
                    return durations
                }

                const taskTimeSum = (calculateEventDurations (timedEvents, tasks)).reduce((total, num) => (total + num))
                const distractionTimeSum = (calculateEventDurations (timedEvents, distractions)).reduce((total, num) => (total + num))



// ████████╗██╗███╗   ███╗███████╗██╗     ██╗███╗   ██╗███████╗
// ╚══██╔══╝██║████╗ ████║██╔════╝██║     ██║████╗  ██║██╔════╝
//    ██║   ██║██╔████╔██║█████╗  ██║     ██║██╔██╗ ██║█████╗  
//    ██║   ██║██║╚██╔╝██║██╔══╝  ██║     ██║██║╚██╗██║██╔══╝  
//    ██║   ██║██║ ╚═╝ ██║███████╗███████╗██║██║ ╚████║███████╗
//    ╚═╝   ╚═╝╚═╝     ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝╚══════╝
                                                            
    purpose: render distraction start and end times in chronological order among task focus
    vision: data={[
                [
                    { type: 'string', id: 'Focus' },
                    { type: 'string', id: 'Name' },
                    { type: 'date', id: 'Start' },
                    { type: 'date', id: 'End' },
                ],
                [
                    'Focus',
                    'Task',
                    new Date(0, 0, 0, 12, 0, 0),
                    new Date(0, 0, 0, 13, 30, 0),
                ],
                [
                    'Focus',
                    'Distracted',
                    new Date(0, 0, 0, 13, 30, 0),
                    new Date(0, 0, 0, 15, 30, 0),
                ],
                [
                    'Focus',
                    'Task',
                    new Date(0, 0, 0, 15, 30, 0),
                    new Date(0, 0, 0, 17, 30, 0),
                ],
                
                ={[
                [
                    'focus',
                    task,
                    startTime,      0
                    d1s,            1
                ],
                [
                    'focus',
                    distracted,
                    d1s,            1
                    d1e,            2
                ],
                [
                    'focus',
                    task,   
                    d1e,            2
                    d2s,            3
                ],
                [
                    'focus',
                    distracted,
                    d2s,            3
                    d2e,            4
                ],...

    organized:  //code rough draft below      
                    {[
                [
                    'focus',
                    task,
                    timedEvents[0],
                    timedEvents[1],
                ],
                [
                    'focus',
                    distracted,
                    timedEvents[1],
                    timedEvents[2],
                ],
                [
                    'focus',
                    task,
                    timedEvents[2],
                    timedEvents[3],
                ],
                [
                    'focus',
                    distracted,
                    timedEvents[3],
                    timedEvents[4],
                ],...


//code first draft below:
//helper functions: 

function isEven(value) {
    if (value%2 == 0)
        return true;
    else
        return false;
};

function generateDatatableRows (array) {
    //establish the variable to export
    var datatableRows;
    //loop for each number in the array
    for ( i = 0, i < array.length, i++ ) { 
        const row = [
            "focus",
            { isEven( i ) ? ("distracted") : ("focus") },
            array[i],
            array[i+1],
        ];
        datatableRows = datatableRows.push(row);
    };
    return datatableRows;
}

// output: an array of objects which together constitute a datatable.  
const datatable = {[
    //The first object in the datatable is columns:
    [
        { type: 'string', id: 'Focus' },
        { type: 'string', id: 'Name' },
        { type: 'date', id: 'Start' },
        { type: 'date', id: 'End' },
    ],
    //the rest of the items are rows data corresponding to the columns
    generateDatatableRows( timedEvents );
]


// ██████╗ ██╗███████╗████████╗██████╗  █████╗  ██████╗████████╗███████╗██████╗     ████████╗██╗███╗   ███╗███████╗██████╗ 
// ██╔══██╗██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗    ╚══██╔══╝██║████╗ ████║██╔════╝██╔══██╗
// ██║  ██║██║███████╗   ██║   ██████╔╝███████║██║        ██║   █████╗  ██║  ██║       ██║   ██║██╔████╔██║█████╗  ██████╔╝
// ██║  ██║██║╚════██║   ██║   ██╔══██╗██╔══██║██║        ██║   ██╔══╝  ██║  ██║       ██║   ██║██║╚██╔╝██║██╔══╝  ██╔══██╗
// ██████╔╝██║███████║   ██║   ██║  ██║██║  ██║╚██████╗   ██║   ███████╗██████╔╝       ██║   ██║██║ ╚═╝ ██║███████╗██║  ██║
// ╚═════╝ ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   ╚══════╝╚═════╝        ╚═╝   ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝
                                                                                                                        
    purpose: simply show the sum of time spent distracted.  
    vision: data = sum of distraction durations 
                = d1 duration + d2 duration + d3 duration + d4 duration ... 
                = (d1e - d1s) + (d2e - d2s) + (d3e - d3s) + (d4e - d4s) ... 
                = 1-2 + 3-4 + 5-6 + 7-8...
                = [i+1]-[i]

    organized:  //code rough draft below
            const distractionTimeSum = calculateEventDurations (timedEvents, distractions).reduce((total, num) => (total + num))
                



    Given an array of format 
        timedEvents = [startTime, d1s, d1e, d2s, d2e, d3s, d3e, d4s, d4e, ... , endTime]
    sample:
        timedEvents = [1599365761453, 1599365794592, 1599365974592, 1599366256651, 1599366316651, 1599366654155, 1599366954155, 1599367191935]

how to separate into task time and distraction time?  
first, make arrays of format [t1s,t1e,t2s,t2e,t3s,t3e] and [d1s,d1e,d2s,d2e,d3s,d3e].  


//All together now...

function calculateEventDurations (eventArray, eventType) {
    const startIndex, durations = [];
    eventType == "task" ? ( startIndex = 0 ) : ( startIndex = 1 );
    for (i=startIndex, i<eventArray.length, i + 2) {
        eventDuration = eventArray[i+1] - eventArray[i+1];
        durations.push(eventDuration);
    }
    return durations
}

const taskTimeSum = (calculateEventDurations (timedEvents, tasks)).reduce((total, num) => (total + num))
const distractionTimeSum = (calculateEventDurations (timedEvents, distractions)).reduce((total, num) => (total + num))

//The calls that will be important
calculateEventDurations (timedEvents, tasks)
calculateEventDurations (timedEvents, distractions)

//The flexible reducer 
    .reduce((total, num) => (total + num))

// the applications
    const taskTimeSum = (calculateEventDurations (timedEvents, tasks)).reduce((total, num) => (total + num))
    const distractionTimeSum = (calculateEventDurations (timedEvents, distractions)).reduce((total, num) => (total + num))
