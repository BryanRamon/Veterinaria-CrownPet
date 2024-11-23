//Interaccion de Registro y Login

document.addEventListener("DOMContentLoaded", () => {
    const btnSignIn = document.getElementById("sign-in");
    const btnSignUp = document.getElementById("sign-up");
    const containerFormRegister = document.querySelector(".register");
    const containerFormLogin = document.querySelector(".login");

    if (btnSignIn && btnSignUp && containerFormRegister && containerFormLogin) {
        btnSignIn.addEventListener("click", () => {
            containerFormRegister.classList.add("hide");
            containerFormLogin.classList.remove("hide");
        });

        btnSignUp.addEventListener("click", () => {
            containerFormLogin.classList.add("hide");
            containerFormRegister.classList.remove("hide");
        });
    } else {
        console.error("Uno o más elementos no se encontraron.");
    }
});

//Modal de Registro de Mascota

let currentAction = '';

document.getElementById('deleteButton').addEventListener('click', function () {
    currentAction = 'delete';
    document.getElementById('modalTitle').innerText = 'Confirmación de Borrado';
    document.getElementById('modalMessage').innerText = '¿Estás seguro de que deseas borrar todos los datos ingresados?';
    var modal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    modal.show();
});

document.getElementById('successButton').addEventListener('click', function () {
    currentAction = 'send';
    document.getElementById('modalTitle').innerText = 'Confirmación de Envío';
    document.getElementById('modalMessage').innerText = '¿Estás seguro de que deseas enviar los datos?';
    var modal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    modal.show();
});

document.getElementById('confirmAction').addEventListener('click', function () {
    if (currentAction === 'delete') {
        document.querySelector('.servicios-main__perfilMascota__formulario').reset();
    }
    var modal = bootstrap.Modal.getInstance(document.getElementById('confirmationModal'));
    modal.hide();
});

//Apartado  para aumentar y disminuir la cantidad de productos (Restriccion -1 y +10)
document.querySelectorAll('.img-container').forEach(container => {
    container.addEventListener('click', function () {
        this.classList.toggle('clicked');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const decrementButton = card.querySelector('.decrement-button');
        const incrementButton = card.querySelector('.increment-button');
        const counterLabel = card.querySelector('.counter-value');
        let counterValue = parseInt(counterLabel.textContent, 10) || 0;
        function updateCounter() {
            counterLabel.textContent = counterValue;
        }
        decrementButton.addEventListener('click', function () {
            if (counterValue > 0) {
                counterValue -= 1;
                updateCounter();
            }
        });
        incrementButton.addEventListener('click', function () {
            if (counterValue < 10) {
                counterValue += 1;
                updateCounter();
            }
        });
    });
});

