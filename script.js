// Seleciona os botões
const btnAumentar = document.getElementById('aumentar');
const btnDiminuir = document.getElementById('diminuir');
const btnContraste = document.getElementById('contraste');

// Seleciona o corpo do site
const body = document.body;

// Variável para controle do tamanho da fonte
let tamanhoFonte = 16; // tamanho inicial padrão

// Função para aplicar tamanho da fonte
function aplicarTamanho() {
    body.style.fontSize = tamanhoFonte + 'px';
}

// Aumentar fonte
btnAumentar.addEventListener('click', () => {
    tamanhoFonte += 2; // aumenta 2px
    aplicarTamanho();
});

// Diminuir fonte
btnDiminuir.addEventListener('click', () => {
    if (tamanhoFonte > 10) { // limite mínimo
        tamanhoFonte -= 2; 
        aplicarTamanho();
    }
});

// Alternar alto contraste
btnContraste.addEventListener('click', () => {
    body.classList.toggle('alto-contraste');
});
