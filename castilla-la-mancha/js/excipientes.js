// excipientes_cm.js
// 📌 Tarifas de excipientes — Castilla-La Mancha 2025
// Los precios están expresados en €/100 ml (o fracción), €/100 g o €/unidad según corresponda.

var excipientesCM = {
  "SOLUCIONES Y SUSPENSIONES ESTÉRILES": { tipo: "volumen", precio: 0.45, unidad: 10 }, // €/10 ml
  "SOLUCIONES Y SUSPENSIONES NO ESTÉRILES (ACUOSAS, excepto jarabes)": { tipo: "volumen", precio: 0.83, unidad: 100 }, // €/100 ml
  "SOLUCIONES Y SUSPENSIONES NO ESTÉRILES (HIDROALCOHÓLICAS)": { tipo: "volumen", precio: 2.78, unidad: 100 }, // €/100 ml
  "SOLUCIONES Y SUSPENSIONES NO ESTÉRILES (NO ACUOSAS)": { tipo: "volumen", precio: 2.78, unidad: 100 }, // €/100 ml
  "JARABES (CON O SIN AZÚCAR)": { tipo: "volumen", precio: 2.60, unidad: 100 }, // €/100 ml
  "PASTAS Y POMADAS ANHIDRAS": { tipo: "peso", precio: 1.86, unidad: 100 }, // €/100 g
  "EMULSIONES Y GELES (excepto colodiones)": { tipo: "volumen", precio: 2.60, unidad: 100 }, // €/100 ml
  "POLVOS Y GRANULADOS": { tipo: "peso", precio: 0.93, unidad: 100 }, // €/100 g
  "SUPOSITORIOS Y ÓVULOS": { tipo: "unidad", precio: 0.05, unidad: 1 }, // €/unidad
  "CÁPSULAS ENTÉRICAS": { tipo: "unidad", precio: 0.05, unidad: 1 }, // €/unidad
  "CÁPSULAS": { tipo: "unidad", precio: 0.01, unidad: 1 } // €/unidad
};

// ---------------------------
// Función para calcular el coste de excipiente
// ---------------------------
function calcularExcipiente(tipo, cantidad) {
  if (!excipientesCM[tipo] || cantidad <= 0) return 0;
  const { precio, unidad } = excipientesCM[tipo];
  const fracciones = Math.ceil(cantidad / unidad); // Se cobra por fracción de unidad
  return fracciones * precio;
}

// ---------------------------
// Generar dinámicamente los selectores en el HTML
// ---------------------------
function agregarExcipiente() {
  const container = document.getElementById("excipientesContainer");
  const div = document.createElement("div");
  div.className = "excipiente-item";
  div.innerHTML = `
    <select class="excipiente-tipo">
      <option value="">-- Selecciona excipiente --</option>
    </select>
    <input type="number" class="excipiente-cantidad" placeholder="Cantidad (ml, g o unidades)" min="0" step="1">
    <span class="precio"></span>
  `;
  container.appendChild(div);

  Object.keys(excipientesCM).forEach(nombre => {
    const opt = document.createElement("option");
    opt.value = nombre;
    opt.textContent = nombre;
    div.querySelector("select").appendChild(opt);
  });

  div.querySelectorAll("select, input").forEach(el => {
    el.addEventListener("input", calcularExcipientes);
    el.addEventListener("change", calcularExcipientes);
  });
}

function calcularExcipientes() {
  let total = 0;
  document.querySelectorAll(".excipiente-item").forEach(item => {
    const tipo = item.querySelector(".excipiente-tipo").value;
    const cantidad = parseFloat(item.querySelector(".excipiente-cantidad").value) || 0;
    if (tipo && cantidad > 0) {
      const precio = calcularExcipiente(tipo, cantidad);
      item.querySelector(".precio").innerText = "= €" + precio.toFixed(2);
      total += precio;
    } else {
      item.querySelector(".precio").innerText = "";
    }
  });
  document.getElementById("totalExcipiente").innerText = "Total Excipiente: €" + total.toFixed(2);
  return total;
}
