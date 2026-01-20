document.addEventListener("DOMContentLoaded", () => {

/*************************
 * BASE DE DATOS (COMPLETA)
 *************************/
let alumnos = [
 { numero: 1, nombre: "Raybel Aguilera Almenares", evaluaciones: [] },
 { numero: 2, nombre: "Jean Aguilera Tamayo", evaluaciones: [] },
 { numero: 3, nombre: "Michael Aguilera Rojas", evaluaciones: [] },
 { numero: 4, nombre: "Nayelis Batista Montero", evaluaciones: [] },
 { numero: 6, nombre: "Rafael Borges Garcia", evaluaciones: [] },
 { numero: 7, nombre: "Bryan Jesús Bruzón Roche", evaluaciones: [] },
 { numero: 8, nombre: "Evens Cedeño Cruz", evaluaciones: [] },
 { numero: 9, nombre: "Richard Cobas Serrano", evaluaciones: [] },
 { numero: 10, nombre: "Kevin Conrado Campos", evaluaciones: [] },
 { numero: 11, nombre: "José Cruz Cruz", evaluaciones: [] },
 { numero: 12, nombre: "Marielvis Diaz Fernández", evaluaciones: [] },
 { numero: 13, nombre: "Alain González de los Reyes Castellanos", evaluaciones: [] },
 { numero: 14, nombre: "Marcos Gonzalez Castellanos", evaluaciones: [] },
 { numero: 15, nombre: "Ana Karla Guerrero Ochoa", evaluaciones: [] },
 { numero: 16, nombre: "Ana Gretel Guerrero Ochoa", evaluaciones: [] },
 { numero: 17, nombre: "Luis Hernández Maldonado", evaluaciones: [] },
 { numero: 18, nombre: "Analia Hidalgo Sosa", evaluaciones: [] },
 { numero: 19, nombre: "Saday Laffita Maldonado", evaluaciones: [] },
 { numero: 20, nombre: "Lazaro Jesús Leyva Pérez", evaluaciones: [] },
 { numero: 21, nombre: "Roylan Martinez Oro", evaluaciones: [] },
 { numero: 22, nombre: "David Molina Fernández", evaluaciones: [] },
 { numero: 23, nombre: "Luis Enrique Ortiz Jardinez", evaluaciones: [] },
 { numero: 24, nombre: "José Peña Pérez", evaluaciones: [] },
 { numero: 25, nombre: "Kevin Peña Arenas", evaluaciones: [] },
 { numero: 26, nombre: "Luis Pérez Dominguez", evaluaciones: [] },
 { numero: 27, nombre: "Eliset Pioto Guerra", evaluaciones: [] },
 { numero: 28, nombre: "Armán Yosbel Remedio", evaluaciones: [] },
 { numero: 29, nombre: "Yereiny Reyna Peña", evaluaciones: [] },
 { numero: 30, nombre: "Claudia Rodriguez Fernández", evaluaciones: [] },
 { numero: 31, nombre: "Rachel Rodriguez Galarde", evaluaciones: [] },
 { numero: 32, nombre: "Isabela Rojas Valdés", evaluaciones: [] },
 { numero: 33, nombre: "Liony Rouseaux Vazquez", evaluaciones: [] },
 { numero: 34, nombre: "Kevin Ruz Batista", evaluaciones: [] },
 { numero: 35, nombre: "Ismel Saad Acosta", evaluaciones: [] },
 { numero: 36, nombre: "Yadier Sánchez Caballero", evaluaciones: [] },
 { numero: 37, nombre: "Kevin Serrano Santesteban", evaluaciones: [] },
 { numero: 38, nombre: "Alain Tamayo Arias", evaluaciones: [] },
 { numero: 39, nombre: "Denis Tamayo Peña", evaluaciones: [] },
 { numero: 40, nombre: "Angel Torres Rodriguez", evaluaciones: [] },
 { numero: 41, nombre: "Alain Zaldivar Betancourt", evaluaciones: [] },
 { numero: 42, nombre: "Yoan Zuniga Morales", evaluaciones: [] }
];

/*************************
 * EVALUACIONES (COMPLETAS)
 *************************/
const evaluaciones = [
 {
  nombre: "Sentencias Condicionales",
  fecha: "10/12/2025",
  descripcion: `
<b>Preguntas Verdadero o Falso:</b><br><br>
1. Una variable <code>bool</code> solo puede almacenar 0 o 1.<br>
2. La condición de un <code>if</code> va entre paréntesis.<br><br>
<b>Descripción:</b><br>
Programa que clasifique edades por generación.
`,
  notas: {
   10: ["Lazaro Jesús Leyva Pérez","Kevin Peña Arenas","Bryan Jesús Bruzón Roche"],
   9: ["Marcos Gonzalez Castellanos","Luis Hernández Maldonado"],
   8: ["Saday Laffita Maldonado","Ana Gretel Guerrero Ochoa"],
   7: ["Yadier Sánchez Caballero","Eliset Pioto Guerra"],
   6: ["Ismel Saad Acosta"],
   5: ["Isabela Rojas Valdés"]
  }
 },
 {
  nombre: "Tipos de Datos",
  fecha: "19/11/2025",
  descripcion: `
<b>Tipos de Datos en C++</b><br><br>
int, float, double, char, string, bool
`,
  notas: {
   10: ["Jean Aguilera Tamayo","Roylan Martinez Oro","Yoan Zuniga Morales"],
   9: ["Marcos Gonzalez Castellanos","Saday Laffita Maldonado"],
   8: ["Michael Aguilera Rojas","Ana Gretel Guerrero Ochoa"],
   7: ["Ana Karla Guerrero Ochoa"],
   6: ["Luis Enrique Ortiz Jardinez"],
   5: ["Analia Hidalgo Sosa"],
   4: ["Raybel Aguilera Almenares"],
   3: ["José Cruz Cruz"],
   1: ["Marielvis Diaz Fernández"],
   0: ["Bryan Jesús Bruzón Roche"]
  }
 }
];

/*************************
 * ASIGNAR NOTAS
 *************************/
evaluaciones.forEach(ev => {
 alumnos.forEach(al => {
  let nota = null;
  for (let n in ev.notas) {
   if (ev.notas[n].includes(al.nombre)) {
    nota = parseInt(n);
    break;
   }
  }
  al.evaluaciones.push({
   nombre: ev.nombre,
   fecha: ev.fecha,
   nota: nota,
   descripcion: ev.descripcion
  });
 });
});

/*************************
 * PROMEDIO
 *************************/
function calcularPromedio(alumno) {
 const notas = alumno.evaluaciones.filter(e => e.nota !== null).map(e => e.nota);
 if (!notas.length) return "—";
 return (notas.reduce((a,b)=>a+b,0)/notas.length).toFixed(2);
}

/*************************
 * TABLA PRINCIPAL
 *************************/
const tbody = document.querySelector("#tablaAlumnos tbody");

function cargarTabla() {
 tbody.innerHTML = "";
 alumnos.forEach(al => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
   <td>${al.numero}</td>
   <td>${al.nombre}</td>
   <td>${calcularPromedio(al)}</td>
   <td></td>
  `;
  tr.onclick = () => abrirModal(al);
  tbody.appendChild(tr);
 });
}
cargarTabla();

/*************************
 * BUSCADOR
 *************************/
document.getElementById("buscadorNombre").addEventListener("input", function () {
 const filtro = this.value.toLowerCase();
 document.querySelectorAll("#tablaAlumnos tbody tr").forEach(fila => {
  fila.style.display = fila.innerText.toLowerCase().includes(filtro) ? "" : "none";
 });
});

/*************************
 * MODAL
 *************************/
window.abrirModal = function(alumno) {
 document.getElementById("modal").style.display = "block";
 document.getElementById("tituloAlumno").innerText = alumno.nombre;
 const detalle = document.getElementById("detalleNotas");
 detalle.innerHTML = "";
 alumno.evaluaciones.forEach(ev => {
  detalle.innerHTML += `
   <tr>
    <td>${ev.nombre}</td>
    <td>${ev.fecha}</td>
    <td>${ev.nota ?? "⏳"}</td>
    <td>${calcularPromedio(alumno)}</td>
   </tr>
  `;
 });
};

window.cerrarModal = function() {
 document.getElementById("modal").style.display = "none";
};

});
