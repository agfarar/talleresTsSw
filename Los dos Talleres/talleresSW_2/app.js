"use strict";
class Serie {
    constructor(numeroSerie, nombre, canal, temporadas, descripcion, imagen, wikipedia) {
        this.numeroSerie = numeroSerie; // Cambiado de 'id' a 'numeroSerie'
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.wikipedia = wikipedia;
    }
}
const series = [
    new Serie(1, "Yo soy Betty, la fea", "Netflix", 1, "La vida de una joven ingeniera de sistemas que trabaja en Ecomoda.", "betty.jpg", "https://es.wikipedia.org/wiki/Yo_soy_Betty,_la_fea"),
    new Serie(2, "Game of Thrones", "HBO", 8, "Intrigas, traiciones y batallas por el control del Trono de Hierro en los Siete Reinos.", "game.jpg", "https://es.wikipedia.org/wiki/Juego_de_tronos"),
    new Serie(3, "Escobar: El Patrón del Mal", "Netflix", 1, "La historia del narcotraficante Pablo Escobar y su imperio criminal.", "pablo.jpg", "https://es.wikipedia.org/wiki/Pablo_Escobar"),
];
function llenarTabla() {
    const tbody = document.getElementById('series-table-body');
    const serieDescription = document.getElementById('serie-description');
    const promedioTemporadas = calcularPromedioTemporadas(series);
    if (tbody && serieDescription) {
        tbody.innerHTML = '';
        series.forEach(function (serie, index) {
            const row = `<tr data-index="${index}">
                                    <td>${serie.numeroSerie}</td> <!-- Cambiado de 'id' a 'numeroSerie' -->
                                    <td class="serie-nombre" data-description="${serie.descripcion}" data-wikipedia="${serie.wikipedia}" style="text-decoration: underline">${serie.nombre}</td>
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
        const serieNombres = document.querySelectorAll('.serie-nombre');
        serieNombres.forEach(nombre => {
            nombre.addEventListener('click', (event) => {
                var _a;
                if (serieDescription) {
                    const rowIndex = parseInt((_a = nombre.parentElement.getAttribute('data-index')) !== null && _a !== void 0 ? _a : '');
                    if (!isNaN(rowIndex)) {
                        serieDescription.innerHTML = `<a href="${nombre.getAttribute('data-wikipedia')}" target="_blank">${series[rowIndex].nombre}</a><br><img src="${series[rowIndex].imagen}" style="max-width: 100%"><br>${nombre.getAttribute('data-description')}`;
                    }
                    else {
                        console.error('Error: Invalid row index');
                    }
                }
            });
        });
    }
    else {
        console.error("Element not found");
    }
}
function calcularPromedioTemporadas(series) {
    return (series.reduce((total, serie) => total + serie.temporadas, 0)) / series.length;
}
document.addEventListener('DOMContentLoaded', llenarTabla);
