<template>
  <div class="header-wrapper">
    <div class="image-placeholder"></div>
  </div>
</template>

<script>
export default {
  name: "HeaderSpelers",
};
</script>

<style>
.header-wrapper {
  width: 100%;
  height: 135px;
}
.image-placeholder {
  width: 80px;
  height: 110px;
  margin: 12.5px;
  -webkit-box-shadow: inset 4px 4px 15px 0px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: inset 4px 4px 7px 0px #000000;
}
</style>
