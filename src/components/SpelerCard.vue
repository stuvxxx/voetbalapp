<template>
  <div
    v-for="speler in spelers"
    :key="speler.naam"
    class="speler-cards-wrapper"
  >
    <div class="speler-avatar-wrapper" @click="handleClick(speler.nickname)">
      <div class="image-wrapper" :id="speler.nickname"></div>
      <p class="player-name" :id="speler.nickname + 'n'">
        {{ speler.nickname }}
      </p>
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
      await new Promise((resolve) => setTimeout(resolve, 1500));
      cheatDiv.style.zIndex = "-2";
      console.log("ENDING: cheat");
    },
    handleClick(playerId) {
      console.log("RUNNING: handleClick");
      this.moveImg(playerId);
      this.moveName(playerId + "n");
      this.moveAvatars(playerId);
      this.cheat();
      console.log("ENDING: handleClick");
    },
    moveAvatars(playerId) {
      let avatars = document.getElementsByClassName("speler-avatar-wrapper");
      avatars = Array.from(avatars);
      avatars.map((x) => {
        console.log(x.firstChild);
        if (x.firstChild.id !== playerId) {
          x.style.transform = "translateY(600px)";
        }
      });
    },
    moveImg(playerId) {
      console.log("RUNNING: moveImg");
      const playerImage = document.getElementById(playerId);
      const placerholderHeaderImage =
        document.getElementById("image-placeholder");
      const rectHeaderImage = placerholderHeaderImage.getBoundingClientRect();
      const rectPlayerImage = playerImage.getBoundingClientRect();
      const xMove = rectHeaderImage.x - rectPlayerImage.x;
      const xMove2 = xMove + 3;
      const yMove = rectHeaderImage.y - rectPlayerImage.y;
      playerImage.classList.toggle("large");
      playerImage.style.transform =
        "translate(" + xMove2 + "px," + yMove + "px)";
      console.log("ENDING: moveImg");
    },
    moveName(name) {
      console.log("RUNNING: moveName");
      console.log(name);
      const playerName = document.getElementById(name);
      const placerholderName = document.getElementById("name-placeholder");
      const rectHeaderName = placerholderName.getBoundingClientRect();
      const rectPlayerName = playerName.getBoundingClientRect();
      const xMove = rectHeaderName.x - rectPlayerName.x;
      const yMove = rectHeaderName.y - rectPlayerName.y;
      playerName.classList.toggle("font-large");
      playerName.style.transform = "translate(" + xMove + "px," + yMove + "px)";
      //document.getElementById(name).innerHTML = "";
      console.log("ENDING: moveName");
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
  transition: transform 1.5s;
}
.speler-avatar-wrapper p {
  margin: 1px 0 auto;
  transition: font-size 1.5s, font-weight 1.5s, transform 1.5s;
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
  margin-top: 1px;
}
.font-large {
  font-size: 40px;
  font-weight: 800;
}
</style>
