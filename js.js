
function mascara_telefone() {
    //limitador
    var tel = document.getElementById("telefone").value
    tel = tel.slice(0, 14) //(pode limitar a quantidade de char na entrada pelo java script)
    document.getElementById("telefone").value = tel
    tel = document.getElementById("telefone").value.slice(0, 10)

    //máscara
    var tel_formatado = document.getElementById("telefone").value
    if (tel_formatado[0] != "(") {
        if (tel_formatado[0] != undefined) {
            document.getElementById("telefone").value = "(" + tel_formatado[0];
        }
    }

    if (tel_formatado[3] != ")") {
        if (tel_formatado[3] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3]
        }
    }

    if (tel_formatado[9] != "-") {
        if (tel_formatado[9] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 9) + "-" + tel_formatado[9]
        }
    }

}

function mascara_cpf() {
    var cpf_formatado = document.getElementById("cpf").value
    if (cpf_formatado[3] != ".") {
        if (cpf_formatado[3] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 3) + "." + cpf_formatado[3];
        }
    }

    if (cpf_formatado[7] != ".") {
        if (cpf_formatado[7] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 7) + "." + cpf_formatado[7];
        }
    }

    if (cpf_formatado[11] != "-") {
        if (cpf_formatado[11] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 11) + "-" + cpf_formatado[11]
        }
    }

    if (cpf_formatado.length > 13) {
        document.getElementById("cpf").value = cpf_formatado.slice(0, 13);
        return;
    }

}

const abrirModal = document.querySelector("#loginBtn");
const fecharModal = document.querySelector("#closeBtn");
const modal = document.querySelector("#modal");

function abrirFechar() {

    modal.classList.toggle("show");
}

abrirModal.addEventListener("click", () => {
    abrirFechar(); // Abre o modal
});

fecharModal.addEventListener("click", abrirFechar);

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Coleta os dados dos campos
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var cpf = document.getElementById("cpf").value;
    var senha = document.getElementById("senha").value;

    // Salva os dados no localStorage
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("telefone", telefone);
    localStorage.setItem("cpf", cpf);
    localStorage.setItem("senha", senha);

    // Exibe uma mensagem de sucesso
    alert("Seu cadastro foi realizado com sucesso!");

    // Fecha o modal
    abrirFechar();

    // Redireciona para a página do perfil (criar uma página de perfil)
    window.location.href = "perfil.html";
});