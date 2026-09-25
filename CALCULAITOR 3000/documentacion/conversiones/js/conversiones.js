/* =========================================================
   CALCULAITOR 3000
   CONVERSIONES DE PRINCIPIOS ACTIVOS
   ========================================================= */


/* =========================================================
   DATOS DE LAS CONVERSIONES
   ========================================================= */

const conversiones = [

    /* ---------------- BETAMETASONA ---------------- */

    {
        principio: "Betametasona",
        origen: "Betametasona base",
        destino: "Betametasona dipropionato",
        cantidadOrigen: 1,
        unidadOrigen: "mg",
        cantidadDestino: 1.3,
        unidadDestino: "mg"
    },

    {
        principio: "Betametasona",
        origen: "Betametasona base",
        destino: "Betametasona valerato",
        cantidadOrigen: 1,
        unidadOrigen: "mg",
        cantidadDestino: 1.2,
        unidadDestino: "mg"
    },


    /* ---------------- CLINDAMICINA ---------------- */

    {
        principio: "Clindamicina",
        origen: "Clindamicina",
        destino: "Clindamicina clorhidrato",
        cantidadOrigen: 1,
        unidadOrigen: "g",
        cantidadDestino: 1.13,
        unidadDestino: "g"
    },


    /* ---------------- COBRE SULFATO ---------------- */

    {
        principio: "Cobre sulfato",
        origen: "Cobre sulfato anhidro (CuSO₄)",
        destino: "Cobre sulfato pentahidrato (CuSO₄·5H₂O)",
        cantidadOrigen: 1,
        unidadOrigen: "g",
        cantidadDestino: 1.565,
        unidadDestino: "g"
    },


    /* ---------------- COBRE ELEMENTAL ---------------- */

    {
        principio: "Cobre elemental",
        origen: "Cobre elemental",
        destino: "Cobre sulfato anhidro (CuSO₄)",
        cantidadOrigen: 1,
        unidadOrigen: "g",
        cantidadDestino: 2.512,
        unidadDestino: "g"
    },

    {
        principio: "Cobre elemental",
        origen: "Cobre elemental",
        destino: "Cobre gluconato",
        cantidadOrigen: 1,
        unidadOrigen: "g",
        cantidadDestino: 7,
        unidadDestino: "g"
    },


    /* ---------------- DEXAMETASONA ---------------- */

    {
        principio: "Dexametasona",
        origen: "Dexametasona anhidra",
        destino: "Dexametasona sódica fosfato",
        cantidadOrigen: 1,
        unidadOrigen: "g",
        cantidadDestino: 1.32,
        unidadDestino: "g"
    },


    /* ---------------- GENTAMICINA ---------------- */

    {
        principio: "Gentamicina",
        origen: "Gentamicina base",
        destino: "Gentamicina sulfato",
        cantidadOrigen: 1,
        unidadOrigen: "g",
        cantidadDestino: 1.6,
        unidadDestino: "g"
    },


    /* ---------------- LIDOCAÍNA ---------------- */

    {
        principio: "Lidocaína",
        origen: "Lidocaína base",
        destino: "Lidocaína clorhidrato monohidrato",
        cantidadOrigen: 1,
        unidadOrigen: "g",
        cantidadDestino: 1.23,
        unidadDestino: "g"
    },


    /* ---------------- PREGNENOLONA ---------------- */

    {
        principio: "Pregnenolona",
        origen: "Pregnenolona base",
        destino: "Pregnenolona acetato",
        cantidadOrigen: 1,
        unidadOrigen: "g",
        cantidadDestino: 1.12,
        unidadDestino: "g"
    },


    /* ---------------- SELENIO ---------------- */

    {
        principio: "Selenio",
        origen: "Selenio",
        destino: "Levadura de selenio",
        cantidadOrigen: 1,
        unidadOrigen: "g",
        cantidadDestino: 1000,
        unidadDestino: "g"
    },

    {
        principio: "Selenio",
        origen: "Selenio",
        destino: "Levadura de selenio",
        cantidadOrigen: 0.15,
        unidadOrigen: "mg",
        cantidadDestino: 150,
        unidadDestino: "mg"
    },


    /* ---------------- SILDENAFILO ---------------- */

    {
        principio: "Sildenafilo",
        origen: "Sildenafilo",
        destino: "Sildenafilo citrato",
        cantidadOrigen: 10,
        unidadOrigen: "mg",
        cantidadDestino: 14,
        unidadDestino: "mg"
    },


    /* ---------------- ZINC ---------------- */

    {
        principio: "Zinc",
        origen: "Zinc",
        destino: "Zinc gluconato",
        cantidadOrigen: 5,
        unidadOrigen: "mg",
        cantidadDestino: 35,
        unidadDestino: "mg"
    },

    {
        principio: "Zinc",
        origen: "Zinc",
        destino: "Zinc sulfato",
        cantidadOrigen: 5,
        unidadOrigen: "mg",
        cantidadDestino: 12.347,
        unidadDestino: "mg"
    },


    /* ---------------- ZINC SULFATO ---------------- */

    {
        principio: "Zinc sulfato",
        origen: "Zinc sulfato",
        destino: "Zinc sulfato Diffucaps",
        cantidadOrigen: 5,
        unidadOrigen: "mg",
        cantidadDestino: 8,
        unidadDestino: "mg"
    },

    {
        principio: "Zinc sulfato",
        origen: "Zinc sulfato",
        destino: "Zinc sulfato heptahidratado",
        cantidadOrigen: 5,
        unidadOrigen: "mg",
        cantidadDestino: 8,
        unidadDestino: "mg"
    },


    /* ---------------- AMLODIPINO ---------------- */

    {
        principio: "Amlodipino",
        origen: "Amlodipino",
        destino: "Amlodipino besilato",
        cantidadOrigen: 1,
        unidadOrigen: "g",
        cantidadDestino: 1.38,
        unidadDestino: "g"
    },


    /* ---------------- ÁCIDO ACÉTICO ---------------- */

    {
        principio: "Ácido acético",
        origen: "Ácido acético",
        destino: "Ácido acético glacial",
        cantidadOrigen: 1,
        unidadOrigen: "g",
        cantidadDestino: 0.33,
        unidadDestino: "g"
    },


    /* ---------------- MICONAZOL ---------------- */

    {
        principio: "Miconazol",
        origen: "Miconazol",
        destino: "Miconazol nitrato",
        cantidadOrigen: 1,
        unidadOrigen: "g",
        cantidadDestino: 1.15,
        unidadDestino: "g"
    },


    /* ---------------- NISTATINA ---------------- */

    {
        principio: "Nistatina",
        origen: "Nistatina",
        destino: "Nistatina",
        cantidadOrigen: 6719,
        unidadOrigen: "UI",
        cantidadDestino: 1,
        unidadDestino: "mg",
        nota: "Lote 24593: 6.719 UI = 1 mg"
    }

];


