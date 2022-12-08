<template>
  <div
    @click="forceRerender()"
    class="cheatdiv"
    id="cheatDiv"
    :key="componentKey"
  ></div>
  <div
    v-for="speler in spelers"
    :key="speler.naam"
    class="speler-cards-wrapper"
    :id="componentKey"
  >
    <div
      :key="componentKey"
      class="speler-avatar-wrapper"
      @click="handleClick(speler.nickname)"
    >
      <div
        :key="componentKey"
        class="image-wrapper"
        :id="speler.nickname"
        :style="{ backgroundImage: `url(${getImage(speler.nickname)})` }"
      ></div>
      <p :key="componentKey" class="player-name" :id="speler.nickname + 'n'">
        {{ speler.nickname }}
      </p>
    </div>
  </div>
  <div
    @click="forceRerender()"
    :key="componentKey"
    class="player-details"
    id="player-details"
  >
    <p class="margin-details">Volledige naam: <span id="playerName"></span></p>
    <p>Leeftijd: <span id="playerAge"></span></p>
    <p>Positie: <span id="playerPos"></span></p>
    <p>Voet: <span id="playerVoet"></span></p>
    <p>Goals: <span id="playerGoals"></span></p>
    <p>Assists: <span id="playerAss"></span></p>
    <p>
      Bio:
      <span id="playerBio"></span>
    </p>
  </div>
</template>

<script>
import Marc from "../assets/fotos/marc2.jpg";
import Bas from "../assets/fotos/bas.jpg";
import Daniel from "../assets/fotos/daniel.jpg";
import Sjoerd from "../assets/fotos/sjoerd.jpg";
import Peppie from "../assets/fotos/pepijn.jpg";
import Joep from "../assets/fotos/joep.jpg";
import Oscar from "../assets/fotos/oscar.jpg";
import Jip from "../assets/fotos/jip.jpg";
import Tim from "../assets/fotos/tim.jpg";
import Lauran from "../assets/fotos/lauran.jpg";
import Pelle from "../assets/fotos/pelle.jpg";
import Yossi from "../assets/fotos/yossi.jpg";
import Isani from "../assets/fotos/isani.jpg";
//import { getCurrentInstance } from "vue";
export default {
  name: "SpelerCard",
  data() {
    return {
      componentKey: 0,
    };
  },
  props: ["spelers"],
  methods: {
    forceRerender() {
      console.log("CLICKED");
      this.componentKey += 1;
      console.log(this.componentKey);
    },
    getImage(speler) {
      if (speler == "Marc") {
        return Marc;
      }
      if (speler == "Bas") {
        return Bas;
      }
      if (speler == "Sjoerd") {
        return Sjoerd;
      }
      if (speler == "Daniel") {
        return Daniel;
      }
      if (speler == "Peppie") {
        return Peppie;
      }
      if (speler == "Joep") {
        return Joep;
      }
      if (speler == "Oscar") {
        return Oscar;
      }
      if (speler == "Jip") {
        return Jip;
      }
      if (speler == "Tim") {
        return Tim;
      }
      if (speler == "Lauran") {
        return Lauran;
      }
      if (speler == "Pelle") {
        return Pelle;
      }
      if (speler == "Yossi") {
        return Yossi;
      }
      if (speler == "Isani") {
        return Isani;
      }
    },
    async cheat() {
      console.log("RUNNING: cheat");
      const cheatDiv = document.getElementById("cheatDiv");
      cheatDiv.style.zIndex = "2";
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("ENDING: cheat");
    },
    handleClick(playerId) {
      console.log("RUNNING: handleClick");
      this.moveImg(playerId);
      this.moveName(playerId + "n");
      this.moveAvatars(playerId);
      this.addDetails(playerId);
      this.showDetails(playerId);
      this.cheat();
      console.log("ENDING: handleClick");
    },
    addDetails(playerId) {
      let player = this.spelers.find((x) => x.nickname == playerId);
      document.getElementById("playerName").innerHTML = player.naam;
      document.getElementById("playerAge").innerHTML = player.leeftijd;
      document.getElementById("playerPos").innerHTML = player.pos;
      document.getElementById("playerVoet").innerHTML = player.voet;
      document.getElementById("playerGoals").innerHTML = player.goals;
      document.getElementById("playerAss").innerHTML = player.assists;
      document.getElementById("playerBio").innerHTML = player.bio;
    },
    showDetails(playerId) {
      console.log("RUNNING: showDetails");
      console.log(playerId);
      let detailPage = document.getElementById("player-details");
      detailPage.style.zIndex = "+3";
      detailPage.style.opacity = "1";
      console.log("ENDING: showDetails");
    },
    moveAvatars(playerId) {
      let avatars = document.getElementsByClassName("speler-avatar-wrapper");
      avatars = Array.from(avatars);
      avatars.map((x) => {
        console.log(x.firstChild);
        if (x.firstChild.id !== playerId) {
          x.style.transform = "translateY(2000px)";
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
  height: 102px;
  width: 72px;
  font-family: "Orbitron", sans-serif;
  font-size: 12px;
  margin: 5px;
  cursor: pointer;
  transition: transform 3s;
}
.speler-avatar-wrapper p {
  margin: 1px 0 auto;
  transition: font-size 1.5s, font-weight 1.5s, transform 1.5s;
}
.image-wrapper {
  background-size: 165px;
  margin: 0 auto;
  height: 72.5px;
  width: 60px;
  -webkit-box-shadow: inset 4px 4px 15px 0px #131313,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 4px 4px 7px 0px #131313;
  animation-duration: 5s;
  transition: height 1.5s, width 1.5s, transform 1.5s, box-shadow 1.5s;
}
.large {
  height: 165px;
  width: 120px;
  box-shadow: none;
}

.player-name {
  margin-top: 1px;
}
.font-large {
  font-size: 55px;
  font-weight: 800;
}
.player-details {
  color: rgb(255, 117, 47);
  position: absolute;
  background: rgb(12, 11, 11);
  height: inherit;
  width: 100vw;
  margin-top: 165px;
  text-align: left;
  font-family: "Orbitron", sans-serif;
  font-size: 16px;
  opacity: 0;
  z-index: -3;
  transition: opacity 1.5s;
}

.player-details p {
  margin-left: 10px;
}
span {
  color: white;
}
.cheatdiv {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgb(221, 27, 27);
  opacity: 0;
  z-index: -2;
}
.margin-details {
  margin-top: 50px;
}
</style>
