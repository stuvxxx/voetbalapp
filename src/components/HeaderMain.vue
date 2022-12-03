<template>
  <div class="header">
    <h1>FIT<br /><span class="zeven">7</span></h1>
  </div>
  <h2 class="header-title" id="under-title"></h2>
</template>

<script>
export default {
  name: "HeaderMain",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Orbitron:wght@400;799&display=swap");
.header {
  height: max-content;
}
.header h1 {
  margin: 10px 5px 0px 5px;
  font-size: 3em;
  line-height: 93%;
  color: rgb(255, 255, 255);
}
.zeven {
  font-size: 1.5em;
  color: rgba(255, 116, 47, 0.769);
}
.header-title {
  text-transform: uppercase;
  font-family: "Orbitron", sans-serif;
  letter-spacing: 8px;
}
</style>
