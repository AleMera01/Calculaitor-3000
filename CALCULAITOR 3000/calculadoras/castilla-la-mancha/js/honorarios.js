// js/castilla-la-mancha/honorarios.js

const P = 2.4345; // Factor Castilla-La Mancha

// --- Tabla de honorarios Castilla-La Mancha ---
const honorariosCM = {
  // --- Unidades ---
  "Inyectables": {
    max: 25,
    calc: n => n <= 10 ? 8 * P : 8 * P + (n - 10) * 0.4 * P
  },
  "Colirios, pomadas oftálmicas": {
    max: 1,
    calc: n => 8 * P
  },
  "Óvulos, supositorios": {
    max: 25,
    calc: n => n <= 10 ? 4 * P : 4 * P + (n - 10) * 0.1 * P
  },
  "Papeles, sellos": {
    max: 50,
    calc: n => n <= 10 ? 3 * P : 3 * P + (n - 10) * 0.1 * P
  },
  "Cápsulas": {
    max: 100,
    calc: n => n <= 10 ? 4 * P : 4 * P + (n - 10) * 0.1 * P
  },
  "Cápsulas gastrorresistentes": {
    max: 100,
    calc: n => n <= 10 ? 6 * P : 6 * P + (n - 10) * 0.2 * P
  },

  // --- Gramos/ml ---
  "Pastas, pomadas": {
    max: 250,
    calc: n => n <= 100 ? 4 * P : 4 * P + (n - 100) * 0.010 * P
  },
  "Granulados, emulsiones, geles": {
    max: 250,
    calc: n => n <= 100 ? 4 * P : 4 * P + (n - 100) * 0.013 * P
  },
  "Polvos compuestos": {
    max: 250,
    calc: n => n <= 100 ? 2 * P : 2 * P + (n - 100) * 0.013 * P
  },
  "Suspensiones": {
    max: 250,
    calc: n => n <= 100 ? 3 * P : 3 * P + (n - 100) * 0.007 * P
  },
  "Soluciones estériles": {
    max: 1000,
    calc: n => n <= 100 ? 5 * P : 5 * P + (n - 100) * 0.005 * P
  },
  "Soluciones": {
    max: 1000,
    calc: n => n <= 100 ? 3 * P : 3 * P + (n - 100) * 0.005 * P
  },
  "Enemas": {
    max: 1000,
    calc: n => n <= 100 ? 4 * P : 4 * P + (n - 100) * 0.005 * P
  }
};

// --- Generar dinámicamente las opciones del select ---
function cargarFormasHonorariosCM() {
  const select = document.getElementById("forma");
  if (!select) return;

  select.innerHTML = '<option value="">-- Selecciona --</option>';

  // Crear optgroups
  const unidadesGroup = document.createElement("optgroup");
  unidadesGroup.label = "Unidades";

  const gramosGroup = document.createElement("optgroup");
  gramosGroup.label = "Gramos o ml";

  // Asignar las opciones según el tipo
  for (const forma in honorariosCM) {
    const option = document.createElement("option");
    option.value = forma;
    option.textContent = forma;

    if (["Inyectables", "Colirios, pomadas oftálmicas", "Óvulos, supositorios", "Papeles, sellos", "Cápsulas", "Cápsulas gastrorresistentes"].includes(forma)) {
      unidadesGroup.appendChild(option);
    } else {
      gramosGroup.appendChild(option);
    }
  }

  select.appendChild(unidadesGroup);
  select.appendChild(gramosGroup);

  // Asociar eventos
  select.addEventListener("change", calcularHonorarios);
  document.getElementById("cantidad").addEventListener("input", calcularHonorarios);
}

// --- Cálculo de honorarios ---
function calcularHonorarios() {
  const forma = document.getElementById("forma").value;
  const cantidad = parseFloat(document.getElementById("cantidad").value) || 0;

  if (forma && cantidad > 0 && honorariosCM[forma]) {
    const max = honorariosCM[forma].max;
    const n = cantidad > max ? max : cantidad;  // Limitar a máximo
    const precio = honorariosCM[forma].calc(n);

    document.getElementById("totalHonorarios").innerText = "Total Honorarios: €" + precio.toFixed(2);
    return precio;
  } else {
    document.getElementById("totalHonorarios").innerText = "Total Honorarios: €0.00";
    return 0;
  }
}

// --- Cargar al iniciar ---
window.addEventListener("DOMContentLoaded", cargarFormasHonorariosCM);
