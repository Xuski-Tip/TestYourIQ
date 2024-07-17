
<script setup>
  import progressBar from '../components/progress.vue';
  import {RouterLink} from 'vue-router'
</script>
<template>
<section class="section__wrapper">
    <progressBar :imageSrc="dynamicImageSrc"></progressBar>

    <div class="image">
        <img src="/humans.png" alt="">
        <div class="image__container">
            <div v-for="(item, index) in items" :class="{ 'active': activeIndex === index }" @click="toggleActive(index)" class="image__items">
                {{ item }}
            </div>

        </div>
    </div>
    <RouterLink  to="/testTen"><button class="test__button">Далее</button></RouterLink>
      

  </section>
</template>

<script>
export default  {
    data() {
      return {
        items: ['1', '2','3','4'],
        dynamicImageSrc: '/Group16.png',
        activeIndex: null 
      }
    },
    methods: {
            toggleActive(index) {
                console.log(this.typeColors);
                this.activeIndex = index
        },
    }
}
</script>
<style scoped>
.image {
    margin-top: 91px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.image__items.active {
    border: 6px solid #FFC700;
}
.image__container {
    margin-top: 23px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}
.image__items {
    cursor: pointer;
    width: 41px;
    height: 44px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 20px;
    color: #0D0C11;
}
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
  display: block;
  margin: 0 auto;
  margin-top: 35px;
  margin-bottom: 25px;
  width: 189px;
  height: 41px;
  background-color: #DADADA;
  cursor: pointer;
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
  margin-top: 101px;
  margin-bottom: 41px;
}
.question h1 {
  font-size: 20px;
  line-height: 26.5px;
  color: #FFFFFF;
}
.section__wrapper{
    padding-left: 34px;
    padding-right: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url("/public/Group18.png") no-repeat center/cover;
}
</style>