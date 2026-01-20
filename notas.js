document.addEventListener("DOMContentLoaded", () => {

/* === DATOS === */
let alumnos = [
 {numero:1,nombre:"Raybel Aguilera Almenares",evaluaciones:[]},
 {numero:2,nombre:"Jean Aguilera Tamayo",evaluaciones:[]},
 {numero:3,nombre:"Michael Aguilera Rojas",evaluaciones:[]},
 {numero:4,nombre:"Nayelis Batista Montero",evaluaciones:[]},
 {numero:6,nombre:"Rafael Borges Garcia",evaluaciones:[]},
 {numero:7,nombre:"Bryan Jesús Bruzón Roche",evaluaciones:[]},
 {numero:8,nombre:"Evens Cedeño Cruz",evaluaciones:[]},
 {numero:9,nombre:"Richard Cobas Serrano",evaluaciones:[]},
 {numero:10,nombre:"Kevin Conrado Campos",evaluaciones:[]}
];

/* === EVALUACIONES === */
const evaluaciones=[{
 nombre:"Sentencias Condicionales",
 fecha:"10/12/2025",
 descripcion:"Evaluación de condicionales",
 notas:{10:["Kevin Conrado Campos"],8:["Jean Aguilera Tamayo"]}
}];

/* === ASIGNAR === */
evaluaciones.forEach(ev=>{
 alumnos.forEach(al=>{
  let nota=null;
  for(let n in ev.notas){
   if(ev.notas[n].includes(al.nombre)){nota=parseInt(n)}
  }
  al.evaluaciones.push({...ev,nota});
 });
});

/* === PROMEDIO === */
function promedio(a){
 let n=a.evaluaciones.map(e=>e.nota).filter(x=>x!=null);
 return n.length?(n.reduce((a,b)=>a+b,0)/n.length).toFixed(2):"—";
}

/* === TABLA === */
const tbody=document.querySelector("#tablaAlumnos tbody");

function cargar(){
 tbody.innerHTML="";
 alumnos.forEach(a=>{
  let tr=document.createElement("tr");
  tr.innerHTML=`<td>${a.numero}</td><td>${a.nombre}</td><td>${promedio(a)}</td><td></td>`;
  tr.onclick=()=>abrirModal(a);
  tbody.appendChild(tr);
 });
}
cargar();

/* === BUSCADOR === */
document.getElementById("buscadorNombre").addEventListener("input",e=>{
 let f=e.target.value.toLowerCase();
 document.querySelectorAll("#tablaAlumnos tbody tr").forEach(tr=>{
  tr.style.display=tr.innerText.toLowerCase().includes(f)?"":"none";
 });
});

/* === MODAL === */
window.abrirModal=function(a){
 document.getElementById("modal").style.display="block";
 document.getElementById("tituloAlumno").innerText=a.nombre;
 let d=document.getElementById("detalleNotas");
 d.innerHTML="";
 a.evaluaciones.forEach(e=>{
  d.innerHTML+=`<tr><td>${e.nombre}</td><td>${e.fecha}</td><td>${e.nota??"⏳"}</td><td>${promedio(a)}</td></tr>`;
 });
}
window.cerrarModal=()=>document.getElementById("modal").style.display="none";

});
