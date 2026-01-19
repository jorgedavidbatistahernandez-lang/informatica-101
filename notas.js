/*************************
 * BASE DE DATOS (FIJA)
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
 * EVALUACIONES
 *************************/
const evaluaciones = [
    {
        nombre: "Sentencias Condicionales",
        fecha: "10/12/2025",
        descripcion: `
        <b>Preguntas Verdadero o Falso:</b><br><br>
        1. Una variable <code>bool</code> solo puede almacenar los valores 0 o 1.<br>
        2. La declaración <code>float precio = 10.99;</code> es válida en C++.<br>
        3. La declaración <code>String CI = 102839.000;</code> no es correcta en C++.<br>
        4. El operador <code>==</code> se utiliza para asignar valores a las variables.<br>
        5. La condición de un <code>if</code> siempre debe estar entre paréntesis.<br>
        6. La instrucción <code>cin >> edad;</code> lee un valor y lo almacena en la variable <code>edad</code>.<br>
        7. <code>#include &lt;iostream&gt;</code> permite usar <code>cout</code> y <code>cin</code>.<br>
        8. Los nombres de variables distinguen entre mayúsculas y minúsculas.<br>
        9. <code>(5 > 3) && (4 < 2)</code> evalúa a verdadero.<br><br>

        <b>Descripción del Programa:</b><br>
        Crea un programa que:<br>
        1. Solicite el año de nacimiento.<br>
        2. Solicite el año actual.<br>
        3. Calcule la edad.<br>
        4. <b>Validaciones:</b><br>
           - El año de nacimiento no puede ser mayor que el año actual.<br>
           - Ambos años deben ser positivos.<br>
           - La edad máxima permitida es 120 años.<br>
        5. <b>Clasifique según generación:</b><br>
           - 0-12: Niño<br>
           - 13-17: Adolescente<br>
           - 18-35: Joven<br>
           - 36-59: Adulto<br>
           - 60+: Adulto mayor<br><br>
`,
        notas: {
            10: ["Lazaro Jesús Leyva Pérez","Kevin Peña Arenas","Bryan Jesús Bruzón Roche","Rafael Borges Garcia","Kevin Serrano Santesteban"],
            9: ["Marcos Gonzalez Castellanos","Luis Hernández Maldonado","Luis Pérez Dominguez"],
            8: ["Saday Laffita Maldonado","Ana Gretel Guerrero Ochoa","Ana Karla Guerrero Ochoa","Alain Tamayo Arias"],
            7: ["Yadier Sánchez Caballero","Eliset Pioto Guerra","Armán Yosbel Remedio","Luis Enrique Ortiz Jardinez"],
            6: ["Ismel Saad Acosta","Jean Aguilera Tamayo","Kevin Ruz Batista"],
            5: ["Isabela Rojas Valdés","Evens Cedeño Cruz","Marielvis Diaz Fernández"]
        }
    },
    {
        nombre: "Tipos de Datos",
        fecha: "19/11/2025",
        descripcion: `
        <b>Tipos de Datos</b><br><br>

        <b>Enlaza según corresponda:</b><br><br>
        
        <table style="width:100%;border-collapse:collapse">
        <tr>
        <td>Int</td><td>*</td><td>Almacena: Un solo carácter (A; 1; = ; #)</td>
        </tr>
        <tr>
        <td>Char</td><td>*</td><td>Almacena: Números con decimales (1.2; 0.5; 1/2)</td>
        </tr>
        <tr>
        <td>String</td><td>*</td><td>Almacena: Números enteros (0; -1; 37)</td>
        </tr>
        <tr>
        <td>Double</td><td>*</td><td>Almacena: Cadena de caracteres (“Pedro77”; “Sr.Stone”)</td>
        </tr>
        <tr>
        <td>Float</td><td>*</td><td>Almacena: Valores lógicos (Verdadero / Falso; 0; 1)</td>
        </tr>
        <tr>
        <td>Bool</td><td>*</td><td>Almacena: Valores vacíos</td>
        </tr>
        </table>
        
        <br>
        <b>Completa según corresponda:</b><br><br>
        
        <b>Sintaxis:</b><br>
        Cout ____  “¿Cuál es tu nombre?”  _<br>
        Cin  >>  __________ ;<br><br>
        
        <b>¿Qué es una variable?</b><br>
        __________________________________________________________<br><br>
`,
        notas: {
            10: ["Jean Aguilera Tamayo","Roylan Martinez Oro","Yoan Zuniga Morales"],
            9: ["Marcos Gonzalez Castellanos","Saday Laffita Maldonado","Luis Hernández Maldonado","Alain Tamayo Arias","Kevin Peña Arenas","Kevin Conrado Campos","Lazaro Jesús Leyva Pérez"],
            8: ["Michael Aguilera Rojas","Ana Gretel Guerrero Ochoa","Yadier Sánchez Caballero","Luis Pérez Dominguez","Kevin Serrano Santesteban","Alain González de los Reyes Castellanos","Armán Yosbel Remedio"],
            7: ["Ana Karla Guerrero Ochoa"],
            6: ["Luis Enrique Ortiz Jardinez"],
            5: ["Analia Hidalgo Sosa","Angel Torres Rodriguez"],
            4: ["Raybel Aguilera Almenares"],
            3: ["José Cruz Cruz","Alain Zaldivar Betancourt"],
            1: ["Marielvis Diaz Fernández","Isabela Rojas Valdés"],
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
    if (notas.length === 0) return "—";
    return (notas.reduce((a, b) => a + b, 0) / notas.length).toFixed(2);
}

/*************************
 * TABLA PRINCIPAL
 *************************/
const tbody = document.querySelector("#tablaAlumnos tbody");

alumnos.forEach(al => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${al.numero}</td>
        <td>${al.nombre}</td>
        <td>${calcularPromedio(al)}</td>
        <td></td>
    `;
    tr.addEventListener("click", () => abrirModal(al));
    tbody.appendChild(tr);
});

/*************************
 * MODAL
 *************************/
function abrirModal(alumno) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("tituloAlumno").innerText = alumno.nombre;

    const detalle = document.getElementById("detalleNotas");
    detalle.innerHTML = "";

    alumno.evaluaciones.forEach(ev => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td style="cursor:pointer">${ev.nombre}</td>
            <td>${ev.fecha}</td>
            <td>${ev.nota !== null ? ev.nota : "⏳"}</td>
            <td>${calcularPromedio(alumno)}</td>
        `;
        tr.addEventListener("click", () => mostrarDescripcion(ev.descripcion));
        detalle.appendChild(tr);
    });
}

function mostrarDescripcion(texto) {
    let box = document.getElementById("descripcionBox");
    if (!box) {
        box = document.createElement("div");
        box.id = "descripcionBox";
        box.style.maxHeight = "250px";
        box.style.overflowY = "auto";
        box.style.marginTop = "15px";
        document.querySelector(".modal-content").appendChild(box);
    }
    box.innerHTML = texto;
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}
