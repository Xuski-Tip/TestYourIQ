<script setup>

</script>
<template>
<section class="section__wrapper">
    <div class="results">
        <h1 class="results__header">
        Ваш результат рассчитан: 

     </h1>
     <p class="results__spamText">
        <u>вы относитесь к 3%</u> респондентов, чей уровень интеллекта более чем на 
        15 пунктов отличается от среднего в большую или меньшую сторону! 
     </p>
     <h1 class="results__textSoon"> Скорее получите свой <br> результат!</h1>
     <div class="results__info-wrapper">
        <p class="results__info-text">
            В целях защиты персональных 
            данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона

        </p>
     </div>
     <p class="results__timer">
        Звоните скорее, запись доступна всего <br> <span>{{ formatTime }}</span> МИНУТ
     </p>
     <div class="results__call-wrapper" @click = 'fetchData'>
        <img class="results__call-img" src="/call.png" alt="">
        <p class="results__call-text">
            позвонить и прослушать <br>
            результат 
        </p>
     </div>
     <div class="users">
        <div v-for="(hero,index) in users.results" :key="index" class="users__item">
            <h1>Имя:{{ hero.name }} </h1>
            <h1>Рост: {{ hero.height }} </h1>
            <h1>Масса:{{ hero.mass }} </h1>
            <h1>Год рождения: {{ hero.birth_year }} </h1>
        </div>
     </div>
     <p class="results__footer">
        TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI,
     </p>

    </div>
</section>
</template>

<script>
export default {
  data() {
    return {
        users: [],
      duration: 10 * 60, 
      seconds: 10 * 60 
    };
  },
  computed: {
    formatTime() {
      const minutes = Math.floor(this.seconds / 60);
      const remainingSeconds = this.seconds % 60;
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
  },
  created() {
    this.startTimer();
  },
  methods: {
    fetchData() {
      fetch('https://swapi.dev/api/people')
        .then(response => {
          if (!response.ok) {
            throw new Error('Ошибка HTTP, статус ' + response.status);
          }
          return response.json();
        })
        .then(data => {
          this.users = data;
        })
        .catch(error => {
          console.error('Ошибка при загрузке данных:', error);
        });
    },
    startTimer() {
      this.timerInterval = setInterval(() => {
        if (this.seconds > 0) {
          this.seconds--;
        } else {
          this.stopTimer();
        }
      }, 1000); 
    },
    stopTimer() {
      clearInterval(this.timerInterval);
    }
  },
  destroyed() {
    clearInterval(this.timerInterval);
  }
}
</script>

<style scoped>
.users {
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.users__item {
    font-size: 12px;
    background-color: #EB1B00;
    width: 40%;
    text-align: start;
    margin: 5px;
}
.results__footer {
    margin-top: 131px;
    font-size: 7px;
    line-height: 9px;
    opacity: 0.5;
}
.results__call-text {
    font-family: 'Roboto';
    font-size: 15px;
    padding-left: 18px;
}
.results__call-wrapper {
    cursor: pointer;
    margin-top: 6px;
    text-align: start;
    padding: 20px 15px 20px 15px;
    background-color: #EB1B00;
    border-radius: 5px;
    display: flex;
    align-items: center;
}
.results__timer {
    font-size: 11px;
    color: #3BDE7C;
    line-height: 30px;
}
.results__timer span {
    font-size: 20px;
    line-height: 30px;
    color: #3BDE7C;
}
.results__info-wrapper {
    border-radius: 6px;
    background-color: #1C2741;
    padding: 15px 12px 10px 12px;
    margin-top: 12px;
}
.results__info-tex {
    font-family: 'Roboto';
    font-size: 8px;
    line-height: 14px;
}
.results__textSoon {
    font-family: 'PT Serif';
    font-size: 18px;
    line-height: 22px;
    color: #3BDE7C;
    margin-top: 22px;
    text-transform: uppercase;
}
.results__spamText {
    font-size: 14px;
    line-height: 18px;
    font-family: 'PT Serif';
    margin-top: 13px;
}
.results__header {
    margin-top: 15px;
    font-family: 'PT Serif';
    text-transform: uppercase;
   line-height: 16px;
   font-weight: bold;
   font-size: 16px;
}
.section__wrapper{
    text-align: center;
  display: flex;
  padding-left: 26px;
  padding-right: 26px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url("/resultsback.png") no-repeat center/cover;
}
</style>