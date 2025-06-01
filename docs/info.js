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
const colores = ["#12cc12", "#00ff88", "#16ad1e", "#06a555"];

function changeTitle() {
    const myElement = document.getElementById("header-name");

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

fetch("https://ipapi.co/json/")
    .then(res => res.json())
    .then(data => {
	document.getElementById("location").textContent = `${data.city}, ${data.region}, ${data.country_name} (ISP: ${data.org})`;
    })
    .catch(() => {
      document.getElementById("location").textContent = "No se pudo obtener la ubicación";
    });

document.getElementById("browser").textContent = navigator.userAgent;
document.getElementById("os").textContent = navigator.platform;

  fetch("https://api.ipify.org?format=json")
    .then(res => res.json())
    .then(data => {
      document.getElementById("ip").textContent = data.ip;
    })
    .catch(() => {
      document.getElementById("ip").textContent = "No se pudo obtener la IP";
    });

