// ███████╗██╗███╗   ██╗ █████╗ ██╗         ██████╗ ██████╗  █████╗ ███████╗████████╗███████╗
// ██╔════╝██║████╗  ██║██╔══██╗██║         ██╔══██╗██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██╔════╝
// █████╗  ██║██╔██╗ ██║███████║██║         ██║  ██║██████╔╝███████║█████╗     ██║   ███████╗
// ██╔══╝  ██║██║╚██╗██║██╔══██║██║         ██║  ██║██╔══██╗██╔══██║██╔══╝     ██║   ╚════██║
// ██║     ██║██║ ╚████║██║  ██║███████╗    ██████╔╝██║  ██║██║  ██║██║        ██║   ███████║
// ╚═╝     ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝        ╚═╝   ╚══════╝

//Pie graph

function calculateEventDurations (eventArray, eventType) {
    const startIndex, durations = [];
    eventType === "tasks" ? ( startIndex = 0 ) : ( startIndex = 1 );
    for (i=startIndex; i<eventArray.length; i = i + 2) {
        eventDuration = eventArray[i+1] - eventArray[i];
        durations.push(eventDuration);
    }
    return durations
}

const taskTimeSum = (calculateEventDurations (timedEvents, "tasks")).reduce((total, num) => (total + num))
const distractionTimeSum = (calculateEventDurations (timedEvents, "distractions")).reduce((total, num) => (total + num))


//Timeline

//helper functions: 
function isEven(value) {
    if (value%2 === 0)
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
const datatable = [
    //The first object in the datatable is columns:
    [
        { type: 'string', id: 'Focus' },
        { type: 'string', id: 'Name' },
        { type: 'date', id: 'Start' },
        { type: 'date', id: 'End' },
    ],
    //the rest of the items are rows data corresponding to the columns
    generateDatatableRows( timedEvents )
]


//distracted timer

function calculateEventDurations (eventArray, eventType) {
    const startIndex, durations = [];
    eventType === "tasks" ? ( startIndex = 0 ) : ( startIndex = 1 );
    for (i=startIndex; i<eventArray.length; i = i + 2) {
        eventDuration = eventArray[i+1] - eventArray[i];
        durations.push(eventDuration);
    }
    return durations
}

const distractionTimeSum = calculateEventDurations (timedEvents, distractions).reduce((total, num) => (total + num))


//Format timeline inconsistencies

//look through timedEvents array for sequential values that are not in chronological order.  Set higher number equal to lower number in these cases. 
function adjustTimeline (array) {
const adjustedTimeline =[];
    //When i > i+1, set i+1 = i.
    for ( i = 0; i < array.length; i = i + 2 ) {
        const num; 
        array[i] >= array[i+1] ? (num = i) : (num = i+1);
        adjustedTimeline = adjustedTimeline.push(array[i], array [num])
    }
    return adjustedTimeline;
}