// calculadora.js
// Une principios activos + excipientes + honorarios + envases en el total

function calcular() {
  let total = 0;

  // 1️⃣ Principios activos
  if (typeof calcularPrincipios === "function") {
    let principio = calcularPrincipios();
    total += isNaN(principio) ? 0 : principio;
  }

  // 2️⃣ Excipientes
  if (typeof calcularExcipientes === "function") {
    let excipiente = calcularExcipientes();
    total += isNaN(excipiente) ? 0 : excipiente;
  }

  // 3️⃣ Envases
  if (typeof calcularEnvase === "function") {
    let envase = calcularEnvase();
    total += isNaN(envase) ? 0 : envase;
  }

  // 4️⃣ Honorarios
  if (typeof calcularHonorarios === "function") {
    let honorarios = calcularHonorarios();
    total += isNaN(honorarios) ? 0 : honorarios;
  }

  // Mostrar total general
  document.getElementById("totalGeneral").innerText =
    "💶 Total General: €" + total.toFixed(2);
}


// ---------------------------
// Reiniciar formulario
// ---------------------------
function reiniciar() {
  if (confirm("¿Seguro que quieres reiniciar la calculadora?")) {

    // Principios activos
    document.getElementById("principiosContainer").innerHTML = "";
    if (typeof agregarActivo === "function") agregarActivo();

    // Excipientes
    document.getElementById("excipientesContainer").innerHTML = "";
    if (typeof agregarExcipiente === "function") agregarExcipiente();

    // Envases
    if (document.getElementById("envasesContainer")) {
      document.getElementById("envasesContainer").innerHTML = "";
      if (typeof agregarEnvase === "function") agregarEnvase();
    }

    // Totales
    document.getElementById("totalPrincipio").innerText =
      "Total Principios Activos: €0.00";

    document.getElementById("totalExcipiente").innerText =
      "Total Excipiente: €0.00";

    if (document.getElementById("totalEnvase")) {
      document.getElementById("totalEnvase").innerText =
        "Total Envase: €0.00";
    }

    if (document.getElementById("totalHonorarios")) {
      document.getElementById("totalHonorarios").innerText =
        "Total Honorarios: €0.00";
    }

    document.getElementById("totalGeneral").innerText =
      "💶 Total General: €0.00";

    // Limpiar búsqueda de preparadas
    if (document.getElementById("codigoPreparada")) {
      document.getElementById("codigoPreparada").value = "";
    }

    if (document.getElementById("resultadoPreparada")) {
      document.getElementById("resultadoPreparada").innerHTML = "";
    }
  }
}


// ====================================================
// BUSCADOR DE FÓRMULAS PREPARADAS
// ====================================================

function buscarPreparada() {

  if (typeof preparadasMadrid === "undefined") {
    alert("No se ha cargado preparadas.js");
    return;
  }

  const codigo = document
      .getElementById("codigoPreparada")
      .value
      .trim();

  const resultado = document.getElementById("resultadoPreparada");

  if (codigo === "") {
      resultado.innerHTML = "";
      return;
  }

  if (preparadasMadrid[codigo]) {

      const f = preparadasMadrid[codigo];

      resultado.innerHTML =
      `
      <div style="padding:10px;border:1px solid #0a8;border-radius:8px;background:#eefdf7;">
          <div><b>Código:</b> ${codigo}</div>
          <div><b>Fórmula:</b> ${f.nombre}</div>
          <div style="margin-top:8px;font-size:20px;color:darkgreen;">
              💶 <b>${f.precio.toFixed(2).replace(".", ",")} €</b>
          </div>
      </div>
      `;

  } else {

      resultado.innerHTML =
      `
      <div style="padding:10px;border:1px solid red;border-radius:8px;background:#fff0f0;color:red;">
          ❌ Código no encontrado.
      </div>
      `;
  }
}


// Buscar al pulsar ENTER
document.addEventListener("keydown", function(e){

    if(e.key==="Enter"){

        if(document.activeElement &&
           document.activeElement.id==="codigoPreparada"){

            e.preventDefault();
            buscarPreparada();

        }

    }

});


// ---------------------------
// Ejecutar cálculo automático en cada cambio
// ---------------------------
document.addEventListener("input", calcular);
document.addEventListener("change", calcular);


// Inicializar al cargar
window.onload = () => {

  if (typeof agregarActivo === "function") agregarActivo();
  if (typeof agregarExcipiente === "function") agregarExcipiente();
  if (typeof agregarEnvase === "function") agregarEnvase();

};