$(document).ready(function () {
    new Chart(document.getElementById("myChart"), {
        type: 'bar',
        data: {
          labels: ["2012", "2013", "2014", "2015", "2016"
          , "2017", "2018"],
          datasets: [
            {
              label: "Computadora de escritorio",
              backgroundColor: "#1CAF9A",
              data: [26.4,27.5,27.1,27.1,26.7,25.9,24.5]
            }, {
              label: "Computadora portatil",
              backgroundColor: "#08090E",
              data: [13.9,18.1,20.6,24.8,27.6,26.0,24.2]
            },{
                label: "Computador de escritorio y portatil",
                backgroundColor: "#FEA223",
                data: [8.1,9.9,10.2,11.6,12.0,11.2,11.2]
              }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'En 2018, el porcentaje de hogares con computadora portátil se ubicó en 24,2%; aumentó 10.3 puntos porcentuales. '
          }
        },
        options:{
          responsive:true
      }
    });
});