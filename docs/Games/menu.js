document.addEventListener('DOMContentLoaded', function (event) {
    console.log("sucefull");

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
const colores = ["#f03a3a", "#dce140", "#9825f1", "#56a7d6"];

function changeTitle() {
    const myElement = document.getElementById("header h1 span");
    if (iColor >= colores.length) {
        iColor = 0;
    }

    myElement.style.color = colores[iColor];
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