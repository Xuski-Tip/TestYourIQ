<template>
    <section id="section2" class="info">
        <div class="info__wrapper">
            <h1>Профессиональный <br> IQ-тест позволяет не только определить коэффициент вашего интеллекта,<br> но и выработать список рекомендаций для повышения этого <br> показателя. </h1>
        </div>
    </section>
</template>
<style scoped>
    .info {
        background: url(image.png) no-repeat center/cover;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .info__wrapper {
        width: 250px;
        height: 230px;
        margin-top: 83px;
        margin-bottom: 28px;
        position: relative;
        text-align: center;
        display: flex;
        align-items: center;
    }
    .info__wrapper::after {
        content: '';
        background: url(left.png);
        width: 23px;
        height: 22px;
        position: absolute;
        left: -11px;
        top: -17px;
        z-index: 1;

    }
    .info__wrapper::before {
        content: '';
        width: 23px;
        height: 22px;
        background: url(right.png);
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 1;
    }
    .info__wrapper h1 { 
        font-weight: bold;
        font-family: 'Yeseva One';
        font-size: 18px;
        line-height: 23px;
        color: #FFFFFF;
        z-index: 1;
    }
</style>