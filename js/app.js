// from data.js
var tableData = data;

// YOUR CODE HERE!


//FOR TABLE INPUT

//get reference to table body
var tbody = d3.select("tbody");
var table = d3.select("table");

tbody.remove();

// Loop through 'data' and console.log each finding
function ufo_table(data){
    //create table
    table.append("tbody");
    tbody = d3.select("tbody");
    tbody.attr("class", "table table-striped");

    // iterate through data
    data.forEach(function(report) {

    // Use d3 to append one table row 'tr' for each report object
    var row = tbody.append("tr");

    //Use Object.entries to console.log each weather report value
    Object.entries(report).forEach(([key,value]) =>{
        console.log(`Key: ${key} and Value ${value}`);

        // Append a cell to the row for each value
        var cell = tbody.append("td");

        // update cells text
        cell.text(value);
        });
    });
}
// Load table when page first starts up
ufo_table(tableData);


// FOR DATE SEARCH

// select the submit button
var button = d3.select("#filter-btn");

// When button is clicked
button.on("click", function() {
    // prevent refresh
    d3.event.preventDefault();

    // Select input element and get raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // Iterate and find date we need
    function searching(entry) {
        return entry.datetime === inputValue;
    }

    // create a new set of data that matches the input value

    var filtered_data = tableData.filter(searching);
    
    
    // clear old table for new one
    tbody.remove();
    tobdy = d3.select("tbody");

    //show new iterate through new table data
    ufo_table(filtered_data);
    console.log(filtered_data);


})