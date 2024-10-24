document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formu")
    const nombre = document.getElementById("nombre")
    const apellido = document.getElementById("apellido")
    const email = document.getElementById("email")
    const pass1 = document.getElementById("password1")
    const pass2 = document.getElementById("password2")
      const termsCheckbox = document.getElementById("terminos");
    const termsText = document.getElementById("terminos-texto");
    const modalButton = document.querySelector('button[data-bs-target="#modalTerminos"]');

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();
        let isValid = true
     
        // Resetear validaciones visuales
        resetValidation();

        // Validar nombre
        if (!nombre.value.trim()) {
            nombre.classList.add("is-invalid");
            isValid = false;
        }   
         // Validar apellido
        if (!apellido.value.trim()) {
            apellido.classList.add("is-invalid");
            isValid = false;
        }

        // Validar email
        if (!email.checkValidity()) {
            email.classList.add("is-invalid");
            isValid = false;
        }
          // Validar contraseña y repetir contraseña.
        if (!pass1.value.trim() || pass1.value.length < 6) {
            pass1.classList.add("is-invalid");
            isValid = false;
        } else if (pass1.value !== pass2.value) {
            pass2.classList.add("is-invalid");
            isValid = false;
        }
          // Validar checkbox de términos.
        if (!termsCheckbox.checked) {
            termsCheckbox.classList.add("is-invalid");
            modalButton.classList.add("is-invalid");
            termsText.style.display = "inline";
            isValid = false;
        }

        if (isValid) {
            alert("Formulario enviado con éxito");
            form.reset();
        } else {
            form.classList.add("was-validated");
        }
    })
  // Validación en tiempo real
    addRealTimeValidation(nombre);
    addRealTimeValidation(apellido);
    addRealTimeValidation(email);
    addRealTimeValidation(pass1);
    addRealTimeValidation(pass2);

      // Validación en tiempo real para el checkbox de términos.
    termsCheckbox.addEventListener("change", function () {
        if (termsCheckbox.checked) {
            termsCheckbox.classList.remove("is-invalid");
            modalButton.classList.remove("is-invalid");
            termsText.style.display = "none";
        }
    });
      // Función para agregar validación en tiempo real a un campo.
    function addRealTimeValidation(input) {
        input.addEventListener("input", function () {
            if (input.checkValidity()) {
                input.classList.remove("is-invalid");
            }
        });
    }
     // Función para resetear las validaciones
    function resetValidation() {
        nombre.classList.remove("is-invalid");
        apellido.classList.remove("is-invalid");
        email.classList.remove("is-invalid");
        pass1.classList.remove("is-invalid");
        pass2.classList.remove("is-invalid");
        termsCheckbox.classList.remove("is-invalid");
        modalButton.classList.remove("is-invalid");
        termsText.style.display = "none";
    }
})
