
<script setup>
    import progressBar from '../components/progress.vue';
    import {RouterLink} from 'vue-router'
</script>
<template>
<section class="section__wrapper">
            <progressBar :imageSrc="dynamicImageSrc"></progressBar>
            <div class="question">
                    <h1>Выберите цвет, который сейчас наиболее Вам приятен:
                    </h1>
            </div>
            <div  class="reinbow">
                <div  v-for="(item, index)  in rainBowAmount" :key="index" :style="ChangeColors" :class="{ 'active': activeIndex === index }"  @click="toggleActive(index)" class="renbow__container" :id="item">

                </div>
            </div>
            <RouterLink  to="/testSix"><button className="test__button">Далее</button></RouterLink>
    </section>
</template>

<script>
    export default {
    data() {
      return {
        rainBowAmount: ['item-1','item-2','item-3','item-4','item-5','item-6','item-7','item-8','item-9'],
        dynamicImageSrc: '/Group13.png',
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
#item-1 {
    background-color: #A8A8A8;
}
#item-2 {
    background-color: #0000A9;
}
#item-3 {
    background-color: #00A701;
}
#item-4 {
    background-color: #F60100;
}
#item-5 {
    background-color: #FDFF19;
}
#item-6 {
    background-color: #A95403;
}
#item-7 {
    background-color: #000000;
}
#item-8 {
    background-color: #850068;
}
#item-9 {
    background-color: #46B2AC;
}
.reinbow {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.renbow__container {
    height: 75px;
    /* flex: 1 1 calc(33.33% - 24px); */
    box-sizing: border-box;
    width: 75px;
    margin: 12px;
    background-color: red;
    cursor: pointer;
}
.renbow__container.active {
    border: 6px solid #FFC700;
    transition: all 0.5s;
}
.test__button {
  display: block;
  margin: 0 auto;
  margin-top: 34px;
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
.section__wrapper{
    padding-left: 26px;
    padding-right: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url("/Group18.png") no-repeat center/cover;
}
.question {
  margin-top: 101px;
  margin-bottom: 41px;
}
.question h1 {
    text-align: center;
  font-size: 19px;
  line-height: 31px;
  color: #FFFFFF;
}
</style>