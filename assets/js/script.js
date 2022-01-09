// Handle range change
function registerRangeListeners() {
    const rangeInputs = document.querySelectorAll('.ranges .range-wrapper input');
    rangeInputs.forEach(input => {
        input.addEventListener('change', e => {
            let currentValueHolder = e.target.nextElementSibling;
            currentValueHolder.textContent = e.target.value + currentValueHolder.textContent.slice(-1);
        });
    })
}

// Handle FAQ plus/minus button click
function registerFAQListeners() {
    const FAQList = document.querySelector('.faq-list');
    const expandButtons = FAQList.querySelectorAll('.question button');
    expandButtons.forEach(button => {
        button.addEventListener('click', e => {
            if(button.textContent === '+') {
                closeOpenedAnswer();
            }
            button.textContent = button.textContent === '+' ? '-' : '+';
            button.parentElement.nextElementSibling.classList.toggle('closed');
        });
    });

    function closeOpenedAnswer() {
        const shownAnswer = FAQList.querySelector('.question .question-body:not(.closed)');
        if(shownAnswer) {
            shownAnswer.previousElementSibling.querySelector('button').textContent = '+';
            shownAnswer.classList.add('closed');
        }
    }
}

// Handle my talent plus/minus button click
function registerTalentListeners() {
    const talents = document.querySelectorAll('.talent-list li');
    const talentDescriptions = document.querySelectorAll('.talent-descriptions li');
    talents.forEach(element => {
        element.addEventListener('click', e => {
            if(!e.target.classList.contains('active')) {
                hideActiveTalent();

                e.target.classList.add('active');
                talentDescriptions[e.target.dataset.index].classList.remove('hidden');
            }
        });
    });

    function hideActiveTalent() {
        const activeTalent =  document.querySelector(`.talent-list .active`);
        if(activeTalent) {
            activeTalent.classList.remove('active');
            talentDescriptions[activeTalent.dataset.index].classList.add('hidden');
        }
    }
}

// Handle burger menu hide/close logic
function initBurgerMenu() {
    const burgerIcon = document.querySelector('header .burger img');
    const navMobile = document.querySelector('nav.mobile');

    burgerIcon.addEventListener('click', () => {
        navMobile.classList.remove('hidden');
    });

    navMobile.addEventListener('click', e => {
        if(e.currentTarget === e.target) {
            navMobile.classList.add('hidden');
        }
    });
}

// Code Execution
registerRangeListeners();
registerFAQListeners();
registerTalentListeners();
initBurgerMenu();