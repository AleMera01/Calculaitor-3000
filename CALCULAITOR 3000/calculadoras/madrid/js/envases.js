// envases.js
// Tarifas de envases — Comunidad de Madrid 2025

const envases = {
  "Envases para formas farmacéuticas líquidas": 0.90,
  "Envases cuenta gotas para formas farmacéuticas líquidas": 1.00,
  "Envases para formas farmacéuticas semisólidas": 1.25,
  "Envases para formas farmacéuticas sólidas": 1.25,
  "Vial (inyectables)": 0.70,
  "Ampolla (5 ml)": 0.38,
  "Frasco estéril (colirios)": 0.70,
  "Molde para supositorio": 1.25,
  "Molde para óvulos": 1.25
};

function agregarEnvase() {
  const container = document.getElementById("envasesContainer");
  const div = document.createElement("div");
  div.className = "envase-item";
  div.innerHTML = `
    <select class="envase-tipo">
      <option value="">-- Selecciona envase --</option>
    </select>
    <input type="number" class="envase-cantidad" placeholder="Cantidad" min="1" step="1">
    <span class="precio"></span>
  `;
  container.appendChild(div);

  // Rellenar select
  const select = div.querySelector("select");
  for (let tipo in envases) {
    const option = document.createElement("option");
    option.value = tipo;
    option.textContent = tipo;
    select.appendChild(option);
  }

  // Eventos para recalcular
  div.querySelectorAll("select, input").forEach(el => {
    el.addEventListener("input", calcular);
    el.addEventListener("change", calcular);
  });
}

function calcularEnvase() {
  let total = 0;
  document.querySelectorAll(".envase-item").forEach(item => {
    const tipo = item.querySelector(".envase-tipo").value;
    const cantidad = parseFloat(item.querySelector(".envase-cantidad").value) || 0;
    if (tipo && cantidad > 0 && envases[tipo]) {
      const precio = cantidad * envases[tipo];
      item.querySelector(".precio").innerText = "= €" + precio.toFixed(2);
      total += precio;
    } else {
      item.querySelector(".precio").innerText = "";
    }
  });
  document.getElementById("totalEnvase").innerText = "Total Envase: €" + total.toFixed(2);
  return total;
}
