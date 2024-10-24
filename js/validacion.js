document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formu");
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const pass1 = document.getElementById("password1");
    const pass2 = document.getElementById("password2");
    const termsCheckbox = document.getElementById("terminos");
    const modalButton = document.querySelector('button[data-bs-target="#modalTerminos"]');
    const termsText = document.getElementById("terminos-texto"); // Texto de error para términos

    // Añadir eventos 'input' para resetear errores en tiempo real
    [nombre, apellido, email, pass1, pass2].forEach(input => {
        input.addEventListener("input", resetValidationOnInput);
    });
    termsCheckbox.addEventListener("change", resetValidationOnInput); // También para el checkbox

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();

        let isValid = true;

        // Resetear las validaciones antes de empezar
        resetValidation();

        // 1. Validar si el campo nombre está vacío
        if (!nombre.value.trim()) {
            nombre.classList.add("is-invalid");
            isValid = false;
        }

        // 2. Validar si el campo apellido está vacío
        if (!apellido.value.trim()) {
            apellido.classList.add("is-invalid");
            isValid = false;
        }

        // 3. Validar si el campo email tiene formato correcto
        if (!email.value.trim() || !email.checkValidity()) {
            email.classList.add("is-invalid");
            isValid = false;
        }

        // 4. Validar si el campo pass1 está vacío o tiene menos de 6 caracteres
        if (!pass1.value.trim() || pass1.value.length < 6) {
            pass1.classList.add("is-invalid");
            isValid = false;
        }

        // 5. Validar si pass1 y pass2 son iguales
        if (pass1.value !== pass2.value) {
            pass2.classList.add("is-invalid");
            isValid = false;
        }

        // 6. Validar si el checkbox de términos y condiciones está marcado
        if (!termsCheckbox.checked) {
            termsCheckbox.classList.add("is-invalid");
            termsText.style.display = "inline";
            isValid = false;
        }

        // Si el formulario es válido, mostrar un mensaje de éxito
        if (isValid) {
            alert("Formulario enviado con éxito");
            form.reset();  // Reinicia el formulario
            resetValidation(); // Resetear validaciones visuales
            form.classList.remove("was-validated");
        } else {
            form.classList.add("was-validated");
        }
    });

    // Función para resetear las validaciones visuales
    function resetValidation() {
        [nombre, apellido, email, pass1, pass2, termsCheckbox].forEach(input => {
            input.classList.remove("is-invalid");
        });
        termsText.style.display = "none"; // Esconde el mensaje de error del checkbox
    }

    // Función que se ejecuta en el evento 'input' o 'change' para borrar errores mientras el usuario escribe
    function resetValidationOnInput() {
        if (this.value.trim()) {
            this.classList.remove("is-invalid");
        }

        // Validar términos y condiciones al marcar/desmarcar
        if (termsCheckbox.checked) {
            termsCheckbox.classList.remove("is-invalid");
            termsText.style.display = "none";
        }
    }
});
