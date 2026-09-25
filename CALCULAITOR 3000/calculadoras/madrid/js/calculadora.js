// ====================================================
// CALCULADORA MADRID
// Une principios activos + excipientes + envases
// + honorarios + IVA 4 %
// ====================================================

const IVA_MEDICAMENTOS = 0.04;


// ====================================================
// CÁLCULO GENERAL
// ====================================================

function calcular() {

  // 1. Principios activos
  const principios =
    typeof calcularTotalesPrincipioActivo === "function"
      ? calcularTotalesPrincipioActivo()
      : 0;

  // 2. Excipientes
  const excipientes =
    typeof calcularExcipientes === "function"
      ? calcularExcipientes()
      : 0;

  // 3. Envases
  const envases =
    typeof calcularEnvase === "function"
      ? calcularEnvase()
      : 0;

  // 4. Honorarios Madrid
 // Honorarios
let honorarios = 0;

if (typeof calcularHonorariosCorregidos === "function") {
  calcularHonorariosCorregidos();
}

// Tomamos el valor que la función de honorarios
// acaba de calcular y mostrar en pantalla
const textoHonorarios =
  document.getElementById("totalHonorarios")?.innerText || "";

const numeroHonorarios =
  textoHonorarios.match(/[\d.,]+/);

if (numeroHonorarios) {
  honorarios = parseFloat(
    numeroHonorarios[0].replace(",", ".")
  ) || 0;
}


  // ==================================================
  // SUBTOTAL
  // ==================================================

  const subtotal =
    principios +
    excipientes +
    envases +
    honorarios;


  // ==================================================
  // IVA 4 %
  // ==================================================

  const iva =
    subtotal * IVA_MEDICAMENTOS;


  // ==================================================
  // TOTAL GENERAL
  // ==================================================

  const total =
    subtotal + iva;


  // ==================================================
  // ACTUALIZAR PANEL DERECHO
  // ==================================================

  const elementoTotal =
    document.getElementById("totalGeneral");

  if (elementoTotal) {
    elementoTotal.innerText =
      "💶 Total General: €" + total.toFixed(2);
  }


  const sumHonorarios =
    document.getElementById("sumHonorarios");

  if (sumHonorarios) {
    sumHonorarios.innerText =
      "€" + honorarios.toFixed(2);
  }


  const sumPrincipios =
    document.getElementById("sumPrincipios");

  if (sumPrincipios) {
    sumPrincipios.innerText =
      "€" + principios.toFixed(2);
  }


  const sumExcipientes =
    document.getElementById("sumExcipientes");

  if (sumExcipientes) {
    sumExcipientes.innerText =
      "€" + excipientes.toFixed(2);
  }


  const sumEnvases =
    document.getElementById("sumEnvases");

  if (sumEnvases) {
    sumEnvases.innerText =
      "€" + envases.toFixed(2);
  }


  const subtotalElemento =
    document.getElementById("subtotal");

  if (subtotalElemento) {
    subtotalElemento.innerText =
      "€" + subtotal.toFixed(2);
  }


  const ivaElemento =
    document.getElementById("iva");

  if (ivaElemento) {
    ivaElemento.innerText =
      "€" + iva.toFixed(2);
  }


  return total;
}


// ====================================================
// REINICIAR FORMULARIO
// ====================================================

