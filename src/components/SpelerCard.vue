<template>
  <div
    v-for="speler in spelers"
    :key="speler.naam"
    class="speler-cards-wrapper"
  >
    <div class="speler-avatar-wrapper" @click="handleClick(speler.nickname)">
      <div class="image-wrapper" :id="speler.nickname"></div>
      <div class="player-name">{{ speler.nickname }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpelerCard",
  props: ["spelers"],
  methods: {
    async cheat() {
      console.log("RUNNING: cheat");
      const cheatDiv = document.getElementById("cheatDiv");
      cheatDiv.style.zIndex = "2";
      await new Promise((resolve) => setTimeout(resolve, 1600));
      cheatDiv.style.zIndex = "-2";
      console.log("ENDING: cheat");
    },
    handleClick(playerId) {
      console.log("RUNNING: handleClick");
      this.moveImg(playerId);
      console.log("RUNNING: toggleCheat");
      this.cheat();
      console.log("ENDING: toggleCheat");
      console.log("ENDING: handleClick");
    },
    moveImg(playerId) {
      console.log("RUNNING: moveImg");
      const playerImage = document.getElementById(playerId);
      const placerholderHeaderImage =
        document.getElementById("image-placeholder");
      const rectHeaderImage = placerholderHeaderImage.getBoundingClientRect();
      const rectPlayerImage = playerImage.getBoundingClientRect();
      console.log(rectHeaderImage);
      console.log(rectPlayerImage);
      const xMove = rectHeaderImage.x - rectPlayerImage.x;
      const xMove2 = xMove + 3;
      console.log("X: " + xMove);
      const yMove = rectHeaderImage.y - rectPlayerImage.y;
      console.log("Y: " + yMove);
      playerImage.classList.toggle("large");
      playerImage.style.transform =
        "translate(" + xMove2 + "px," + yMove + "px)";
      console.log("ENDING: moveImg");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Orbitron:wght@400;799&display=swap");
* {
  box-sizing: border-box;
}
.speler-avatar-wrapper {
  height: 68px;
  width: 48px;
  font-family: "Orbitron", sans-serif;
  font-size: 8px;
  margin: 5px;
  cursor: pointer;
}
.speler-avatar-wrapper p {
  margin: 1px 0 auto;
}
.image-wrapper {
  background: crimson;
  margin: 0 auto;
  height: 55px;
  width: 40px;
  -webkit-box-shadow: inset 4px 4px 15px 0px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 4px 4px 7px 0px #000000;
  animation-duration: 5s;
  transition: height 1.5s, width 1.5s, transform 1.5s, box-shadow 1.5s;
}
.large {
  height: 110px;
  width: 80px;
  box-shadow: none;
}
.player-name {
  margin: 1px auto;
}
</style>
