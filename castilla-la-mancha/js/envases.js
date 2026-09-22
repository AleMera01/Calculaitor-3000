// envases_cm.js
// 📌 Tarifas de envases — Castilla-La Mancha 2025

var envasesCM = {
  // FORMAS FARMACÉUTICAS LÍQUIDAS
  "Frasco plástico blanco opaco 50 cc": 0.70,
  "Frasco plástico blanco opaco 125 cc": 0.88,
  "Frasco plástico blanco opaco 250 cc": 0.92,
  "Frasco plástico topacio 30 cc": 0.76,
  "Frasco plástico topacio 60 cc": 1.14,
  "Frasco plástico topacio 125 cc": 1.17,
  "Frasco plástico topacio 250 cc": 1.45,
  "Frasco cristal topacio 30 cc": 0.76,
  "Frasco cristal topacio 60 cc": 0.80,
  "Frasco cristal topacio 125 cc": 0.91,
  "Frasco cristal topacio 250 cc": 1.33,

  // FORMAS FARMACÉUTICAS SEMISÓLIDAS
  "Envase de 20 cc (semisólidas)": 0.65,
  "Envase de 40 cc (semisólidas)": 0.80,
  "Envase de 60 cc (semisólidas)": 0.80,
  "Envase de 100 cc (semisólidas)": 0.93,
  "Envase de 120 cc (semisólidas)": 0.94,
  "Envase de 200 cc (semisólidas)": 1.11,
  "Molde 6 óvulos": 5.3845,

  // CÁPSULAS
  "Envase de 50 cápsulas": 0.87,
  "Envase de 100 cápsulas": 0.94,

  // INYECTABLES
  "Envase inyectable": 0.57,

  // COLIRIOS
  "Frasco estéril colirio": 1.20

};

// ---------------------------
// Función para agregar un selector de envase
// ---------------------------
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

  const select = div.querySelector("select");
  for (let tipo in envasesCM) {
    const option = document.createElement("option");
    option.value = tipo;
    option.textContent = tipo;
    select.appendChild(option);
  }

  div.querySelectorAll("select, input").forEach(el => {
    el.addEventListener("input", calcularEnvase);
    el.addEventListener("change", calcularEnvase);
  });
}

// ---------------------------
// Función para calcular el coste total de envases
// ---------------------------
function calcularEnvase() {
  let total = 0;
  document.querySelectorAll(".envase-item").forEach(item => {
    const tipo = item.querySelector(".envase-tipo").value;
    const cantidad = parseFloat(item.querySelector(".envase-cantidad").value) || 0;
    if (tipo && cantidad > 0 && envasesCM[tipo]) {
      const precio = cantidad * envasesCM[tipo];
      item.querySelector(".precio").innerText = "= €" + precio.toFixed(2);
      total += precio;
    } else {
      item.querySelector(".precio").innerText = "";
    }
  });
  document.getElementById("totalEnvase").innerText = "Total Envase: €" + total.toFixed(2);
  return total;
}
