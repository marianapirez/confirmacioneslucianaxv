
// Lista de invitados con sus cupos asignados
const invitados = {
    "anadossantos": { nombre: "Ana dos Santos", telefono: "095608354", cupos: 5 },
    "matiasrossi": { nombre: "Matías Rossi", telefono: "098151725", cupos: 2 },
"katherincuello": { nombre: "Katherin Cuello", telefono: "098117012", cupos: 1 },
"rominaramirez": { nombre: "Romina Ramirez", telefono: "098495993", cupos: 1 },
"lucasfurtado": { nombre: "Lucas Furtado", telefono: "091037554", cupos: 1 },
"federicorobledo": { nombre: "Federico Robledo", telefono: "091916928", cupos: 1 },
"alanolivera": { nombre: "Alan Olivera", telefono: "099354863", cupos: 1 },
"antonelladasilveira": { nombre: "Antonella da Silveira", telefono: "092643421", cupos: 1 },
"antonellaperezini": { nombre: "Antonella Perezini", telefono: "092957006", cupos: 1 },
"anthonelamachado": { nombre: "Anthonela Machado", telefono: "59043122", cupos: 1 },
"pilarsosa": { nombre: "Pilar Sosa", telefono: "099411650", cupos: 1 },
"brunoprofumo": { nombre: "Bruno Profumo", telefono: "094464735", cupos: 1 },
"ceciliacruz": { nombre: "Cecilia Cruz", telefono: "099776241", cupos: 1 },
"evaandrade": { nombre: "Eva Andrade", telefono: "092906148", cupos: 1 },
"beatrizandrade": { nombre: "Beatriz Andrade", telefono: "091361059", cupos: 1 },
"antonellaprestes": { nombre: "Antonella Prestes", telefono: "58070833", cupos: 1 },
"camilagarcia": { nombre: "Camila García", telefono: "098126821", cupos: 1 },
"natachamickaely": { nombre: "Natacha Mickaely", telefono: "092443936", cupos: 1 },
    "makinsondossantos": { nombre: "Makinson dos Santos", telefono: "095608348", cupos: 1 },
    "sandradossantos": { nombre: "Sandra dos Santos", telefono: "096112224", cupos: 2 },
    "fanygomez": { nombre: "Fany Gomez", telefono: "097929465", cupos: 1 },
    "mirthagomez": { nombre: "Mirtha Gomez", telefono: "098265107", cupos: 1 },
    "mirianlemos": { nombre: "Mirian Lemos", telefono: "091960397", cupos: 3 },
    "claudialemos": { nombre: "Claudia Lemos", telefono: "84376566", cupos: 5 },
    "teresalemos": { nombre: "Teresa Lemos", telefono: "095025208", cupos: 1 },
    "nellylemos": { nombre: "Nelly Lemos", telefono: "094169819", cupos: 2 },
    "isabellemos": { nombre: "Isabel Lemos", telefono: "99119520", cupos: 2 },
    "marcialemos": { nombre: "Marcia Lemos", telefono: "91935095", cupos: 2 },
    "gustavolemos": { nombre: "Gustavo Lemos", telefono: "099195234", cupos: 5 },
    "hugolemos": { nombre: "Hugo Lemos", telefono: "091502299", cupos: 4 },
    "yanelemos": { nombre: "Yane Lemos", telefono: "099795888", cupos: 3 },
    "mireyalemos": { nombre: "Mireya Lemos", telefono: "091649145", cupos: 1 },
    "cecilialemos": { nombre: "Cecilia Lemos", telefono: "098864994", cupos: 3 },
    "rosanaramos": { nombre: "Rosana Ramos", telefono: "099526255", cupos: 5 },
    "carinaramos": { nombre: "Carina Ramos", telefono: "099751723", cupos: 3 },
    "fanyalmeida": { nombre: "Fany Almeida", telefono: "099932002", cupos: 2 },
    "irisalmeida": { nombre: "Iris Almeida", telefono: "091551702", cupos: 3 },
    "leticiagutierrez": { nombre: "Leticia Gutierrez", telefono: "097194792", cupos: 6 },
    "gustavomello": { nombre: "Gustavo Mello", telefono: "99754570", cupos: 5 },
    "tamaramello": { nombre: "Tamara Mello", telefono: "093876979", cupos: 4 },
    "deliairigaray": { nombre: "Delia Irigaray", telefono: "097038076", cupos: 2 },
    "soniafigueroa": { nombre: "Sonia Figueroa", telefono: "095511703", cupos: 2 },
    "jazminrivero": { nombre: "Jazmin Rivero", telefono: "098062436", cupos: 3 },
    "lorenawilkins": { nombre: "Lorena Wilkins", telefono: "094971599", cupos: 5 },
    "marciarodriguez": { nombre: "Marcia Rodríguez", telefono: "095608377", cupos: 5 },
    "naraolivera": { nombre: "Nara Olivera", telefono: "093363063", cupos: 2 },
    "marlenribeiro": { nombre: "Marlene Ribeiro", telefono: "97037194", cupos: 2 },
    "mariapereira": { nombre: "María Pereira", telefono: "91756940", cupos: 1 },
    "patriciapereira": { nombre: "Patricia Pereira", telefono: "099888693", cupos: 2 },
    "jorgebuere": { nombre: "Jorge Buere", telefono: "099601717", cupos: 1 },
    "emanuelmorales": { nombre: "Emanuel Morales", telefono: "098861371", cupos: 1 },
    "celiadarosa": { nombre: "Celia da Rosa", telefono: "091324955", cupos: 1 },
    "flaviavieira": { nombre: "Flavia Vieira", telefono: "092988314", cupos: 1 },
    "elisaarriola": { nombre: "Elisa Arriola", telefono: "095753429", cupos: 1 },
    "isaurafrias": { nombre: "Isaura Frías", telefono: "46223641", cupos: 1 },
    "biancarodriguez": { nombre: "Bianca Rodríguez", telefono: "092789970", cupos: 1 },
    "albertomoreno": { nombre: "Alberto Moreno", telefono: "098743203", cupos: 1 },
    "fernandavalbuena": { nombre: "Fernanda Valbuena", telefono: "091208406", cupos: 3 }
    
    
};

