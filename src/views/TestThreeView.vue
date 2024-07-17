
<script setup>
 import progressBar from '../components/progress.vue';
  import formBar from '../components/formBar.vue';
  import {RouterLink} from 'vue-router'
</script>
<template>
    <section class="section__wrapper">
        <progressBar :imageSrc="dynamicImageSrc"></progressBar>

        <div class="question">
        <h1>Выберите лишнее: <br> 
        </h1>
        </div>
        <form>
        <formBar :message="message">
                
        </formBar>
        <RouterLink  to="/testFour"><button class="test__button">Далее</button></RouterLink>
        
        </form>
    </section>
</template>

<script>
  export default {
    components: {
      formBar
    },
    data() {
      return {
        message: ['Дом', "Шалаш", "Бунгало", "Скамейка", "Хижина"],
        dynamicImageSrc: '/Group11.png'
      }
    }
  }
</script>
<style scoped>
 a {
    text-decoration: none;
  }
.main-links {
  color: #8E8E8E;
      font-size: 16px;
      background-color: transparent;
      padding-left: 10px;
      padding-right: 10px;
}
.test__button {
  cursor: pointer;
  display: block;
  margin: 0 auto;
  margin-top: 29px;
  margin-bottom: 25px;
  width: 189px;
  height: 41px;
  background-color: #DADADA;
  font-size: 14px;
  font-weight: 'Merriweather';
  line-height: 17.6px;
  color: #8E8E8E;
  border-radius: 20px;
  text-transform: uppercase;

}
.test__button:hover {
  background-color: #FFC700;
  transition: all 0.5s;
  color: #0D0C11;
}
.main-links:hover  {
  color: #0D0C11;
  transition: all 0.5s;
}
    form {
          width: 100%;
      }
.question {
  margin-top: 42px;
  margin-bottom: 45px;
}
.question h1 {
    text-align: center;
  font-size: 20px;
  line-height: 31px;
  color: #FFFFFF;
}
.section__wrapper{

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url("/public/Group18.png") no-repeat center/cover;
}
</style>