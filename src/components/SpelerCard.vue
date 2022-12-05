<template>
  <div
    v-for="speler in spelers"
    :key="speler.naam"
    class="speler-cards-wrapper"
  >
    <div class="speler-avatar-wrapper" @click="handleClick(speler.nickname)">
      <div class="image-wrapper" :id="speler.nickname"></div>
      <p>{{ speler.nickname }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpelerCard",
  props: ["spelers"],
  methods: {
    handleClick(x) {
      console.log("RUNNING: handleClick");
      document.getElementById(x).classList.toggle("large");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Orbitron:wght@400;799&display=swap");
.speler-avatar-wrapper {
  height: 68px;
  width: 48px;
  font-family: "Orbitron", sans-serif;
  font-size: 8px;
  margin: 5px;
}
.speler-avatar-wrapper p {
  margin: 1px 0 auto;
}
.image-wrapper {
  margin: 0 auto;
  height: 55px;
  width: 40px;
  -webkit-box-shadow: inset 4px 4px 15px 0px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 4px 4px 7px 0px #000000;
  animation-duration: 5s;
  transition: height 2s, width 2s;
}

.large {
  height: 110px;
  width: 80px;
}
</style>
