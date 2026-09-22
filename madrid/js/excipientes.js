// excipientes.js
// 📌 Tarifas de excipientes — Comunidad de Madrid 2025
// Los precios están expresados en €/100 ml (o fracción), €/100 g o €/unidad según corresponda.

const excipientes = {
  "SOLUCIONES Y SUSPENSIONES ESTÉRILES": { tipo: "volumen", precio: 0.35, unidad: 10 },   // €/10 ml
  "SOLUCIONES Y SUSPENSIONES NO ESTÉRILES (ACUOSAS, excepto jarabes)": { tipo: "volumen", precio: 0.63, unidad: 100 }, // €/100 ml
  "SOLUCIONES Y SUSPENSIONES NO ESTÉRILES (HIDROALCOHÓLICAS y otras no acuosas)": { tipo: "volumen", precio: 2.01, unidad: 100 }, // €/100 ml
  "SOLUCIONES Y SUSPENSIONES NO ESTÉRILES (OLEOSAS)": { tipo: "volumen", precio: 2.22, unidad: 100 }, // €/100 ml
  "JARABES": { tipo: "volumen", precio: 1.85, unidad: 100 }, // €/100 ml
  "PASTAS Y POMADAS ANHIDRAS": { tipo: "peso", precio: 1.34, unidad: 100 }, // €/100 g
  "EMULSIONES Y GELES (excepto colodiones)": { tipo: "volumen", precio: 1.87, unidad: 100 }, // €/100 ml
  "POLVOS Y GRANULADOS": { tipo: "peso", precio: 0.69, unidad: 100 }, // €/100 g
  "SUPOSITORIOS, ÓVULOS, LABIALES Y BARRAS": { tipo: "unidad", precio: 0.04, unidad: 1 }, 
"CAPSULAS": { tipo: "unidad", precio: 0.03, unidad: 1 }

};

// ---------------------------
// Función para calcular el coste de excipiente
// ---------------------------
function calcularExcipiente(tipo, cantidad) {
  if (!excipientes[tipo] || cantidad <= 0) return 0;
  const { precio, unidad } = excipientes[tipo];

  // Se cobra por fracción de unidad (redondeo hacia arriba)
  const fracciones = Math.ceil(cantidad / unidad);

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

  // rellenar select con claves del objeto excipientes
  Object.keys(excipientes).forEach(nombre => {
    const opt = document.createElement("option");
    opt.value = nombre;
    opt.textContent = nombre;
    div.querySelector("select").appendChild(opt);
  });

  // recalcular en cada cambio
  div.querySelectorAll("select, input").forEach(el => {
    el.addEventListener("input", calcular);
    el.addEventListener("change", calcular);
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