/* =========================================================
   ELEMENTOS DEL HTML
   ========================================================= */

const principioActivo = document.getElementById("principioActivo");
const cantidad = document.getElementById("cantidad");
const unidad = document.getElementById("unidad");

const conversionesDisponibles =
    document.querySelector(".conversiones-disponibles");

const resultado =
    document.querySelector(".resultado-valor");


/* =========================================================
   VARIABLES
   ========================================================= */

let conversionSeleccionada = null;


/* =========================================================
   FORMATO DE NÚMEROS
   ========================================================= */

function formatearNumero(numero) {

    if (!Number.isFinite(numero)) {
        return "—";
    }

    return new Intl.NumberFormat("es-ES", {
        maximumFractionDigits: 6
    }).format(numero);
}


/* =========================================================
   OBTENER PRINCIPIOS ACTIVOS ÚNICOS
   ========================================================= */

const principiosUnicos = [
    ...new Set(
        conversiones.map(conversion => conversion.principio)
    )
].sort((a, b) => a.localeCompare(b, "es"));


/* =========================================================
   CARGAR PRINCIPIOS ACTIVOS
   ========================================================= */

principiosUnicos.forEach(principio => {

    const option = document.createElement("option");

    option.value = principio;
    option.textContent = principio;

    principioActivo.appendChild(option);
});


/* =========================================================
   GESTIÓN DE UNIDADES
   ========================================================= */

function prepararUnidades(principio) {

    const unidadActual = unidad.value;

    unidad.innerHTML = "";

    const unidades = ["mg", "g"];

    if (principio === "Nistatina") {
        unidades.push("UI");
    }

    unidades.forEach(unidadNombre => {

        const option = document.createElement("option");

        option.value = unidadNombre;
        option.textContent = unidadNombre;

        unidad.appendChild(option);
    });

    if (unidades.includes(unidadActual)) {
        unidad.value = unidadActual;
    } else {
        unidad.value = principio === "Nistatina" ? "UI" : "mg";
    }
}


/* =========================================================
   MOSTRAR CONVERSIONES DISPONIBLES
   ========================================================= */

function mostrarConversiones() {

    const principio = principioActivo.value;

    conversionesDisponibles.innerHTML = "";

    const titulo = document.createElement("h3");
    titulo.textContent = "Conversiones disponibles";

    conversionesDisponibles.appendChild(titulo);


    if (!principio) {

        const mensaje = document.createElement("div");

        mensaje.className = "mensaje-inicial";

        mensaje.textContent =
            "Selecciona un principio activo para mostrar las conversiones disponibles.";

        conversionesDisponibles.appendChild(mensaje);

        return;
    }


    const conversionesPrincipio =
        conversiones.filter(
            conversion => conversion.principio === principio
        );


    conversionesPrincipio.forEach((conversion, index) => {

        const boton = document.createElement("button");

        boton.type = "button";

        boton.style.width = "100%";
        boton.style.padding = "14px";
        boton.style.marginBottom = "10px";
        boton.style.border = "1px solid #bcccdc";
        boton.style.borderRadius = "8px";
        boton.style.background = "white";
        boton.style.color = "#243b53";
        boton.style.textAlign = "left";
        boton.style.cursor = "pointer";
        boton.style.fontSize = "0.95rem";

        boton.innerHTML = `
            <strong>
                ${conversion.cantidadOrigen} ${conversion.unidadOrigen}
                ${conversion.origen}
            </strong>
            →
            <strong>
                ${conversion.cantidadDestino} ${conversion.unidadDestino}
                ${conversion.destino}
            </strong>
        `;


        if (conversion.nota) {

            const nota = document.createElement("div");

            nota.style.marginTop = "6px";
            nota.style.fontSize = "0.85rem";
            nota.style.color = "#627d98";

            nota.textContent = conversion.nota;

            boton.appendChild(nota);
        }


        boton.addEventListener("click", () => {

            document
                .querySelectorAll(".conversiones-disponibles button")
                .forEach(b => {

                    b.style.background = "white";
                    b.style.borderColor = "#bcccdc";

                });


            boton.style.background = "#f0fdf4";
            boton.style.borderColor = "#166534";

            conversionSeleccionada = conversion;

            calcularResultado();

        });


        conversionesDisponibles.appendChild(boton);


        /* Seleccionar automáticamente la primera */
        if (index === 0) {

            setTimeout(() => {
                boton.click();
            }, 0);

        }

    });
}


