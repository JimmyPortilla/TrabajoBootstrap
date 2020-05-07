$(document).ready(function () {
    new Chart(document.getElementById("barraH"), {
        type: 'horizontalBar',
        data: {
          labels: ["Africa", "America Latina", "Asia & Pacifico", "Europa", "NorteAmerica"],
          datasets: [
            {
              label: "Porcentaje de hogares con conexión a internet",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: [17,44,49,783,88]
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
          }
        },
        options:{
          responsive:true
      }
    });

});