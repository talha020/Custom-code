<script src="https://www.amcharts.com/lib/4/core.js"></script>
<script src="https://www.amcharts.com/lib/4/maps.js"></script>
<script src="https://www.amcharts.com/lib/4/geodata/usaLow.js"></script>

<script>

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_usaLow;

// Set projection
chart.projection = new am4maps.projections.AlbersUsa();


// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Add some custom data
polygonSeries.data = [{
  "id": "US",
  "color": am4core.color("#a3cbed"),
  "description": "The U.S. is a country of 50 states covering a vast swath of North America."
}, {
  "id": "US-AL",

  "description": "Paused in Safer at Home phase through 7/31/20<br> • Masks Recommended<br> • Temperature check and screenings recommended"}, {
  "id": "US-AK",

  "description": "<br> • Masks Required<br> • "}, {
  "id": "US-AZ",

  "description": "Reopening paused through 7/27/20 and partial re-closure in effect as of 7/11/20<br> • Masks Required for certain businesses<br> • "}, {
  "id": "US-AR",

  "description": "<br> • Masks Required<br> • No temperature check requirement<br> • Screenings Required"}, {
  "id": "US-CA",

  "description": "Partial re-closures in effect in specified counties<br> • Masks Required (as of 6/18/2020)<br> • No temperature checks required.<br> • Screenings Recommended"}, {
  "id": "US-CO",

  "description": "Partial re-closure in effect<br> • Masks Required<br> • Both temperature checks and screenings are required."}, {
  "id": "US-CT",

  "description": "Paused in phase 2<br> • Masks Required<br> • Temperature checks recommended<br> • Screenings required"}, {
  "id": "US-DC",

  "description": "Re-opening<br> • Masks Required<br> • Temperature check not required<br> • Screenings Required"}, {
  "id": "US-FL",

  "description": "Partial re-closure in effect<br> • Masks Required<br> • Temperature check not required<br> • Screenings not required"}, {
  "id": "US-GA",

  "description": "Paused in Empowering a Healthy Georgia phase through 7/15/20<br> • Masks Required<br> • Temperature check not required<br> • Screenings Required"}, {
  "id": "US-HI",

  "description": "Re-opening<br> • Masks Required<br> • Temperature check not required<br> • Screenings not required"}, {
  "id": "US-ID",

  "description": "Paused in stage 4 through 7/24/20<br> • Masks Recommended<br> • Temperature checks required for some industries.<br> • Screenings required for some industries."}, {
  "id": "US-IL",

  "description": "Reopening started on 5/29/20<br> • Masks Required<br> • Temperature checks recommended for specified employers. Screenings recommended for specified employers."}, {
  "id": "US-IN",

  "description": "Interim reopening step in effect (stage 4.5) through 7/17/20<br> • Masks Required<br> • Temperature checks recommended<br> • Screenings required"}, {
  "id": "US-IA",

  "description": "Re-opening<br> • Masks Not required<br> • Temperature checks not required<br> • Screenings recommended"}, {
  "id": "US-KS",

  "description": "<br> • Masks Required<br> • Temperature checks recommended for employees<br> • Screenings recommended for employees"}, {
  "id": "US-KY",

  "description": "<br> • Masks Required<br> • Both temperature checks and screenings are required."}, {
  "id": "US-LA",

  "description": "Paused in phase 2 through 7/24/20 and partial re-closure in effect as of 7/13/20<br> • Masks Required<br> • Temperature checks not required<br> • Screenings recommended"}, {
  "id": "US-ME",

  "description": "Specific reopening step delayed<br> • Masks Required<br> • Temperature checks not required<br> • Screenings not required"}, {
  "id": "US-MD",

  "description": "<br> • Masks Required<br> • Temperature checks and screenings recommended for employers"}, {
  "id": "US-MI",

  "description": "Partial re-closure in effect in specified regions<br> • Masks Required<br> • Temperature check requirements for specific industries<br> • Screening requirements for specific industries"}, {
  "id": "US-MS",

  "description": "Paused in Safe Return phase through 7/20/20<br> • Masks Required<br> • Temperature checks not required<br> • Screenings required for specific industries and in specific counties"}, {
  "id": "US-MT",

  "description": "<br> • Masks None<br> • Temperature check not required<br> • Screenings required by employers of their staff and of their customers for personal care service providers."}, {
  "id": "US-NE",

  "description": "<br> • Masks Required<br> • Temperature check and screenings recommended for restaurants and meat processing facilities"}, {
  "id": "US-NV",

  "description": "Paused in phase 2 through 7/31/20 and partial re-closure in effect in specified counties as of 7/10/20<br> • Masks Required<br> • Temperature checks not required<br> • Screenings required for specific industries and recommended for all others"}, {
  "id": "US-NH",

  "description": "<br> • Masks Required<br> • Temperature checks and screens required for all businesses that are reopening"}, {
  "id": "US-NJ",

  "description": "Specific reopening step delayed<br> • Masks Required<br> • Temperature checks and screenings required for agriculture, restaurants, and other food and beverage businesses"}, {
  "id": "US-NM",

  "description": "Reopening paused through 7/30/20 and partial re-closure in effect as of 7/13/20<br> • Masks Required<br> • Temperature checks recommended for retail employers<br> • Screenings required"}, {
  "id": "US-NY",

  "description": "<br> • Masks Required<br> • Temperature checks recommended<br> • Screenings required"}, {
  "id": "US-NC",

  "description": "Paused in phase 2 through 7/17/20<br> • Masks Required<br> • Temperature checks not required (varies by locality)<br> • Screenings required "}, {
  "id": "US-OH",

  "description": "Reopening paused<br> • Masks Required<br> • Temperature checks not required<br> • Screenings required"}, {
  "id": "US-OK",

  "description": "<br> • Masks None<br> • No requirement for temperature checks or screenings"}, {
  "id": "US-OR",

  "description": "<br> • Masks Required<br> • Temperature checks and screenings recommended for most businesses. "}, {
  "id": "US-PA",

  "description": "<br> • Masks Required<br> • Temperature checks recommended<br> • Screenings required for construction employers"}, {
  "id": "US-PR",

  "description": "<br> • Masks Required<br> • Temperature checks not required<br> • Screenings required"}, {
  "id": "US-RI",

  "description": "<br> • Masks Required<br> • Temperature checks not required<br> • Screenings required"}, {
  "id": "US-SC",

  "description": "Partial re-closure in effect as of 7/11/20<br> • Masks Recommended<br> • Recommended for restaurant employees"}, {
  "id": "US-TN",

  "description": "<br> • Masks Recommended<br> • Temperature checks recommended<br> • Screenings of employees is recommended"}, {
  "id": "US-TX",

  "description": "Partial re-closures in effect<br> • Masks Required<br> • Temperature checks recommended<br> • Screenings recommended for businesses that are reopening"}, {
  "id": "US-UT",

  "description": "Reopening paused through 7/24/20<br> • Masks Required<br> • Temperature checks required for fitness centers<br> • Screenings recommended for fitness centers and personal care providers; recommended for all other businesses"}, {
  "id": "US-VA",

  "description": "Specific reopening step delayed<br> • Masks Required<br> • Temperature checks and screenings recommended"}, {
  "id": "US-WA",

  "description": "Reopening paused and partial re-closure in effect<br> • Masks Required<br> • Temperature checks generally recommended and required for retail and construction sites<br> • Screenings are recommended for most employers and required for restaurants, construction sites, retail, and landscaping employers"}, {
  "id": "US-WV",

  "description": "<br> • Masks Required<br> • Temperature checks recommended for hospitality and restaurant industry employers<br> • Screenings are required for certain employers"
}]



// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#a3cbed");
polygonTemplate.propertyFields.fill = "color";
polygonTemplate.events.on("hit", function(ev) {
  var data = ev.target.dataItem.dataContext;
  var info = document.getElementById("info");
  info.innerHTML = "<h3>" + data.name + " (" + data.id  + ")</h3>";
  if (data.description) {
    info.innerHTML += data.description;
  }
  else {
    info.innerHTML += "<i>No description provided.</i>"
  }
});

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#5f4e98");

// Remove Antarctica
polygonSeries.exclude = ["AQ"];

// Disable zoom and pan
chart.maxZoomLevel = 1;
chart.seriesContainer.draggable = false;
chart.seriesContainer.resizable = false;
chart.chartContainer.wheelable = false;
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

#chartdiv {
  width: 100%;
  height: 350px;
}

</style>