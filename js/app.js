// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get reference to the body of the table
var tbody = d3.select("tbody");

var populateTable = (data) => {
    tbody.html("");

// Looping through the data and appending a row 
// to the table
    data.forEach(function (data){
        console.log(data);
        var row =tbody.append("tr");

        Object.defineProperties(data).forEach(function ([key, value]) {
            console.log(key, value);
            var cell =tbody.append("td");
            cell.text(value);

        });
    });
}

//Select button
populateTable(tableData);
var submit =d3.selectAll("#filter-btn");

submit.on("click", function() {
    d3.event.preventDefault();
    var inputElement =d3.select("#datetime");
    var inputValue=inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    populateTable(filteredData);
    console.log(filteredData);

})