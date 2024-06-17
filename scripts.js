document.addEventListener("DOMContentLoaded", function () {
    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");

    window.login = function () {
        x.style.left = "4px";
        y.style.right = "-520px";
        a.classList.add("white-btn");
        b.classList.remove("white-btn");
        x.style.opacity = 1;
        y.style.opacity = 0;
    };

    window.register = function () {
        x.style.left = "-510px";
        y.style.right = "5px";
        a.classList.remove("white-btn");
        b.classList.add("white-btn");
        x.style.opacity = 0;
        y.style.opacity = 1;
    };

    window.myMenuFunction = function () {
        var i = document.getElementById("navMenu");
        if (i.classList.contains("nav-menu")) {
            i.classList.add("responsive");
        } else {
            i.classList.remove("responsive");
        }
    };

    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        var re = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
        return re.test(password);
    }

    document.querySelector('.submit').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário
        window.location.href = 'https://kevinsplourenco.github.io/SAME-IHC/pagina_inicial.html';
    });

    window.validateRegister = function (event) {
        event.preventDefault();

        var firstName = document.getElementById("registerFirstName").value;
        var lastName = document.getElementById("registerLastName").value;
        var email = document.getElementById("registerEmail").value;
        var password = document.getElementById("registerPassword").value;

        var error = "";

        if (!firstName) {
            error = "Por favor, informe o nome.";
        } else if (!lastName) {
            error = "Por favor, informe o sobrenome.";
        } else if (!email) {
            error = "Por favor, informe o e-mail.";
        } else if (!validateEmail(email)) {
            error = "Por favor, informe um e-mail válido.";
        } else if (!password) {
            error = "Por favor, informe a senha.";
        } else if (!validatePassword(password)) {
            error = "A senha deve conter mais de 8 caracteres, uma letra maiúscula, caractere especial e número.";
        }

        if (error) {
            openPopupError(error);
        } else {
            // Aqui você pode adicionar a lógica para o registro bem-sucedido
            alert("Registrado com sucesso!");
        }
    };

    window.openPopupError = function (message) {
        var popupError = document.getElementById("popupError");
        var popupErrorMessage = document.getElementById("popupErrorMessage");

        popupErrorMessage.innerText = message;
        popupError.style.display = "flex";
    };

    window.closePopupError = function () {
        var popupError = document.getElementById("popupError");
        popupError.style.display = "none";
    };
});
