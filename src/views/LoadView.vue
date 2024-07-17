    
<script setup>

</script>
<template>
<section class="section__wrapper">
    <progressBar :imageSrc="dynamicImageSrc"></progressBar>
    <div class="question">
                    <h1>Обработка результатов
                    </h1>
    </div>
    <img src="/load.png" alt="">
    <p>Определение стиля мышления..................................................................</p>
  </section>
</template>

<script>

export default {
    // НЕ стал никуда отправлять запросы или еще че нибудь придумывать с оптимизацией приложения если это тут тупо не нужно извините
    mounted() {
    setTimeout(() => {
        window.location.href = 'http://localhost:5173/TestResults'
    }, 3000);
  },
    data() {
      return {
        dynamicImageSrc: '/Group19.png',
      }
    }
}
</script>
<style scoped>
.question {
    text-align: center;
  margin-top: 49px;
  margin-bottom: 33px;
}
.question h1 {
  font-size: 20px;
  line-height: 26.5px;
  color: #FFFFFF;
}
.section__wrapper{
  display: flex;
  padding-left: 22px;
  padding-right: 22px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url("/public/Group18.png") no-repeat center/cover;
}
.section__wrapper img {
    margin-bottom: 27px;
    animation: spin 4s linear infinite;
}
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.section__wrapper p {
    margin-bottom: 200px;
}
</style>