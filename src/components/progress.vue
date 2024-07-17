<template>
    <div class="progress">
      <img  :src="imageSrc" alt="a">
    </div>
    
</template>
<script>
  export default {
  props: {
    imageSrc: {
      type: String,
    },
  }
}
</script>
<style scoped>
.progress {
  margin-top: 17px;
}
</style>