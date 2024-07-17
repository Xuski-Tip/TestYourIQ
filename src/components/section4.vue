<template>
    <footer class="footer">
        <div class="footer__wrapper">
            <h1 class="footer__text">Прохождение теста займет у вас не более <span><b>12 минут</b></span>, а его <b>результаты</b> вы сможете <span>использовать <b>всю жизнь.</b></span> </h1>
            <div class="footer__flexContainer">
                <div class="footer__textContainer">
                    <h1>
                        Профессиональная интерпретация и детально <b>проработанные рекомендации</b> позволят вам качественно <b>изменить все аспекты своей жизни:</b> от финансового до любовного.
                    
                    </h1>
                </div>
                <button class="footer__button">Пройти тест</button>
                <img src="/public/Group 5.png" alt="">
            </div>
        </div>
    </footer>
</template>
<style scoped>
    .footer__button {
        margin-top: 33px;
        cursor: pointer;
        width: 200px;
        height: 44px;
        text-transform: uppercase;
        text-align: center;
        color: #FFFFFF;
        border: 1px solid  #FFFFFF ;
        border-radius: 50px;
        background-color: transparent;
    }
    .footer__textContainer {
        margin-top: 14px;
        border-radius: 20px;
        padding: 29px 15px 31px 12px;
        background-color: rgb(243, 243, 243, 0.8);
        overflow-y: auto;
    }
    .footer__flexContainer img {
        margin-top: 52px;
        margin-bottom: 13px;
    }
    .footer__textContainer h1 {
        font-family: 'Merriweather';
        word-break: break-all;
        color: #181818;
        font-size: 16px;    
    }
    .footer__textContainer h1 b {
        color: #181818;
        font-size: 16px;
    }
    .footer__flexContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .footer__wrapper {
        padding: 54px 11px 0 11px;
    }
    .footer {
        background: url(back.png) no-repeat center/cover;
    }
    .footer__text {
        font-family: 'Merriweather';
        font-size: 15px;
        line-height: 20px;
        color: #FFFFFF;
        width: 262px;
    }
    .footer__wrapper h1 span {
        color: #FFC700;
    }
    span b {
        color: #FFC700;
    }
</style>