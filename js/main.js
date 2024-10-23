let userAnswers = [];

function nextSlide(nextId, answer) {
    if (answer) {
        userAnswers.push(answer);
    }
    const currentSlide = document.querySelector('.slide.active');
    const nextSlide = document.getElementById(nextId);

    if (currentSlide && nextSlide) {
        currentSlide.classList.add('prev');
        nextSlide.classList.add('next', 'active');

        setTimeout(() => {
            currentSlide.classList.remove('active', 'prev');
            nextSlide.classList.remove('next');
            updateProgress();
        }, 600); // Время перехода должно соответствовать времени в CSS
    }

    // Если это последний слайд, обновляем результаты
    if (nextId === 'slide5') {
        updateResults();
    }
}
    const startButton = document.getElementById('startButton');
    const sectionBlog = document.getElementById('blog');
    startButton.addEventListener('click',()=>{
        sectionBlog.classList.add('section-hidden');
    })
function updateResults() {
    let knowledgeLevel = "Неопределенно";
    let assetType = "Неизвестно";

    const tradingExperience = userAnswers[0]; // Оценка знаний
    const mainGoal = userAnswers[1]; // Основная цель

    console.log("Trading experience:", tradingExperience);
    console.log("Main goal:", mainGoal);

    // Проверяем, что оба ответа выбраны
    if (tradingExperience && mainGoal) {
        // Логика для определения уровня знаний и типа актива
        if (tradingExperience === 'beginner') {
            if (mainGoal === 'basics') {
                knowledgeLevel = "Новичок";
                assetType = "Акции";
            } else if (mainGoal === 'improve') {
                knowledgeLevel = "Начинающий трейдер";
                assetType = "Фондовый рынок";
            } else if (mainGoal === 'develop') {
                knowledgeLevel = "Стартер";
                assetType = "Валютный рынок";
            } else if (mainGoal === 'professional') {
                knowledgeLevel = "Начинающий инвестор";
                assetType = "Фондовый рынок";
            }
        } else if (tradingExperience === 'basic') {
            if (mainGoal === 'basics') {
                knowledgeLevel = "Начинающий трейдер";
                assetType = "Валютный рынок";
            } else if (mainGoal === 'improve') {
                knowledgeLevel = "Ученик";
                assetType = "Фондовый рынок";
            } else if (mainGoal === 'develop') {
                knowledgeLevel = "Продвинутый";
                assetType = "Деривативы";
            } else if (mainGoal === 'professional') {
                knowledgeLevel = "Профессионал";
                assetType = "Валютный рынок";
            }
        } else if (tradingExperience === 'intermediate') {
            if (mainGoal === 'basics') {
                knowledgeLevel = "Начинающий трейдер";
                assetType = "Деривативы";
            } else if (mainGoal === 'improve') {
                knowledgeLevel = "Продвинутый";
                assetType = "Валютный рынок";
            } else if (mainGoal === 'develop') {
                knowledgeLevel = "Стартер";
                assetType = "Фондовый рынок";
            } else if (mainGoal === 'professional') {
                knowledgeLevel = "Ученик";
                assetType = "Деривативы";
            }
        } else if (tradingExperience === 'advanced') {
            if (mainGoal === 'basics') {
                knowledgeLevel = "Продвинутый";
                assetType = "Деривативы";
            } else if (mainGoal === 'improve') {
                knowledgeLevel = "Профессионал";
                assetType = "Валютный рынок";
            } else if (mainGoal === 'develop') {
                knowledgeLevel = "Эксперт";
                assetType = "Акции";
            } else if (mainGoal === 'professional') {
                knowledgeLevel = "Мастер";
                assetType = "Фондовый рынок";
            }
        }
    }

    // Обновляем элементы на странице с результатами
    document.getElementById('knowledgeLevel').textContent = knowledgeLevel;
    document.getElementById('assetType').textContent = assetType;
}

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    totalSlides = slides.length;
    updateProgress();
});

function updateProgress() {
    const progressElement = document.querySelector('.progress');
    const progress = (userAnswers.length / (totalSlides - 2)) * 100;
    progressElement.style.width = progress + '%';
}


document.addEventListener('DOMContentLoaded', function () {
    // Function to create a cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
  
    // Function to get a cookie
    function getCookie(name) {
        const cname = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) === 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return "";
    }
  
    var cookieBanner = document.getElementById('cookie-banner');
    var acceptCookiesButton = document.getElementById('accept-cookies');
    var declineButton = document.getElementById('decline');
    var declineCookiesButton = document.getElementById('decline-cookies');
  
    // Check if the user has already accepted cookies
    if (getCookie("cookies_accepted") !== "true") {
        if (cookieBanner) cookieBanner.style.display = 'block';
    }
  
    // Handle the accept button click
    if (acceptCookiesButton) {
        acceptCookiesButton.addEventListener('click', function () {
            setCookie("cookies_accepted", "true", 365);
            if (cookieBanner) cookieBanner.style.display = 'none';
        });
    }
    if(declineCookiesButton) {
        declineCookiesButton.addEventListener('click', () =>{
            if (cookieBanner) cookieBanner.style.display = 'none';
        });
    }
    // Handle the decline button click
    if (declineButton) {
        declineButton.addEventListener('click', function () {
            if (cookieBanner) cookieBanner.style.display = 'none';
        });
    }
  });
function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Регулярное выражение для проверки email

    if (!name) {
        alert('Пожалуйста, введите ваше имя.');
        return false;
    }

    if (!email || !emailPattern.test(email)) {
        alert('Пожалуйста, введите корректный адрес электронной почты.');
        return false;
    }

    window.location.href = 'thankyou.html';
    return true;
}
