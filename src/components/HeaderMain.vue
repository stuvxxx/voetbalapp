<template>
  <div class="header">
    <h1>FIT<br /><span class="zeven">7</span></h1>
  </div>
</template>

<script>
export default {
  name: "HeaderMain",
};
</script>

<style scoped>
.header {
  height: max-content;
}
.header h1 {
  margin: 10px 5px 0px 5px;
  font-size: 4em;
  line-height: 93%;
  color: rgb(255, 255, 255);
  border: 2px solid rgba(255, 255, 255, 0.769);
}
.zeven {
  font-size: 2em;
  color: rgba(255, 116, 47, 0.769);
}
</style>
