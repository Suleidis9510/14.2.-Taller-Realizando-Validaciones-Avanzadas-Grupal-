document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formu");
    const pass1 = document.getElementById("password1");
    const pass2 = document.getElementById("password2");

    // Añadir evento 'input' para resetear errores mientras el usuario escribe
    pass1.addEventListener("input", resetValidationOnInput);
    pass2.addEventListener("input", resetValidationOnInput);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();

        let isValid = true;

        // Resetear las validaciones antes de empezar
        resetValidation();

        // 1. Validar si el campo pass1 está vacío
        if (!pass1.value.trim()) {
            pass1.classList.add("is-invalid");
            isValid = false;
        }

        // 2. Validar si el campo pass1 tiene al menos 6 caracteres
        if (pass1.value.length < 6) {
            pass1.classList.add("is-invalid");
            isValid = false;
        }

        // 3. Validar si el campo pass2 está vacío
        if (!pass2.value.trim()) {
            pass2.classList.add("is-invalid");
            isValid = false;
        }

        // 4. Validar si pass1 y pass2 son iguales
        if (pass1.value && pass2.value && pass1.value !== pass2.value) {
            pass2.classList.add("is-invalid");
            isValid = false;
        }

        // Si el formulario es válido, mostrar un mensaje de éxito
        if (isValid) {
            alert("Formulario enviado con éxito");
            form.reset();  // Reinicia el formulario
            form.classList.remove("was-validated"); // Limpia la clase de validación
        } else {
            form.classList.add("was-validated");
        }
    });

    // Función para resetear las validaciones visuales
    function resetValidation() {
        pass1.classList.remove("is-invalid");
        pass2.classList.remove("is-invalid");
    }

    // Función que se ejecuta en el evento 'input' para borrar errores mientras el usuario escribe
    function resetValidationOnInput() {
        // Si el campo tiene texto y cumple las reglas, eliminamos el error
        if (pass1.value.trim() && pass1.value.length >= 6) {
            pass1.classList.remove("is-invalid");
        }
        if (pass2.value.trim() && pass1.value === pass2.value) {
            pass2.classList.remove("is-invalid");
        }
    }
});


