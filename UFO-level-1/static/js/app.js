// from data.js
const tableData = data;

// Bring in table references
const tbody = d3.select("tbody");

function buildTable(data) {
  // Clear data
  tbody.html("");

  // Loop through object
  data.forEach((dataRow) => {
    // Append a row to the table
    const row = tbody.append("tr");

    // Loop through each field in dataRow
    Object.values(dataRow).forEach((datai) => {
      let alien = row.append("td");
        alien.text(datai);
      }
    );
  });
}

function handleClick() {

  // Find datetime value from filter
  const sighting = d3.select("#datetime").property("value");
  let filteredData = tableData;

  if (sighting) {
    filteredData = filteredData.filter(row => row.datetime === sighting);
  }

  // Show table with filtered data
  buildTable(filteredData);
}

// Create event for when button is clicked
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the filtered table when clicked
buildTable(tableData);