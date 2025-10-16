addEventListener("DOMContentLoaded", function () {
  clickyarriba();
  colocarfecha();
  validarFormulario();
  toggleReferencias();
});

function clickyarriba() {
  const bottonArriba = document.querySelector(".volver-arri");
  // console.log(bottonArriba)
  bottonArriba.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
}

function colocarfecha() {
  const elemento = document.querySelector("#fecha");
  const fecha = new Date()
    .toLocaleString("es-ES", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-")
    .replace(/25/g, 77); /* jk */
  elemento.textContent = fecha;
}

function validarFormulario() {
  const botonEnviar = document.getElementById("boton-enviar");
  botonEnviar.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#errores").innerHTML = "";
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");
    console.log(nombre.value);
    let paso = true;

    if (nombre.value.trim() === "") {
      paso = false;
      document.querySelector("#errores").innerHTML +=
        "<li>Por favor ingresa tu nombre</li>";
    }
    if (email.value.trim() === "") {
      paso = false;
      document.querySelector("#errores").innerHTML +=
        "<li>Por favor ingresa tu email</li>";
    } else {
      const regular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //TODO: investigar ER
      if (!regular.test(email.value)) {
        paso = false;
        document.querySelector("#errores").innerHTML +=
          "<li>Por favor ingresa un email valido</li>";
      }
    }

    if (mensaje.value.trim() === "") {
      paso = false;
      document.querySelector("#errores").innerHTML +=
        "<li>Por favor ingresa un mensaje</li>";
    }
    const erroresDiv = document.querySelector(".errormsj");

    if (!paso) {
      erroresDiv.style.display = "block";
    } else {
      erroresDiv.style.display = "none";
    }
  });
}

function toggleReferencias() {
  const referencias = document.querySelectorAll('.referencia');
  const boton = document.getElementById('btn-referencias');

  referencias.forEach((ref) => {
     ref.classList.add('oculta');
  });

  let mostrandoTodo = false;

  boton.addEventListener('click', () => {
    mostrandoTodo = !mostrandoTodo;

    referencias.forEach((ref) => {
        if (mostrandoTodo) {
          ref.classList.remove('oculta');
        } else {
          ref.classList.add('oculta');
        }
    });

    boton.textContent = mostrandoTodo ? 'Ver menos' : 'Ver Referencias';
  });
}
