<template>
  <div
    v-for="speler in spelers"
    :key="speler.naam"
    class="speler-cards-wrapper"
  >
    <div class="speler-avatar-wrapper">
      <div class="image-wrapper"></div>
      <p>{{ speler.nickname }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpelerCard",
  props: ["spelers"],
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Orbitron:wght@400;799&display=swap");
.speler-avatar-wrapper {
  border: 1px solid black;
  height: 60px;
  width: 45px;
  font-family: "Orbitron", sans-serif;
  font-size: 8px;
  margin: 5px;
}
.speler-avatar-wrapper p {
  margin: 1px 0 auto;
}
.image-wrapper {
  margin: 0 auto;
  border: 1px solid yellow;
  height: 48px;
  width: 30px;
}
</style>
