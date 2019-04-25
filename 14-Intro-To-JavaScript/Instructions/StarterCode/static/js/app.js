// from data.js
//var tableData = data;

// YOUR CODE HERE!

// from data.js
var tableData = data;

// The table body
var tbody = d3.select("tbody");
tbody.html

// Console.log the UFO data from the JS file
console.log(data);

// Loop through data and append to html
data.forEach(function(tableData) {
    console.log(tableData);
    var row = tbody.append("tr");

    Object.entries(tableData).forEach(function([key, value]) {


        //console.log(key, value);
        // Append a cell to the row for each value in the  data
        var cell = tbody.append("td");
        cell.text(value);
    })   
});

// Filter by categories



// On click button
var submit = d3.select("#date-btn"); 
submit.on("click", function() {
          // Prevent from refreshing 
            d3.event.preventDefault();

          // Select the input element-datetime
            var inputElement = d3.select("#datetime");
            console.log(inputValue);
            console.log(tableData);

          // Get input element
            var inputValue = inputElement.property("value");
           
            // Filter with exact date 
            var filteredDate = tableData.filter(tableData => tableData.datetime === inputValue);
            console.log(filteredDate);
            var dates = filteredDate.map(tableData  => tableData.datetime);

tableData(filteredDate);
});

// On click button
var submit = d3.select("#shape-btn");
submit.on("click", function() {

            // Prevent from refreshing 
            d3.event.preventDefault();

          // Select the input element-shape
          var inputSPElement = d3.select("#shape");
          var inputSPValue = inputSPElement.property("value");
            console.log(inputShValue);
            console.log(tableData);

          // Filter with exact shape
          var filteredShape = tableData.filter(tableData => tableData.shape === inputSPValue);
            console.log(filteredShape);  

            var cities = filteredShape.map(tableData  => tableData.shape);

tableData(filteredShape);
});

// On click button
var submit = d3.select("#state-btn");
submit.on("click", function() {

          // Prevent from refreshing 
          d3.event.preventDefault();

          //Select the input element-state
          var inputSTElement = d3.select("#state");
          var inputSTValue = inputSTElement.property("value");
            console.log(inputSTValue);
            console.log(tableData);
        
           // Filter with exact state  
          var filteredState = tableData.filter(tableData => tableData.state === inputStValue);
          console.log(filteredState);  

          var states = filteredState.map(tableData  => tableData.state);

tableData(filteredState);
});

// On click button
var submit = d3.select("#city-btn");
submit.on("click", function() {
            // Prevent from refreshing 
            d3.event.preventDefault();

            //Select the input element-city
            var inputCiElement = d3.select("#city");
            var inputCiValue = inputCiElement.property("value");
            console.log(inputCiValue);
            console.log(tableData);
          
            // Filter with exact city
            var filteredCity = tableData.filter(tableData => tableData.city === inputCiValue);
            console.log(filteredCity);  

            var cities = filteredCity.map(tableData  => tableData.city);

tableData(filteredCity);
});
 
// On click button
var submit = d3.select("#country-btn");
submit.on("click", function() {
        // Prevent from refreshing 
          d3.event.preventDefault();

          //Select the input element-country
          var inputCtElement = d3.select("#country");
          var inputCtValue = inputCtElement.property("value");
            console.log(inputCtValue);
            console.log(tableData);
          
         // Filter with exact country
          var filteredCtry = tableData.filter(tableData => tableData.country === inputCtryValue);
            console.log(filteredCtry);  

          var country = filteredCtry.map(tableData  => tableData.country);
          
tableData(filteredCtry);
});
 





    

    

