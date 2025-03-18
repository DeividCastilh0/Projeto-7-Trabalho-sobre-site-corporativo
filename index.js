
document.addEventListener("click", atualizarFormulario);
function atualizarFormulario() {
    let campos = document.querySelectorAll('.cafe');
    campos.forEach(campos => campos.style.display = 'none');

    let itemSelecionado = document.getElementById("cafes").value;


    if (itemSelecionado === 'cafe1') {
        document.getElementById("cafe1").style.display = 'Flex';

    } else if (itemSelecionado === 'cafe2') {
        document.getElementById("cafe2").style.display = 'Flex';
    }
}