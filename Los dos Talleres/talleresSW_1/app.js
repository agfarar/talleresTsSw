"use strict";
class Serie {
    constructor(id, nombre, canal, temporadas) {
        this.id = id;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
    }
}
const series = [
    new Serie(1, "Yo soy Betty, la fea", "Netflix", 1),
    new Serie(2, "Game of Thrones", "HBO", 8),
    new Serie(3, "Escobar: El Patrón del Mal", "Netflix", 1)
];
function llenarTabla() {
    const tbody = document.getElementById('series-table-body');
    const promedioTemporadas = calcularPromedioTemporadas(series);
    if (tbody) {
        tbody.innerHTML = '';
        series.forEach(function (serie) {
            const row = `<tr>
                            <td>${serie.id}</td>
                            <td>${serie.nombre}</td>
                            <td>${serie.canal}</td>
                            <td>${serie.temporadas}</td>
                        </tr>`;
            tbody.innerHTML += row;
        });
        const promedioRow = `<tr class="table-info">
                                <td colspan="3" class="font-weight-bold text-center">Promedio de temporadas:</td>
                                <td class="font-italic">${promedioTemporadas.toFixed(2)}</td>
                            </tr>`;
        tbody.innerHTML += promedioRow;
    }
    else {
        console.error("Element not found");
    }
}
function calcularPromedioTemporadas(series) {
    return (series.reduce((total, serie) => total + serie.temporadas, 0)) / series.length;
}
document.addEventListener('DOMContentLoaded', llenarTabla);
