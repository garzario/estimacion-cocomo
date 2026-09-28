const constantes = {
    organico: { a: 2.4, b: 1.05, c: 2.5, d: 0.38 },
    semi: { a: 3.0, b: 1.12, c: 2.5, d: 0.35 },
    empotrado: { a: 3.6, b: 1.20, c: 2.5, d: 0.32 }
};

function calcular() {
    let proyecto = document.getElementById("proyecto").value;
    let kloc = parseFloat(document.getElementById("kloc").value);
    let modo = document.getElementById("modo").value;

    if (isNaN(kloc) || kloc <= 0) {
        alert("Ingresa un tamaño en KLOC mayor a 0");
        return;
    }

    if (proyecto == "") {
        proyecto = "Proyecto sin nombre";
    }

    let k = constantes[modo];
    let esfuerzo = k.a * Math.pow(kloc, k.b);
    let tiempo = k.c * Math.pow(esfuerzo, k.d);
    let personas = esfuerzo / tiempo;

    document.getElementById("titulo").textContent = proyecto + " (" + kloc + " KLOC)";
    document.getElementById("esfuerzo").textContent = esfuerzo.toFixed(2) + " persona-mes";
    document.getElementById("tiempo").textContent = tiempo.toFixed(2) + " meses";
    document.getElementById("personas").textContent = personas.toFixed(2) + " personas (aprox " + Math.round(personas) + ")";
    document.getElementById("constantes").textContent = "a = " + k.a + ", b = " + k.b + ", c = " + k.c + ", d = " + k.d;
    document.getElementById("resultado").style.display = "block";
}

document.getElementById("calcular").addEventListener("click", calcular);
