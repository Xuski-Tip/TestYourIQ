<template>
    <section class="results">
        <div class="results__wrapper">
            <p class="results__spamText">
                Также по результатам теста
            </p>
            <h1 class="results__spamText">
                <b>ВЫ ПОЛУЧИТЕ</b> подробные <b>СОВЕТЫ</b> по определению наиболее перспективной <b>ДЛЯ ВАШЕГО ТИПА интеллекта СФЕРЫ ДЕЯТЕЛЬНОСТИ,</b>
            </h1>
            <p class= 'results__spamText'>
                которая принесет вам скорейший финансовый результат.
            </p>
            <div class="results__flexContainer">
                <img class = "results__img" src="/public/325-01.png" alt="">
                <button class="results__button">пройти тест</button>
            </div>

        </div>
        
    </section>
</template>
<style scoped>
    .results__button {
            cursor: pointer;
        font-family: 'Merriweather';
        margin-bottom: 22px;
        color: #0D0C11;
        text-transform: uppercase;
        font-weight: bold;
        border: none;
        border-radius: 20px;
        width: 200px;
        height: 44px;
        background-color: #FFC700;
    }
    .results__flexContainer {
        margin-top: 35px;
        margin-bottom: 35px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .results__wrapper {
        padding: 38px 11px 0 11px;
    }
    .results__spamText {
        font-family: "PT Serif";
        color: #272727;
        line-height: 24px;
        font-size: 16px;
    }
    .results__spamText b {
        color: #272727;
    }
</style>