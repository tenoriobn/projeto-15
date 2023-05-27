// Pega o botão
const btn = document.querySelector('.card__btn');

function createCard() {
    // Selecionar o elemento pai onde o <article> será adicionado
    const contentCards = document.querySelector('.content__cards');

    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        const dashboardPeriod = document.querySelectorAll('.dashboard__period a');

        dashboardPeriod.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
    
                dashboardPeriod.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
    
                const selectedPeriod = this.textContent.toLowerCase();
                contentCards.innerHTML = '';

                data.forEach(item => {
                    const { title, timeframes } = item;
    
                    if (timeframes && timeframes[selectedPeriod]) {
                        const { current, previous } = timeframes[selectedPeriod];
            
                        // Criar o elemento <article>
                        const article = document.createElement('article');
                        article.classList.add('card', title.toLowerCase());
            
                        // Criar o elemento <div> com a classe "card__container"
                        const cardContainer = document.createElement('div');
                        cardContainer.classList.add('card__container');
            
                        // Criar o elemento <div> com a classe "card__header"
                        const cardHeader = document.createElement('div');
                        cardHeader.classList.add('card__header');
            
                        // Criar o elemento <h2> com a classe "card__activity"
                        const cardActivity = document.createElement('h2');
                        cardActivity.classList.add('card__activity');
                        cardActivity.textContent = `${title}`;
            
                        // Criar o elemento <button> com a classe "card__btn"
                        const cardBtn = document.createElement('button');
                        cardBtn.classList.add('card__btn');
            
                        // Criar o elemento <div> com a classe "card__body"
                        const cardBody = document.createElement('div');
                        cardBody.classList.add('card__body');
            
                        // Criar o elemento <h3> com a classe "card__hours"
                        const cardHours = document.createElement('h3');
                        cardHours.classList.add('card__hours');
                        cardHours.textContent = `${current}hrs`;
            
                        // Criar o elemento <p> com a classe "card__active-period"
                        const cardActivePeriod = document.createElement('h3');
                        cardActivePeriod.classList.add('card__active-period');

                        const activePeriod = selectedPeriod === 'weekly' ? 
                        `Last Week - ${previous}hrs` : (selectedPeriod === 'daily' ? 
                        `Yesterday - ${previous}hrs` : `Last Month - ${previous}hrs`);
                        
                        cardActivePeriod.textContent = activePeriod;
                        // Adicionar o elemento <article> ao elemento pai <section> "content__cards"
                        contentCards.appendChild(article);
            
                        // Adicionar o elemento <div> "card__container" ao elemento <article>
                        article.appendChild(cardContainer);
            
                        // Adicionar o elemento <div> "card__header" ao elemento <div> "card__container"
                        cardContainer.appendChild(cardHeader);
                        // Adicionar o elemento <h2> e o elemento <button> ao elemento <div> "card__header"
                        cardHeader.appendChild(cardActivity);
                        cardHeader.appendChild(cardBtn);
            
                        // Adicionar o elemento <div> "card__body" ao elemento <div> "card__container"
                        cardContainer.appendChild(cardBody);
                        // Adicionar o elemento <h3> e o elemento <p> ao elemento <div> "card__body"
                        cardBody.appendChild(cardHours);
                        cardBody.appendChild(cardActivePeriod);
                        
                        hoverEffect(cardBtn);
                    }
                })
            })
        })

        const initialOption = 'weekly';
        const initialLink = Array.from(dashboardPeriod).find(link => link.textContent.toLowerCase() === initialOption);
        
        if(initialLink) {
            initialLink.click();
        }
    })
    .catch(error => console.error('Erro ao carregar dados do arquivo JSON:', error));
}

createCard();

function hoverEffect(btn) {
    // Pega a parte do card que está sendo aplicado o hover
    const cardContainer = btn.closest('.card__container');

    // Adiciona um ouvinte de evento ao botão para detectar o hover
    btn.addEventListener('mouseover', () => {
        cardContainer.classList.add('hovered');
    });

    btn.addEventListener('mouseout', () => {
        cardContainer.classList.remove('hovered');
    });
}






/*

1º Criar os cards de maneira dinâmica


*/