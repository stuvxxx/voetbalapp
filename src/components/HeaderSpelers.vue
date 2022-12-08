<template>
  <div class="header-wrapper">
    <div class="image-placeholder" id="image-placeholder"></div>
    <div class="name-placeholder"><p id="name-placeholder"></p></div>
  </div>
</template>

<script>
export default {
  name: "HeaderSpelers",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Orbitron:wght@400;799&display=swap");
* {
  box-sizing: border-box;
}
.header-wrapper {
  width: 100%;
  display: flex;
}
.image-placeholder {
  background-color: #131313;
  min-width: 120px;
  min-height: 165px;
  margin: 12.5px;
  -webkit-box-shadow: inset 4px 4px 15px 0px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: inset 4px 4px 7px 0px #000000;
}
.name-placeholder {
  width: 100%;
  height: 100%;
}
.name-placeholder p {
  font-family: "Orbitron", sans-serif;
  font-size: 40px;
  font-weight: 800;
  padding-top: 40px;
  margin: 0px;
  opacity: 1;
}
</style>
