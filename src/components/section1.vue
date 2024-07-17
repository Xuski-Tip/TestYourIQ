<template>
      <section id="section1" class="startTest">
        <p class="startTest__head">Пройдите точный и быстрый</p>
        <h1 class="startTest__info" >Тест на определение <br> IQ</h1>
        <button class="startTest__button">Пройти тест</button>
        <p class="startTest__text"><span>И получите рекомендации 
          по развитию своего интеллекта </span>
              и улучшению финансового благосостояния и личной жизни
        </p>
        <img src="/public/Group 3.png" alt="">
        <a class="startTest__link" href="#">Подробнее</a>
      </section>
</template>
<style scoped>
.startTest__link {
    display: block;
    font-size: 8px;
    padding-bottom: 11px;
    font-family: 'PT Serif'
  }
  img {
    width: 16px;
    height: 16px;
    padding-bottom: 3px;
    display: block;
    margin: 0 auto;
  } 
  a {
    text-decoration: none;
    color: #FFFFFF;
  }
  .startTest__head {
    font-family: 'PT Serif';
    line-height:23.85px;
    padding-top: 27px;
    font-size: 18px;
    margin-bottom: 20px
  }
  .startTest__text {
    font-family: 'PT Serif';
    font-size: 15px;
    padding-bottom: 11px;
  }
  .startTest__text span {
    color: #FFC700;
  }
  .startTest__button {
    cursor: pointer;
    font-family: 'Merriweather';
    margin-bottom: 22px;
    color: #0D0C11;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    width: 190px;
    height: 41px;
    background-color: #FFC700;
  }
  .startTest__info {
    text-transform: uppercase;
    color: #FFC700;
    font-size: 30px;
    padding-bottom: 150px;
    line-height: 
    34.65px;
    font-family: 'Yeseva One'

  }
  section {
    background: url(rain_bk.png);
    text-align: center;
    background-position-y: 15%;
    background-position-x: 50%
  }
  @media (max-width: 320px) {
    section {
      background-position-y: 0%
    }
  }
</style>