function reiniciar() {

  if (!confirm("¿Seguro que quieres reiniciar la calculadora?")) {
    return;
  }


  // ----------------------------------------------
  // Principios activos
  // ----------------------------------------------

  const principiosContainer =
    document.getElementById("principiosActivosContainer");

  if (principiosContainer) {

    principiosContainer.innerHTML = "";

    if (typeof agregarActivo === "function") {
      agregarActivo();
    }

  }


  // ----------------------------------------------
  // Excipientes
  // ----------------------------------------------

  const excipientesContainer =
    document.getElementById("excipientesContainer");

  if (excipientesContainer) {

    excipientesContainer.innerHTML = "";

    if (typeof agregarExcipiente === "function") {
      agregarExcipiente();
    }

  }


  // ----------------------------------------------
  // Envases
  // ----------------------------------------------

  const envasesContainer =
    document.getElementById("envasesContainer");

  if (envasesContainer) {

    envasesContainer.innerHTML = "";

    if (typeof agregarEnvase === "function") {
      agregarEnvase();
    }

  }


  // ----------------------------------------------
  // Totales individuales
  // ----------------------------------------------

  const totalPrincipio =
    document.getElementById("totalPrincipioActivo");

  if (totalPrincipio) {
    totalPrincipio.innerText =
      "Total Principio Activo: €0.00";
  }


  const totalExcipiente =
    document.getElementById("totalExcipiente");

  if (totalExcipiente) {
    totalExcipiente.innerText =
      "Total Excipiente: €0.00";
  }


  const totalEnvase =
    document.getElementById("totalEnvase");

  if (totalEnvase) {
    totalEnvase.innerText =
      "Total Envase: €0.00";
  }


  const totalHonorarios =
    document.getElementById("totalHonorarios");

  if (totalHonorarios) {
    totalHonorarios.innerText =
      "Total Honorarios: €0.00";
  }


  // ----------------------------------------------
  // Panel derecho
  // ----------------------------------------------

  const totalGeneral =
    document.getElementById("totalGeneral");

  if (totalGeneral) {
    totalGeneral.innerText =
      "💶 Total General: €0.00";
  }


  const sumHonorarios =
    document.getElementById("sumHonorarios");

  if (sumHonorarios) {
    sumHonorarios.innerText = "€0.00";
  }


  const sumPrincipios =
    document.getElementById("sumPrincipios");

  if (sumPrincipios) {
    sumPrincipios.innerText = "€0.00";
  }


  const sumExcipientes =
    document.getElementById("sumExcipientes");

  if (sumExcipientes) {
    sumExcipientes.innerText = "€0.00";
  }


  const sumEnvases =
    document.getElementById("sumEnvases");

  if (sumEnvases) {
    sumEnvases.innerText = "€0.00";
  }


  const subtotal =
    document.getElementById("subtotal");

  if (subtotal) {
    subtotal.innerText = "€0.00";
  }


  const iva =
    document.getElementById("iva");

  if (iva) {
    iva.innerText = "€0.00";
  }


  // ----------------------------------------------
  // Limpiar buscador de preparadas
  // ----------------------------------------------

  const codigoPreparada =
    document.getElementById("codigoPreparada");

  if (codigoPreparada) {
    codigoPreparada.value = "";
  }


  const resultadoPreparada =
    document.getElementById("resultadoPreparada");

  if (resultadoPreparada) {
    resultadoPreparada.innerHTML = "";
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


  const codigoElemento =
    document.getElementById("codigoPreparada");

  const resultado =
    document.getElementById("resultadoPreparada");


  if (!codigoElemento || !resultado) {
    return;
  }


  const codigo =
    codigoElemento.value.trim();


  if (codigo === "") {

    resultado.innerHTML = "";

    return;
  }


  if (preparadasMadrid[codigo]) {

    const f =
      preparadasMadrid[codigo];


    resultado.innerHTML = `
      <div style="
        padding:10px;
        border:1px solid #0a8;
        border-radius:8px;
        background:#eefdf7;
      ">

        <div>
          <b>Código:</b> ${codigo}
        </div>

        <div>
          <b>Fórmula:</b> ${f.nombre}
        </div>

        <div style="
          margin-top:8px;
          font-size:20px;
          color:darkgreen;
        ">

          💶 <b>
            ${f.precio.toFixed(2).replace(".", ",")} €
          </b>

        </div>

      </div>
    `;

  } else {

    resultado.innerHTML = `
      <div style="
        padding:10px;
        border:1px solid red;
        border-radius:8px;
        background:#fff0f0;
        color:red;
      ">

        ❌ Código no encontrado.

      </div>
    `;

  }

}


// ====================================================
// ENTER EN BUSCADOR
// ====================================================

document.addEventListener("keydown", function(e) {

  if (
    e.key === "Enter" &&
    document.activeElement &&
    document.activeElement.id === "codigoPreparada"
  ) {

    e.preventDefault();

    buscarPreparada();

  }

});


// ====================================================
// CÁLCULO AUTOMÁTICO
// ====================================================

document.addEventListener("input", calcular);

document.addEventListener("change", calcular);


// ====================================================
// BOTÓN REINICIAR
// ====================================================

document.addEventListener("DOMContentLoaded", function() {

  const reset =
    document.getElementById("reset");

  if (reset) {

    reset.addEventListener(
      "click",
      reiniciar
    );

  }

});


// ====================================================
// INICIALIZACIÓN
// ====================================================

window.addEventListener("load", function() {

  if (typeof agregarActivo === "function") {
    agregarActivo();
  }

  if (typeof agregarExcipiente === "function") {
    agregarExcipiente();
  }

  if (typeof agregarEnvase === "function") {
    agregarEnvase();
  }

  calcular();

});