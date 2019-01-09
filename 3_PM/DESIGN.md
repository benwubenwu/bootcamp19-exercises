Component called "Top" containing two components "User_input" and "Add". 
    "User_input" would be a form that users can type their tasks into. 
    "Add" creates an array and pushes user's input into. User input would be an Object with two keys: "id" and "value".

Component called "Middle" containing "Header" component and containing <ul> and inside the <ul> would be a "ListItems" component which has a component "List" and inside component "Task" and component "Del". 
    "Header" just displays text "Current tasks".
    "ListItems" uses map() to transform array into list.
    "List" includes "Task" and "Del". Has conditional rendering (ternary boolean) if there are tasks otherwise has text "No to-dos".
    "Task" includes Object "value".
    "Del" pop() Object from array of tasks based on "id" and callback to "ListItems".

Component called "Bottom" containing "Search" component. 
    "Search" will filter() by substring that retrieves "value" from Form and async/await. Create new array with only those filtered elements and connect back to "ListItems" to display them in a list. Conditional rendering (ternary boolean) either show the filtered elements or "no results found".

