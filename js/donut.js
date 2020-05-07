$(document).ready(function () {
    var ctx = document.getElementById("barra");
    var barra = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Porcentaje de la población 5 y más años', 'Sí tiene celular activado', 'Su celular es smartphone', 'Utiliza redes sociales desde su smartphone'],
            datasets: [{
                data: [92, 54.3, 38.1, 36.0],
                backgroundColor: [
                    '#1CAF9A',
                    '#FEA223',
                    '#43515D',
                    '#3E95CD'
                ],
                borderColor: [
                    '#1CAF9A',
                    '#FEA223',
                    '#08090E',
                    '#3E95CD' 
                ],
                borderWidth: 1
            }]
        },
        options:{
            responsive:true,
        }
    });

});