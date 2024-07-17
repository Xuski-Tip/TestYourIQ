<script setup>
import { RouterLink, RouterView } from 'vue-router'
import burger from './components/burger.vue';
</script>

<template>
  <div class="wrapper">
    <header>
      <burger></burger>
      <div class="chekTest" :class="{active:isActive}">
        <img class="chekTest__img" src="/rain_bk3.png" alt="">
        <RouterLink @click="toggleMenu" to="/">
          <h1 ref="Text" class="chekTest__text" >тест на определение IQ</h1>
        </RouterLink>
      </div>
      <nav :class="{ active: isActive }" >
        <RouterLink  to="/"><span class="main-links">Главное</span></RouterLink>
        <span class="main-links"><a href="#section2" class="menu-item">Информация о тесте</a></span>
        <RouterLink @click="toggleMenu" to="/testOne"><span class="main-links">Пройти тест</span></RouterLink>
      </nav>
    </header>
  <RouterView />
  </div>
</template>
<script>
  export default { 
    data() {
      return {
        isActive: false,
      };
    },
    mounted() {
      const element = this.$refs.Text;
      const currentPath = window.location.pathname;
      if(currentPath === '/TestResults') {
        element.textContent = 'Готово!';
        this.isActive = !this.isActive
        element.style.fontSize = '20px'
        element.style.paddingLeft = '24px'

      }
      console.log(element , currentPath);
    },
    methods: {
      toggleMenu() {
        this.isActive = !this.isActive;
      }
    }
  }
</script>
<style scoped>
  .chekTest {
    width: 100%;
    position: absolute;
    display: none;
    right: 23px;
    top: 0;
  }
  .chekTest__img {
    padding: 0 9px 0 9px;
  }
  .chekTest.active {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .chekTest__text {
    cursor: pointer;
    text-transform: uppercase;
    font-family: 'Yeseva One';
    color: #FFC700;
    font-size: 12px;
  }
  .menu {
    display: none;
  }
  .menu-item {
      text-decoration: none;
      font-size: 16px;
      color: #FFFFFF;
    }
    .menu-item:hover {
      transition: all 1s;
      color: #F4CE0C;
    }
  header {
    position: relative;
    height: 50px;
    background-color: #181818;
    box-shadow: rgb(0, 0, 0, 0.25);
  }
  .menu-btn {
    display: none;
  }
  nav {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav.active {
    display: none;
  }
  a {
    text-decoration: none;
  }
  .main-links {
      color: #FFFFFF;
      font-size: 16px;
      background-color: transparent;
      padding-left: 10px;
      padding-right: 10px;
  }
  .main-links:hover {
      color: #FFC700;   
      transition: all 1s;
  }
  .wrapper {
    max-width: 400px;
    min-width: 320px;
    margin: 0 auto;
  }
  @media (max-width: 320px) {
    .chekTest {
      width: 70%;
    }
    .menu-item {
      text-decoration: none;
      font-size: 16px;
      color: #FFFFFF;
      text-transform: uppercase;
    }
    .menu-item:hover {
      color: #F4CE0C;
    }
    .menu-list__wrapper {
      margin-top: 120px;
    }
    .menu-list__wrapper li {
      margin-bottom: 27px;
    }
    .menu { 
      display: block;
    }
    .menu-btn {
      display: block;
      margin: 10px;
    }
    nav {
      display: none;
    }
  .menu-btn {
	width: 30px;
	height: 30px;
	position: relative;
	z-index:2;
	overflow: hidden;
}
.menu-btn span {
	width: 24px;
	height: 3px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #DADADA;
	transition: all 0.5s;
}
.menu-btn span:nth-of-type(2) {
	top: calc(50% - 5px);
}
.menu-btn span:nth-of-type(3) {
	top: calc(50% + 5px);
}
.menu-btn.active span:nth-of-type(1) {
	top: 50%;
  transform: translate(-50%, 0%) rotate(45deg);  
  background-color: #FFC700;

}
.menu-btn.active span {
  width: 28px;
}
.menu-btn.active span:nth-of-type(3) {
  top: 50%;
  transform: translate(-50%, 0%) rotate(-45deg);
  background-color: #FFC700;

}
.menu-btn.active span:nth-of-type(2) {
  opacity: 0;
}
.menu-list {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 15px;
  background-color: #272727;
	transform: translateX(-100%);
	transition: transform 0.5s; 
}
.menu-list.active {
	transform: translateX(0);
}
.menu-list li {
	list-style-type: none;
}
  }
</style>
