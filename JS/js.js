document.getElementById("novocalculo").style.display = "none";

// pegando os valores digitados pelo usuario

function calcularMedia() {

    let nome = document.getElementById("nome").value;

    let disciplina = document.getElementById("disciplina").value;

    let n1 = document.getElementById("nota1").value;

    let n2 = document.getElementById("nota2").value;

    let n3 = document.getElementById("nota3").value;

    let n4 = document.getElementById("nota4").value;


    if (nome == "" || disciplina == "" || n1 == "" ||
        n2 == "" || n3 == "" || n4 == "") {

        alert("Preencha todos os campos!");

    } else {

        // operacoes matematicas

        let soma = Number(n1) + Number(n2) + Number(n3) + Number(n4);

        let media = soma / 4;

        let situacao;

        let classesituacao;


        if (media >= 7) {

            situacao = "APROVADO";
            classesituacao = "aprovado";

        } else if (media >= 5) {

            situacao = "RECUPERAÇÃO";
            classesituacao = "recuperacao";

        } else {

            situacao = "REPROVADO";
            classesituacao = "reprovado";

        }


        let resultado = document.getElementById("resultado");


        resultado.innerHTML =
            "Aluno: " + nome + "<br><br>" +
            "Disciplina: " + disciplina + "<br><br>" +
            "Média: " + media.toFixed(2) + "<br><br>" +
            "Situação: <span class='" + classesituacao + "'>" +
            situacao + "</span>";


        document.getElementById("novocalculo").style.display = "block";

        document.getElementById("calcular").style.display = "none";
    }
}


function calcularnovo() {

    document.getElementById("nome").value = "";

    document.getElementById("disciplina").value = "";

    document.getElementById("nota1").value = "";

    document.getElementById("nota2").value = "";

    document.getElementById("nota3").value = "";

    document.getElementById("nota4").value = "";


    document.getElementById("resultado").innerHTML =
        "<p>Preencha os dados acima e clique em calcular média</p>";


    document.getElementById("novocalculo").style.display = "none";

    document.getElementById("calcular").style.display = "block";
}