
const coracao = document.getElementById("coracao");
const surpresa = document.getElementById("surpresa");
const instrucao = document.querySelector(".instrucao");
const clique = document.querySelector(".clique");

coracao.addEventListener("click", function () {
    surpresa.hidden = false;

    coracao.style.display = "none";
    instrucao.style.display = "none";
    clique.style.display = "none";

    document.body.style.alignItems = "flex-start";

    surpresa.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});