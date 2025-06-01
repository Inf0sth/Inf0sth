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

VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x00ffcc,
    backgroundColor: 0x000000
});

particlesJS('particles-js', {
    particles: {
      number: { value: 80 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: { enable: true, speed: 2 },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100 },
        push: { particles_nb: 4 },
      },
    },
  });
  