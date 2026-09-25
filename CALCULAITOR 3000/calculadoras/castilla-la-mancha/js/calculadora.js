// ============================================================
// CALCULADORA CASTILLA-LA MANCHA
// ============================================================

const IVA_MEDICAMENTOS = 0.04;


// ------------------------------------------------------------
// FORMATO MONETARIO
// ------------------------------------------------------------

function euro(n) {

  const valor = Number(n);

  if (!Number.isFinite(valor)) {
    return "0,00 €";
  }

  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR"
  }).format(valor);

}


// ------------------------------------------------------------
// CALCULAR
// ------------------------------------------------------------

function calcular() {

  let principios = 0;
  let excipientes = 0;
  let envases = 0;
  let honorarios = 0;


  // ----------------------------------------------------------
  // PRINCIPIOS ACTIVOS
  // ----------------------------------------------------------

  if (typeof calcularPrincipios === "function") {

    const resultado = calcularPrincipios();

    principios = Number(resultado);

    if (!Number.isFinite(principios)) {
      principios = 0;
    }

  }


  // ----------------------------------------------------------
  // EXCIPIENTES
  // ----------------------------------------------------------

  if (typeof calcularExcipientes === "function") {

    const resultado = calcularExcipientes();

    excipientes = Number(resultado);

    if (!Number.isFinite(excipientes)) {
      excipientes = 0;
    }

  }


  // ----------------------------------------------------------
  // ENVASES
  // ----------------------------------------------------------

  if (typeof calcularEnvase === "function") {

    const resultado = calcularEnvase();

    envases = Number(resultado);

    if (!Number.isFinite(envases)) {
      envases = 0;
    }

  }


  // ----------------------------------------------------------
  // HONORARIOS
  // ----------------------------------------------------------

  if (typeof calcularHonorarios === "function") {

    const resultado = calcularHonorarios();

    honorarios = Number(resultado);

    if (!Number.isFinite(honorarios)) {
      honorarios = 0;
    }

  }


  // ----------------------------------------------------------
  // SUBTOTAL
  // ----------------------------------------------------------

  const subtotal =
    principios +
    excipientes +
    envases +
    honorarios;


  // ----------------------------------------------------------
  // IVA 4 %
  // ----------------------------------------------------------

  const iva =
    subtotal * IVA_MEDICAMENTOS;


  // ----------------------------------------------------------
  // TOTAL GENERAL
  // ----------------------------------------------------------

  const total =
    subtotal + iva;


  // ----------------------------------------------------------
  // PANEL DERECHO
  // ----------------------------------------------------------

  const totalGeneral =
    document.getElementById("totalGeneral");

  if (totalGeneral) {
    totalGeneral.textContent = euro(total);
  }


  const sumHonorarios =
    document.getElementById("sumHonorarios");

  if (sumHonorarios) {
    sumHonorarios.textContent = euro(honorarios);
  }


  const sumPrincipios =
    document.getElementById("sumPrincipios");

  if (sumPrincipios) {
    sumPrincipios.textContent = euro(principios);
  }


  const sumExcipientes =
    document.getElementById("sumExcipientes");

  if (sumExcipientes) {
    sumExcipientes.textContent = euro(excipientes);
  }


  const sumEnvases =
    document.getElementById("sumEnvases");

  if (sumEnvases) {
    sumEnvases.textContent = euro(envases);
  }


  // ----------------------------------------------------------
  // SUBTOTAL
  // ----------------------------------------------------------

  const sumSubtotal =
    document.getElementById("sumSubtotal");

  if (sumSubtotal) {
    sumSubtotal.textContent = euro(subtotal);
  }


  // ----------------------------------------------------------
  // IVA
  // ----------------------------------------------------------

  const sumIva =
    document.getElementById("sumIva");

  if (sumIva) {
    sumIva.textContent = euro(iva);
  }


  // ----------------------------------------------------------
  // TOTAL
  // ----------------------------------------------------------

  const sumTotal =
    document.getElementById("sumTotal");

  if (sumTotal) {
    sumTotal.textContent = euro(total);
  }


  return total;

}


// ------------------------------------------------------------
// REINICIAR
// ------------------------------------------------------------

