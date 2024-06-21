const valorCertas = document.getElementById('valorCertas');
const valorErradas = document.getElementById('valorErradas');

const plusButtonCertas = document.getElementById('plus');
const minusButtonCertas = document.getElementById('minus');

const plusButtonErradas = document.getElementById('plusErradas');
const minusButtonErradas = document.getElementById('minusErradas');

const resetButton = document.getElementById('reset');

const total = document.getElementById('total');
const porcentagem = document.getElementById('porcentagem');


const updateValorCertas = () => {
    valorCertas.innerHTML = countCertas;
}

const updateValorErradas = () => {
    valorErradas.innerHTML = countErradas;
}

const updateValorTotal = () => {
    total.innerHTML = countTotal;
}

const updateValorPorcentagem = () => {
    porcentagem.innerHTML = countPorcentagem;
}

let countTotal = 0;
let countPorcentagem = 0;

let countCertas = 0;
let countErradas = 0;

let intervalIdCertas = 0;
let intervalIdErradas = 0;

function updateColor() {
    const numberValue = parseInt(porcentagem.textContent, 10);
    porcentagem.classList.remove("porcentagemBoa", "porcentagemMedia", "porcentagemRuim");


    if (numberValue > 70) {
        porcentagem.classList.add("porcentagemBoa");
    } else if (numberValue >= 50 && numberValue <= 70) {
        porcentagem.classList.add("porcentagemMedia");
    } else if (numberValue == 0) {
        porcentagem.classList.add("porcentagem");
    } else {
        porcentagem.classList.add("porcentagemRuim");
    }

}


plusButtonCertas.addEventListener('mousedown', () => {
    intervalIdCertas = setInterval(() => {
        countCertas += 1;
        updateValorCertas();
        contarTotal();
        calcularPorcentagem();
    }, 60);
});

minusButtonCertas.addEventListener('mousedown', () => {
    if (countCertas > 0) {
        intervalIdCertas = setInterval(() => {
            countCertas -= 1;
            updateValorCertas();
            contarTotal();
            calcularPorcentagem();
        }, 60);
    }

});


plusButtonErradas.addEventListener('mousedown', () => {
    intervalIdErradas = setInterval(() => {
        countErradas += 1;
        updateValorErradas();
        contarTotal();
        calcularPorcentagem();
    }, 60);
});

minusButtonErradas.addEventListener('mousedown', () => {
    if (countErradas > 0) {
        intervalIdErradas = setInterval(() => {
            countErradas -= 1;
            updateValorErradas();
            contarTotal();
            calcularPorcentagem();
        }, 60);
    }
});

resetButton.addEventListener('click', () => {
    countCertas = 0;
    countErradas = 0;
    countTotal = 0;
    countPorcentagem = 0;
    updateValorCertas();
    updateValorErradas();
    updateValorTotal();
    updateValorPorcentagem();
    porcentagem.classList.add("porcentagem");


});

function contarTotal() {
    countTotal = countErradas + countCertas;
    updateValorTotal();
};

function calcularPorcentagem() {
    countPorcentagem = ((countCertas * 100) / countTotal).toFixed();
    updateValorPorcentagem();
    updateColor();
}


document.addEventListener('mouseup', () => clearInterval(intervalIdCertas));
document.addEventListener('mouseup', () => clearInterval(intervalIdErradas));