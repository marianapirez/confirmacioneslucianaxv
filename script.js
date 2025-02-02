// Lista de invitados con sus cupos asignados
const invitados = {
    "Makinson dos Santos": 1,
"Gisel Gomez": 1,
"Bianca Rodríguez": 1,
"Sandra dos Santos": 2,
"Mirtha Gomez": 1,
"Celia Da Rosa": 2,
"Sirley": 1,
"Gustavo Mello": 3,
"Delia Irigaray": 2,
"Nelly Lemos": 2,
"Carina Ramos": 4,
"Lorena Wilkins": 5,
"Rosana Ramos": 5,
"Isaura Frías": 1,
"Teresa Lemos": 1,
"Nathalia Lemos": 1,
"Lolo": 8,
"Mirian Lemos": 3,
"Cecilia Buere": 3,
"Jorge Buere": 1,
"Marcos Buere": 3,
"Mireya Lemos": 1,
"Yane Lemos": 3,
"Isabel Lemos": 2,
"María Pereira": 1,
"Marcia Lemos": 2,
"Gustavo Lemos": 5,
"Sofia Gau": 1,
"Claudia Lemos": 5,
"Fernanda Valvuena": 3,
"Martin Lemos": 3,
"Iris Almeida": 4,
"Tamara Mello": 4,
"Elisa Arriola": 1,
"Flavia Vieira": 1,
"Sonia Figueroa": 2,
"Jazmin Rivero": 4,
"Walter Ucha": 2,
"Marcia Rodríguez": 5,
"Hugo Lemos": 4,
"Nara Olivera": 2,
"Marlene Ribeiro": 2

    
};

const CLAVE_ADMIN = "Luciana15";  // 🔒 Cambia esto por tu contraseña

// Función para buscar el invitado o verificar la contraseña
function buscarInvitado(event) {
    event.preventDefault(); // Evitar recarga de página

    let nombre = document.getElementById("nombre").value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese su nombre o contraseña.");
        return;
    }

    // Verificar si el nombre ingresado es la clave de acceso
    if (nombre === CLAVE_ADMIN) {
        document.getElementById("pagina1").style.display = "none"; // Ocultar sección de ingreso
        document.getElementById("pagina3").style.display = "block"; // Mostrar sección de confirmaciones
        cargarConfirmaciones(); // Cargar las confirmaciones
        return;
    }

    // Verificar si el nombre está en la lista de invitados
    if (invitados[nombre] !== undefined) {
        // Guardar el nombre y los cupos en localStorage
        localStorage.setItem("nombre", nombre);
        localStorage.setItem("cupos", invitados[nombre]);

        // Ocultar la primera sección y mostrar la segunda
        document.getElementById("pagina1").style.display = "none";
        document.getElementById("pagina2").style.display = "block";

        // Actualizar el saludo y los cupos disponibles
        document.getElementById("nombreInvitado").textContent = nombre;
        document.getElementById("cupos").textContent = invitados[nombre];
    } else {
        alert("Nombre no encontrado en la lista de invitados.");
    }
}

// Función para guardar la confirmación de asistencia y enviar a Formspree
function guardarConfirmacion(event) {
    event.preventDefault(); // Evitar recarga de página

    const asistencia = document.querySelector('input[name="asistencia"]:checked');
    const lugares = document.getElementById("lugaresConfirmados").value;

    if (!asistencia || !lugares) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    const confirmacion = {
        nombre: localStorage.getItem("nombre"),
        asistencia: asistencia.value,
        lugaresConfirmados: lugares
    };

    // Guardar la confirmación en localStorage
    let confirmaciones = JSON.parse(localStorage.getItem("confirmaciones")) || [];
    confirmaciones.push(confirmacion);
    localStorage.setItem("confirmaciones", JSON.stringify(confirmaciones));

    // Llenar el formulario de Formspree con los datos
    document.getElementById("formNombre").value = confirmacion.nombre;
    document.getElementById("formAsistencia").value = confirmacion.asistencia;
    document.getElementById("formLugares").value = confirmacion.lugaresConfirmados;

    // Enviar el formulario a Formspree
    const form = document.getElementById("formspreeForm");
    form.submit();

    // Ocultar la sección de confirmación y mostrar la de agradecimiento
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina4").style.display = "block";

    // Mostrar mensaje de agradecimiento
    const mensajeGracias = document.getElementById("mensajeGracias");
    const detalleGracias = document.getElementById("detalleGracias");

    if (asistencia.value === "si") {
        mensajeGracias.textContent = "¡Gracias por confirmar tu asistencia!";
        detalleGracias.textContent = "Nos vemos en los quince años de Luciana.";
    } else {
        mensajeGracias.textContent = "Lamentamos que no puedas asistir.";
        detalleGracias.textContent = "Espero verte en otra ocasión. ¡Gracias por avisarme!";
    }
}

// Función para cargar todas las confirmaciones
function cargarConfirmaciones() {
    let confirmaciones = JSON.parse(localStorage.getItem("confirmaciones")) || [];
    const tabla = document.getElementById("tablaConfirmaciones").getElementsByTagName('tbody')[0];

    confirmaciones.forEach(confirmacion => {
        let fila = tabla.insertRow();
        fila.insertCell(0).textContent = confirmacion.nombre;
        fila.insertCell(1).textContent = confirmacion.asistencia;
        fila.insertCell(2).textContent = confirmacion.lugaresConfirmados;
    });
}

// Asignar eventos
document.getElementById("continuarBtn").addEventListener("click", buscarInvitado);
document.getElementById("confirmarBtn").addEventListener("click", guardarConfirmacion);
