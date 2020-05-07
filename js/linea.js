$(document).ready(function () {
  new Chart(document.getElementById("linea"), {
    type: 'bubble',
    data: {
      labels: "Africa",
      datasets: [
        {
          label: ["Internet World Stats"],
          backgroundColor: "rgba(255,221,50,0.2)",
          borderColor: "rgba(255,221,50,1)",
          data: [{
            x: 1,
            y: 13.47,
            r: 15
          }]
        }, {
          label: ["ITU (International Telecomunication Union)"],
          backgroundColor: "rgba(60,186,159,0.2)",
          borderColor: "rgba(60,186,159,1)",
          data: [{
            x: 2,
            y: 9.05,
            r: 10
          }]
        }, {
          label: ["Internet Live Stats"],
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#000",
          data: [{
            x: 3,
            y: 7.06,
            r: 15
          }]
        }, {
          label: ["CIA World FactBook"],
          backgroundColor: "rgba(193,46,12,0.2)",
          borderColor: "rgba(193,46,12,1)",
          data: [{
            x: 4,
            y: 9.06,
            r: 15
          }]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }, scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Happiness"
          }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "GDP (PPP)"
          }
        }]
      }
    }
});
});