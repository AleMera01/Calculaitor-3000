// js/honorarios.js
// Cálculo de honorarios – Comunidad de Madrid 2026

const honorariosMadrid = {
  unidades: {
    "Colirios, pomadas oftálmicas": { max: 1, maxBase: 1, base: 29.20, extra: 0 },
    "Inyectables": { max: 25, maxBase: 10, base: 29.20, extra: 1.095 },
    "Inyectables suspensiones": { max: 25, maxBase: 10, base: 29.20, extra: 1.46 },
    "Óvulos, supositorios": { max: 25, maxBase: 10, base: 29.20, extra: 0.365 },
    "Papeles, sellos": { max: 50, maxBase: 10, base: 29.20, extra: 0.365 },
    "Grageas, píldoras": { max: 100, maxBase: 10, base: 29.20, extra: 0.365 },
    "Comprimidos": { max: 100, maxBase: 10, base: 29.20, extra: 0.365 },
    "Cápsulas": { max: 100, maxBase: 10, base: 18.25, extra: 0.365 },
    "Cápsulas gastrorresistentes": { max: 100, maxBase: 10, base: 29.20, extra: 0.365 }
  },
  gramos: {
    "Pastas, pomadas": { max: 250, maxBase: 100, base: 21.90, extra: 0.0365 },
    "Geles": { max: 250, maxBase: 100, base: 29.20, extra: 0.0365 },
    "Granulados, emulsiones": { max: 250, maxBase: 100, base: 29.20, extra: 0.04745 },
    "Polvos compuestos": { max: 250, maxBase: 100, base: 29.20, extra: 0.01095 },
    "Suspensiones": { max: 250, maxBase: 100, base: 18.25, extra: 0.02555 },
    "Soluciones estériles": { max: 1000, maxBase: 100, base: 29.20, extra: 0.01825 },
    "Soluciones, enemas": { max: 1000, maxBase: 100, base: 21.90, extra: 0.01825 }
  }
};

// IDs centralizados
const IDS = {
  forma: "forma",
  cantidad: "cantidad",
  total: "totalHonorarios",
  labelCantidad: "labelCantidad" // opcional
};

// --- Cargar select dinámico ---
function cargarFormasHonorariosMadrid() {
  const select = document.getElementById(IDS.forma);
  if (!select) return;

  select.innerHTML = '<option value="">-- Selecciona --</option>';

  const grupos = [
    { label: "Unidades", datos: honorariosMadrid.unidades },
    { label: "Gramos o ml", datos: honorariosMadrid.gramos }
  ];

  grupos.forEach(grupo => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = grupo.label;

    Object.keys(grupo.datos).forEach(forma => {
      const option = document.createElement("option");
      option.value = forma;
      option.textContent = forma;
      optgroup.appendChild(option);
    });

    select.appendChild(optgroup);
  });

  // Asociar eventos
  select.onchange = calcularHonorariosMadrid;
  document.getElementById(IDS.cantidad).oninput = calcularHonorariosMadrid;
}

// --- Cálculo de honorarios ---
function calcularHonorariosMadrid() {
  const forma = document.getElementById(IDS.forma).value;
  const cantidad = parseFloat(document.getElementById(IDS.cantidad).value) || 0;

  if (!forma || cantidad <= 0) {
    document.getElementById(IDS.total).innerText = "Total Honorarios: €0.00";
    return 0;
  }

  const datos =
    honorariosMadrid.unidades[forma] ||
    honorariosMadrid.gramos[forma];

  if (!datos) {
    document.getElementById(IDS.total).innerText = "Total Honorarios: €0.00";
    return 0;
  }

  const { max, maxBase, base, extra } = datos;

  // Etiqueta dinámica
  const label = document.getElementById(IDS.labelCantidad);
  if (label) {
    label.innerText = honorariosMadrid.unidades[forma]
      ? "Cantidad (unidades)"
      : "Cantidad (g / ml)";
  }

  // Total: mínimo = base, suma exceso si cantidad > maxBase
  let total = base;
  if (cantidad > maxBase) {
    total += (cantidad - maxBase) * extra;
  }

  document.getElementById(IDS.total).innerText =
    `Total Honorarios: €${total.toFixed(2)}`;

  return total;
}

// --- Inicialización ---
window.addEventListener("DOMContentLoaded", cargarFormasHonorariosMadrid);
