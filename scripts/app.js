let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let secondes = date.getSeconds(); 


setInterval(()=>{document.location.reload(true);}, 15000)

document.addEventListener("DOMContentLoaded", configRelogio);


function backgroudBody(backgroud) {
  let body = document.querySelector(".body");
  body.style.backgroundImage = backgroud;
}

let config;

function propRelogio(message, horario, img) {
  config = [{ message, horario, img }];
}



function configRelogio() {
  if (hours <= 4) {
    propRelogio(
      "Boa Madrugada",
      hours + ":" + minutes + ":" + secondes,
      "./assets/img/redu/boa-madrugada.jpg"
    );

    backgroudBody("url(./assets/img/boa-madrugada.jpg)");
  } else if (hours <= 6) {
    propRelogio(
      "Boa Madrugada",
      hours + ":" + minutes,
      "./assets/img/redu/bom-dia.jpg"
    );
    backgroudBody("url(./assets/img/bom-dia.jpg)");
  } else if (hours <= 12) {
    propRelogio(
      "Bom Dia",
      hours + ":" + minutes,
      "./assets/img/redu/meio-dia.jpg"
    );
    backgroudBody("url(./assets/img/meio-dia.jpg)");
  } else if (hours <= 15) {
    propRelogio(
      "Boa Tarde",
      hours + ":" + minutes,
      "./assets/img/redu/boa-tarde.jpg"
    );
    backgroudBody("url(./assets/img/boa-tarde.jpg)");
  } else if (hours <= 18) {
    propRelogio(
      "Bom Final de Tarde",
      hours + ":" + minutes,
      "./assets/img/redu/final-de-tarde.jpg"
    );
    backgroudBody("url(./assets/img/final-de-tarde.jpg)");
  } else if (hours <= 21) {
    propRelogio(
      "Boa Noite",
      hours + ":" + minutes,
      "./assets/img/redu/boa-noite.jpg"
    );
    backgroudBody("url(./assets/img/boa-noite.jpg)");
  } else if (hours <= 24) {
    propRelogio(
      "Boa Noite",
      hours + ":" + minutes,
      "./assets/img/redu/boa-noite-2.jpg"
    );
    backgroudBody("url(./assets/img/boa-noite-2.jpg)");
  } else {
    alert("HOUVE UM ERRO COM A DATA");
  }

  relogio(config);
}

function relogio(config) {
  let body = document.querySelector(".body");

  let container = document.createElement("div");
  container.classList.add("container");

  body.appendChild(container);

  config.forEach((i) => {
    container.innerHTML = `
        <h1>${i.message}, são exatamente ${i.horario}</h1>

        <div class="img-relogio">
            <img src="${i.img}">
        </div>

        <h4>Desenvolvido por &lt;Mikaelisson&gt;</h4>
        `;
  });

  
}
