
<template>

    <div class="headerMenu">
        <div class="menu" :class="{ active: isActive }">   
          <div class="menu-btn" @click="toggleMenu" :class="{ active: isActive }">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul class="menu-list" :class="{active: isActive}">
              <div class="menu-list__wrapper">
              <li><a href="#" class="menu-item">Главная</a></li>
              <li><a href="#section2" class="menu-item">Информация о тесте</a></li>
              <li><a href="#" class="menu-item">Пройти тест</a></li>
              </div>
          </ul>
      </div>
    </div>

</template>

<script>
  export default {
    data() {
      return {
        isActive: false
      };
    },
    methods: {
      toggleMenu() {
        this.isActive = !this.isActive;
      }
    }
  }
</script>
<style scoped>
.headerMenu {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}
.menu-list {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 15px;
  background: #272727;
	transform: translateX(-100%);
	transition: transform 0.5s; 
}
.menu-list.active {
	transform: translateX(0);
}
.menu-list li {
	list-style-type: none;
}

@media (max-width: 320px) {
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
        position: relative;
        padding-left: 15px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        z-index: 50;
    }
    .menu.active {
        padding-right: 15px;
        justify-content: end;
    }
  .menu-btn {
	width: 30px;
	height: 30px;
	position: relative;
	z-index:11;
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
  background: #272727;
	transform: translateX(-100%);
	transition: transform 0.5s; 
    z-index: 10;
}
.menu-list.active {
	transform: translateX(0);
}
.menu-list li {
	list-style-type: none;
}
}
</style>