/* =========================================================
   CONVERSIÓN DE UNIDADES A UNIDAD BASE
   ========================================================= */

function convertirAUnidadBase(valor, unidadOrigen) {

    if (unidadOrigen === "g") {
        return valor;
    }

    if (unidadOrigen === "mg") {
        return valor / 1000;
    }

    return valor;
}


/* =========================================================
   CONVERTIR ENTRE UNIDADES
   ========================================================= */

function convertirUnidad(valor, unidadOrigen, unidadDestino) {

    if (unidadOrigen === unidadDestino) {
        return valor;
    }


    /* Masa */

    if (unidadOrigen === "g" && unidadDestino === "mg") {
        return valor * 1000;
    }

    if (unidadOrigen === "mg" && unidadDestino === "g") {
        return valor / 1000;
    }


    return valor;
}


/* =========================================================
   CALCULAR RESULTADO
   ========================================================= */

function calcularResultado() {

    if (!conversionSeleccionada) {

        resultado.textContent = "—";

        return;
    }


    const valorIntroducido =
        parseFloat(cantidad.value);


    if (
        isNaN(valorIntroducido) ||
        valorIntroducido < 0
    ) {

        resultado.textContent = "—";

        return;
    }


    const conversion = conversionSeleccionada;


    /* -----------------------------------------------------
       CASO NISTATINA
       ----------------------------------------------------- */

    if (conversion.principio === "Nistatina") {

        let resultadoFinal;


        if (unidad.value === "UI") {

            /*
             * 6719 UI = 1 mg
             */

            resultadoFinal =
                valorIntroducido *
                (conversion.cantidadDestino /
                 conversion.cantidadOrigen);

            resultado.textContent =
                `${formatearNumero(resultadoFinal)} mg de nistatina`;

        }

        else if (unidad.value === "mg") {

            /*
             * 1 mg = 6719 UI
             */

            resultadoFinal =
                valorIntroducido *
                (conversion.cantidadOrigen /
                 conversion.cantidadDestino);

            resultado.textContent =
                `${formatearNumero(resultadoFinal)} UI de nistatina`;

        }

        else {

            resultado.textContent = "—";

        }

        return;
    }


    /* -----------------------------------------------------
       CONVERSIONES NORMALES
       ----------------------------------------------------- */

    let cantidadOrigen = valorIntroducido;


    /*
     * Adaptamos la cantidad introducida
     * a la unidad de la conversión.
     */

    if (
        unidad.value !== conversion.unidadOrigen
    ) {

        cantidadOrigen =
            convertirUnidad(
                valorIntroducido,
                unidad.value,
                conversion.unidadOrigen
            );

    }


    /*
     * Factor de conversión
     */

    const factor =
        conversion.cantidadDestino /
        conversion.cantidadOrigen;


    let cantidadResultado =
        cantidadOrigen * factor;


    /*
     * Convertimos el resultado a la unidad
     * más cómoda según la unidad introducida.
     */

    let unidadResultado =
        conversion.unidadDestino;


    /*
     * Si se introducen mg y el resultado está
     * en gramos, mostramos también el equivalente
     * en mg para facilitar la lectura.
     */

    if (
        unidad.value === "mg" &&
        unidadResultado === "g"
    ) {

        cantidadResultado *= 1000;

        unidadResultado = "mg";

    }


    if (
        unidad.value === "g" &&
        unidadResultado === "mg"
    ) {

        cantidadResultado /= 1000;

        unidadResultado = "g";

    }


    resultado.textContent =
        `${formatearNumero(cantidadResultado)} ${unidadResultado} de ${conversion.destino}`;

}


/* =========================================================
   EVENTOS
   ========================================================= */

principioActivo.addEventListener("change", () => {

    prepararUnidades(principioActivo.value);

    cantidad.value = "";

    conversionSeleccionada = null;

    resultado.textContent = "—";

    mostrarConversiones();

});


cantidad.addEventListener("input", calcularResultado);


unidad.addEventListener("change", calcularResultado);


/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

prepararUnidades("");

mostrarConversiones();