function reiniciar() {

  if (
    !confirm(
      "¿Seguro que quieres reiniciar la calculadora?"
    )
  ) {
    return;
  }


  // PRINCIPIOS

  const principiosContainer =
    document.getElementById(
      "principiosActivosContainer"
    );

  if (principiosContainer) {

    principiosContainer.innerHTML = "";

    if (
      typeof agregarPrincipioActivo ===
      "function"
    ) {

      agregarPrincipioActivo();

    }

  }


  // EXCIPIENTES

  const excipientesContainer =
    document.getElementById(
      "excipientesContainer"
    );

  if (excipientesContainer) {

    excipientesContainer.innerHTML = "";

    if (
      typeof agregarExcipiente ===
      "function"
    ) {

      agregarExcipiente();

    }

  }


  // ENVASES

  const envasesContainer =
    document.getElementById(
      "envasesContainer"
    );

  if (envasesContainer) {

    envasesContainer.innerHTML = "";

    if (
      typeof agregarEnvase ===
      "function"
    ) {

      agregarEnvase();

    }

  }


  // CANTIDAD

  const cantidad =
    document.getElementById("cantidad");

  if (cantidad) {
    cantidad.value = "";
  }


  // TOTALES INDIVIDUALES

  const totalPrincipioActivo =
    document.getElementById(
      "totalPrincipioActivo"
    );

  if (totalPrincipioActivo) {

    totalPrincipioActivo.textContent =
      "Total Principio Activo: €0.00";

  }


  const totalExcipiente =
    document.getElementById(
      "totalExcipiente"
    );

  if (totalExcipiente) {

    totalExcipiente.textContent =
      "Total Excipiente: €0.00";

  }


  const totalEnvase =
    document.getElementById(
      "totalEnvase"
    );

  if (totalEnvase) {

    totalEnvase.textContent =
      "Total Envase: €0.00";

  }


  const totalHonorarios =
    document.getElementById(
      "totalHonorarios"
    );

  if (totalHonorarios) {

    totalHonorarios.textContent =
      "Total Honorarios: €0.00";

  }


  // PANEL DERECHO

  const ids = [
    "totalGeneral",
    "sumHonorarios",
    "sumPrincipios",
    "sumExcipientes",
    "sumEnvases",
    "sumSubtotal",
    "sumIva",
    "sumTotal"
  ];


  ids.forEach(function(id) {

    const elemento =
      document.getElementById(id);

    if (elemento) {

      elemento.textContent =
        "€0.00";

    }

  });


  // BÚSQUEDA

  const codigo =
    document.getElementById(
      "codigoPreparada"
    );

  if (codigo) {
    codigo.value = "";
  }


  const resultadoPreparada =
    document.getElementById(
      "resultadoPreparada"
    );

  if (resultadoPreparada) {
    resultadoPreparada.innerHTML = "";
  }


  calcular();

}


// ------------------------------------------------------------
// BUSCAR FÓRMULA TIPIFICADA
// ------------------------------------------------------------

function buscarPreparada() {

  if (
    typeof preparadasCLM ===
    "undefined"
  ) {

    alert(
      "No se ha cargado pretasadas.js"
    );

    return;

  }


  const campo =
    document.getElementById(
      "codigoPreparada"
    );


  const resultado =
    document.getElementById(
      "resultadoPreparada"
    );


  if (!campo || !resultado) {
    return;
  }


  const codigo =
    campo.value.trim();


  if (codigo === "") {

    resultado.innerHTML = "";

    return;

  }


  const formula =
    preparadasCLM[codigo];


  if (!formula) {

    resultado.innerHTML = `

      <div
        class="prep-box"
        style="
          color:#b91c1c;
          font-weight:700;
        "
      >

        ❌ Código no encontrado.

      </div>

    `;

    return;

  }


  resultado.innerHTML = `

    <div class="prep-box">

      <div class="prep-title">
        ${formula.nombre}
      </div>


      <div class="line">

        <span>
          Principios activos
        </span>

        <strong>
          ${euro(formula.principios)}
        </strong>

      </div>


      <div class="line">

        <span>
          Excipientes
        </span>

        <strong>
          ${euro(formula.excipientes)}
        </strong>

      </div>


      <div class="line">

        <span>
          Envase
        </span>

        <strong>
          ${euro(formula.envase)}
        </strong>

      </div>


      <div class="line">

        <span>
          Honorarios
        </span>

        <strong>
          ${euro(formula.honorarios)}
        </strong>

      </div>


      <div class="line prep-total">

        <span>
          <strong>
            Total
          </strong>
        </span>

        <strong
          style="
            color:#166534;
            font-size:18px;
          "
        >

          ${euro(formula.total)}

        </strong>

      </div>


    </div>

  `;

}


// ------------------------------------------------------------
// EVENTOS
// ------------------------------------------------------------

document.addEventListener(
  "input",
  function() {
    calcular();
  }
);


document.addEventListener(
  "change",
  function() {
    calcular();
  }
);


// ------------------------------------------------------------
// ENTER EN CÓDIGO
// ------------------------------------------------------------

document.addEventListener(
  "keydown",
  function(e) {

    if (e.key !== "Enter") {
      return;
    }


    const campo =
      document.getElementById(
        "codigoPreparada"
      );


    if (
      campo &&
      document.activeElement === campo
    ) {

      e.preventDefault();

      buscarPreparada();

    }

  }
);


// ------------------------------------------------------------
// CARGA INICIAL
// ------------------------------------------------------------

document.addEventListener(
  "DOMContentLoaded",
  function() {


    // BOTÓN BUSCAR

    const botonBuscar =
      document.getElementById(
        "buscarPreparada"
      );


    if (botonBuscar) {

      botonBuscar.addEventListener(
        "click",
        buscarPreparada
      );

    }


    // BOTÓN REINICIAR

    const botonReset =
      document.getElementById(
        "reset"
      );


    if (botonReset) {

      botonReset.addEventListener(
        "click",
        reiniciar
      );

    }


    // PRINCIPIOS

    if (
      typeof agregarPrincipioActivo ===
      "function"
    ) {

      agregarPrincipioActivo();

    }


    // EXCIPIENTES

    if (
      typeof agregarExcipiente ===
      "function"
    ) {

      agregarExcipiente();

    }


    // ENVASES

    if (
      typeof agregarEnvase ===
      "function"
    ) {

      agregarEnvase();

    }


    calcular();

  }
);