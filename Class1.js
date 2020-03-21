//Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer
//lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
//triángulo = b * h/2 rectángulo = b * h círculo = π * r2 (pi * radio al cuadrado)

let x;

x = prompt("¿Que figura quieres calcular? \n(1) Triángulo \n(2) Rectángulo \n(3) Círculo");
x = parseInt(x.trim());

switch (x) {
    case 1:
        let b;
        let h;

        do {
            b = prompt("¿Indica cuál es la base del triángulo?");
            b = parseInt(b.trim());
        } while (b <= 0);

        do {
            h = prompt("¿Indica cuál es la altura del triángulo?");
            h = parseInt(h.trim());
        } while (h <= 0);

        let area = b * h / 2;
        console.log("El área del triangulo indicado es de:" + area);

        break;

    case 2:
        let c;
        let d;

        do {
            c = prompt("¿Indica cuál es la base del rectángulo?");
            c = parseInt(c.trim());
        } while (c <= 0);

        do {
            d = prompt("¿Indica cuál es la altura del rectángulo?");
            d = parseInt(d.trim());
        } while (d <= 0);

        let area2 = c * d;
        console.log("El área del rectángulo indicado es de:" + area2);

        break;

    case 3:
        let r = 0;
        let x = Math.PI;

        do {
            r = prompt("¿Indica cuál es el radio del círculo?");
            r = parseInt(r.trim());
        } while (r <= 0);

        let area3 = x * (r * r);
        console.log("El área del círculo indicado es de: " + area3);

        break;

    default:
        console.log("¡Indica un numero vàlido!");

}
