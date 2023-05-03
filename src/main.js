import { nanoid } from 'nanoid';
import './style.css';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');
const btnCopy = document.querySelector('#copy-button');

passwordBtnEl.addEventListener('click', () => {
    const randomPassword = nanoid();
    displayPasswordEl.innerHTML = randomPassword;
});

btnCopy.addEventListener('click', () => {
    const range = document.createRange();
    range.selectNode(displayPasswordEl);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Copia o texto selecionado para a área de transferência
    document.execCommand('copy');

    // Remove a seleção de texto para que não fique marcada
    window.getSelection().removeAllRanges();

    // Exibe uma mensagem de confirmação
    alert('Texto copiado para a área de transferência!');
});
