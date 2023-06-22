function createAccount() {
    alert("Aqui você pode adicionar o código para criar uma nova conta!");
}
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');

document.getElementById("login-form").addEventListener("click", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // Aqui você pode adicionar o código para verificar o email e senha
    // e fazer o login no sistema
    window.location.replace("/perfil/perfil.html");
});

function checkFormValidity() {
    if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
        loginButton.disabled = false;
    } else {
        loginButton.disabled = true;
    }
}

emailInput.addEventListener('input', checkFormValidity);
passwordInput.addEventListener('input', checkFormValidity);