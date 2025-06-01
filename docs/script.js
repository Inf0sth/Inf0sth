document.addEventListener('DOMContentLoaded', function (event) {
    console.log("exito");

    setInterval(changeTitle, 3000);

    const d = new Date();
    let hours = d.getHours();

    var dia = "";
    if (hours >= 6 && hours <= 18)
        dia = "day";
    else 
        dia = "night";

    const main = document.getElementById("main");
    main.classList.add(dia);
});

var iColor = 0;
const colores = ["#5a15ca", "#36769b", "#006eff", "#56a7d6"];

function changeTitle() {
    const myElement = document.getElementById("header h1");

    if (iColor >= colores.length) {
        iColor = 0;
    }

    myElement.style.color = colores[iColor];
    iColor++;
}

function enableButton() {
    const myElement = document.getElementById("btnRED");

    myElement.style.display = "block";
    iColor++;
}

VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x478cfc,
    backgroundColor: 0x000000
});

function changeTitle() {
  const myElement = document.getElementById("card");

  myElement.style.border = "#7bf1ff";
}

