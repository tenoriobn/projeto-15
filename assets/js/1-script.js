// Pega o botão
const btn = document.querySelector('.card__btn');
// Pega a parte do card que está sendo aplicado o hover
const cardContainer = btn.closest('.card__container');

// Adiciona um ouvinte de evento ao botão para detectar o hover
btn.addEventListener('mouseover', () => {
    cardContainer.classList.add('hovered');
});

btn.addEventListener('mouseout', () => {
    cardContainer.classList.remove('hovered');
});