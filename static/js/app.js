
var tableData = data;

let tbody = d3.select("tbody");

function table(data) {
  tbody.html("");

  data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let ufoInfo = row.append("td");
        ufoInfo.text(val);
      }
    );
  });
}

function buttonClick() {

  d3.event.preventDefault();

        let dateSearch = d3.select("#datetime").property("value");
        let citySearch = d3.select("#city").property("value").toLowerCase();
        let stateSearch = d3.select("#state").property("value").toLowerCase();
        let countrySearch = d3.select("#country").property("value").toLowerCase();
        let shapeSearch = d3.select("#shape").property("value").toLowerCase();
        let filteredData = tableData;
        if (dateSearch) {
          filteredData = filteredData.filter(row => row.datetime === dateSearch);
        }
        if (citySearch) {
          filteredData = filteredData.filter(row => row.city === citySearch);
        }
        if (stateSearch) {
          filteredData = filteredData.filter(row => row.state === stateSearch);
        }
        if (countrySearch) {
          filteredData = filteredData.filter(row => row.country === countrySearch);
        }
        if (shapeSearch) {
          filteredData = filteredData.filter(row => row.shape === shapeSearch);
        }
        table(filteredData);
      }


d3.selectAll("#filter-btn").on("click", buttonClick);
table(tableData);