const CLAVE_ADMIN = "Luciana15"; // Cambia esto por tu contraseña
const url = "https://script.google.com/macros/s/AKfycbyMwyeXiQjHego6wD38u3Ssc5oYo5t2fc1EpG1Rj5JM0ZsSV0DySYFbQPpt7TN7UgI5/exec"; // URL del Web App
  
// Función para buscar el invitado por nombre o teléfono
function buscarInvitado(event) {
    event.preventDefault();
    const input = document.getElementById("nombre").value.trim();
    if (input === "") {
      alert("Por favor, ingrese su nombre o teléfono.");
      return;
    }
    let invitadoEncontrado = null;
    for (let clave in invitados) {
      if (invitados[clave].telefono === input || clave === input) {
        invitadoEncontrado = invitados[clave];
        break;
      }
    }
    if (invitadoEncontrado) {
      localStorage.setItem("nombre", invitadoEncontrado.nombre);
      localStorage.setItem("cupos", invitadoEncontrado.cupos);
      // Ocultar la página 1 y mostrar la página 2
      document.getElementById("pagina1").style.display = "none";
      document.getElementById("pagina2").style.display = "block";
      // Actualizar saludo y mensaje de cupos en el contenedor extra
      document.getElementById("nombreInvitado").textContent = invitadoEncontrado.nombre;
      document.getElementById("cupos").textContent = "Tienes disponibles " + invitadoEncontrado.cupos + " lugares.";
    } else {
      alert("Nombre o teléfono no encontrado en la lista de invitados, intente nuevamente.");
    }
}
  
// Función para mostrar u ocultar el contenedor extra según la selección
function actualizarCampos() {
  const asistenciaElem = document.querySelector('input[name="asistencia"]:checked');
  const extras = document.getElementById("extras");
  const mensajeNo = document.getElementById("mensajeNo"); // Contenedor de mensaje para "No"

  if (asistenciaElem) {
    if (asistenciaElem.value === "si") {
      extras.style.display = "block";
      mensajeNo.style.display = "none"; // Ocultar mensaje si se selecciona "Sí"
    } else if (asistenciaElem.value === "no") {
      extras.style.display = "none"; // Ocultar campos extra si se selecciona "No"
      mensajeNo.style.display = "block"; // Mostrar el campo de mensaje
    }
  }
}
  
// Función para guardar la confirmación de asistencia y enviar a Google Sheets
function guardarConfirmacion(event) {
  event.preventDefault();
  const asistenciaElem = document.querySelector('input[name="asistencia"]:checked');
  if (!asistenciaElem) {
    alert("Por favor, indique si asistirá o no.");
    return;
  }
  const asistencia = asistenciaElem.value;
  const nombre = localStorage.getItem("nombre");
  let lugares = 0;
  if (asistencia === "si") {
    lugares = parseInt(document.getElementById("lugaresConfirmados").value);
    const cuposDisponibles = parseInt(localStorage.getItem("cupos"));
    if (isNaN(lugares) || lugares < 1 || lugares > cuposDisponibles) {
      alert("No puede confirmar más lugares de los asignados.");
      return;
    }
  }

  // Obtenemos el mensaje si seleccionó "No"
  const mensaje = asistencia === "no" ? document.getElementById("mensajeQuinceañera").value : '';

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre: nombre,
      asistencia: asistencia,
      lugaresConfirmados: lugares,
      mensaje: mensaje // Enviar el mensaje si "No" fue seleccionado
    })
  }).then(() => {
    const mensajeGracias = document.getElementById("mensajeGracias");
    const detalleGracias = document.getElementById("detalleGracias");
    if (asistencia === "si") {
      mensajeGracias.textContent = "Gracias por confirmar tu presencia.";
      detalleGracias.textContent = "¡Nos vemos en mis quince años!";
    } else {
      mensajeGracias.textContent = "Lamento que no puedas asistir.";
      detalleGracias.textContent = "Espero verte en otra ocasión. ¡Gracias por avisarme!";
    }

    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina4").style.display = "block";
  }).catch(error => console.error("Error:", error));
}
  
// Asignar eventos a los botones y a los radio inputs
document.getElementById("continuarBtn").addEventListener("click", buscarInvitado);
document.getElementById("confirmarBtn").addEventListener("click", guardarConfirmacion);
document.querySelectorAll('input[name="asistencia"]').forEach(input => {
  input.addEventListener("change", actualizarCampos);
});
