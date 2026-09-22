// js/castilla-la-mancha/principios.js
// Principios activos con sus precios en €/g para Castilla-La Mancha

// js/castilla-la-mancha/principios.js
// Principios activos Castilla-La Mancha - BLOQUE 1

var principiosCastillaLaMancha = {
  "ACEITE DE CADE": 0.06,
  "ACETATO VITAMINA A": 0.48,
  "ACETAZOLAMIDA": 0.59,
  "ACETILSALICILICO, ACIDO": 0.08,
  "ALOPURINOL": 2.32,
  "AMIODARONA, CLORHIDRATO": 4.49,
  "AMITRIPTILINA": 0.98,
  "AMLODIPINO": 30.38,
  "ATENOLOL": 2.42,
  "ATROPINA, SULFATO": 15.42,
  "AZUFRE PRECIPITADO": 0.05,
  "BECLOMETASONA, DIPROPIONATO": 34.00,
  "BENZOATO DE BENCILO": 0.08,
  "BETAMETASONA": 40.22,
  "BETAMETASONA, 17-21-DIPROPIONATO": 12.60,
  "BETAMETASONA, 17-VALERATO": 17.24,
  "BIOTINA": 10.39,
  "BUDESONIDA": 59.36,
  "CALCIO, CARBONATO PRECIPITADO": 0.01,
  "CALCIO, CITRATO": 0.08,
  "CALCIO, FOSFATO DIBASICO": 0.02,
  "CALCIO, GLUCONATO": 0.02,
  "CALCIO, HIDROXIDO": 0.02,
  "CALCIO, LACTATO": 0.02,
  "CAPTOPRILO": 15.32,
  "CARBAMAZEPINA": 0.56,
  "CARVEDILOL": 17.85,
  "CLINDAMICINA, CLORHIDRATO": 2.40,
  "CLOBETASOL, PROPIONATO": 9.61,
  "CLONIDINA, CLORHIDRATO": 121.00,
  "CLOTRIMAZOL": 2.41,
  "COBRE, SULFATO CRISTAL": 0.08,
  "COBRE, SULFATO POLVO": 0.08,
  "CROMOGLICATO DISODICO": 2.82,
  "DEXAMETASONA": 13.30,
  "DIAZEPAM": 9.95,
  "DILTIAZEM, CLORHIDRATO": 2.80,
  "ENALAPRIL": 4.87,
  "ERITROMICINA BASE": 1.92,
  "ESPIRONOLACTONA": 3.92,
  "ESTRADIOL 17-ALFA": 93.75,
  "ESTRADIOL 17-BETA": 23.06,
  "FENOBARBITAL": 3.64,
  "FLECAINIDA": 5.13,
  "FLUOCINOLONA, ACETONIDO": 27.39,
  "FUROSEMIDA": 2.07,
  "GABAPENTINA": 1.65,
  "GRISEOFULVINA": 2.70,
  "HIDRALAZINA CLORHIDRATO": 6.89,
  "HIDROCLOROTIAZIDA": 0.82,
  "HIDROCORTISONA BASE": 7.36, 
  "ISONIAZIDA": 0.39,
  "IVERMECTINA": 29.04,
  "KETOCONAZOL": 1.00,
  "MEDROXIPROGESTERONA, ACETATO": 17.02,
  "METILPREDNISOLONA 6-ALFA": 22.81,
  "METOXALENO": 15.27,
  "METRONIDAZOL": 0.56,
  "NICOTINATO DE METILO": 0.22,
  "NIFEDIPINA": 3.29,
  "NISTATINA": 1.63,
  "OMEPRAZOL BASE": 2.65,
  "OXIBUTININA": 8.29,
  "PIRAZINAMIDA": 1.17,
  "POTASIO, CITRATO": 0.06,
  "POTASIO, CLORURO": 0.01,
  "POTASIO, HIDROXIDO": 0.11,
  "POTASIO, IODURO": 0.27,
  "PREDNISOLONA": 3.12,
  "PREDNISONA": 5.05,
  "PROCAINA, CLORHIDRATO": 1.28,
  "PROGESTERONA": 3.15,
  "PROPRANOLOL": 0.54,
  "QUININA, SULFATO": 0.97,
  "SODIO, HIPOSULFITO CRISTAL": 0.05,
  "SULFADIAZINA": 0.22,
  "SULFAMETOXAZOL": 0.05,
  "SULPIRIDE": 0.81,
  "TACROLIMUS": 298.24,
  "TERBINAFINA": 2.24,
  "TESTOSTERONA, PROPIONATO": 7.93,
  "TETRACAINA, CLORHIDRATO": 1.44,
  "TETRACICLINA, CLORHIDRATO": 0.48,
  "TOCOFEROL, ACETATO": 0.23,
  "TOCOFEROL, SUCCINATO": 0.29,
  "TRANEXAMICO, ACIDO": 4.07,
  "TRIAMCINOLONA BASE": 25.85,
  "TRIAMCINOLONA, ACETONIDO": 11.13, 
  "UREA": 0.06,
  "URSODEOXICÓLICO, AC": 3.18,
  "VERAPAMILO": 5.35
};


// ----------------------
// UI: Añadir select
// ----------------------
function agregarPrincipioActivo() {
  const container = document.getElementById("principiosActivosContainer");
  const div = document.createElement("div");
  div.classList.add("activo-item");

  const select = document.createElement("select");
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "-- Selecciona un principio activo --";
  select.appendChild(defaultOption);

  // Añadir opciones dinámicas
  for (let nombre in principiosCastillaLaMancha) {
    const option = document.createElement("option");
    option.value = nombre;
    option.textContent = nombre;
    select.appendChild(option);
  }

  const inputCantidad = document.createElement("input");
  inputCantidad.type = "number";
  inputCantidad.placeholder = "Cantidad (g)";
  inputCantidad.step = "0.01";

  const spanPrecio = document.createElement("span");
  spanPrecio.classList.add("precio");
  spanPrecio.textContent = "€0.00";

  // Actualizar precio al cambiar
  function actualizarPrecio() {
    const activo = select.value;
    const cantidad = parseFloat(inputCantidad.value) || 0;
    if (activo && principiosCastillaLaMancha[activo]) {
      const precioUnitario = principiosCastillaLaMancha[activo];
      spanPrecio.textContent = "€" + (precioUnitario * cantidad).toFixed(2);
    } else {
      spanPrecio.textContent = "€0.00";
    }
    calcular();
  }

  select.addEventListener("change", actualizarPrecio);
  inputCantidad.addEventListener("input", actualizarPrecio);

  div.appendChild(select);
  div.appendChild(inputCantidad);
  div.appendChild(spanPrecio);
  container.appendChild(div);
}

// ----------------------
// Calcular total
// ----------------------
function calcularPrincipios() {
  const items = document.querySelectorAll("#principiosActivosContainer .activo-item");
  let total = 0;
  items.forEach(item => {
    const select = item.querySelector("select");
    const input = item.querySelector("input");
    if (select && input) {
      const activo = select.value;
      const cantidad = parseFloat(input.value) || 0;
      if (activo && principiosCastillaLaMancha[activo]) {
        total += principiosCastillaLaMancha[activo] * cantidad;
      }
    }
  });
  document.getElementById("totalPrincipioActivo").innerText =
    "Total Principio Activo: €" + total.toFixed(2);
  return total;
}
