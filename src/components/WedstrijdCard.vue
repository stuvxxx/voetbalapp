<template>
  <div
    v-for="wedstrijd in wedstrijden"
    :key="wedstrijd.id"
    class="card-wrapper"
  >
    <div class="card-wrapper-inside">
      <div class="card-header">
        <div class="logo-team thuis">
          <img :src="require(`@/assets/${wedstrijd.thuis.logo}`)" />
          {{ wedstrijd.thuis.team }}
        </div>
        <div class="score">
          <p>{{ wedstrijd.datum }}</p>
          <p>{{ wedstrijd.uitslag.thuis }} - {{ wedstrijd.uitslag.uit }}</p>
        </div>
        <div class="logo-team uit">
          <img :src="require(`@/assets/${wedstrijd.uit.logo}`)" />
          {{ wedstrijd.uit.team }}
        </div>
      </div>
      <div class="events-wrapper">
        <div
          v-for="goal in wedstrijd.goals"
          :key="goal.goalwie"
          class="score-wrapper"
        >
          <div class="score-thuis" v-if="goal.score == 'thuis'">
            {{ goal.goalwie }}
            <div class="minuten">`{{ goal.minuut }}</div>
            <div></div>
          </div>
          <div class="score-uit" v-if="goal.score == 'uit'">
            <div></div>
            <div class="minuten">`{{ goal.minuut }}</div>
            {{ goal.goalwie }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WedstrijdCard",
  props: ["wedstrijden"],
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Orbitron:wght@400;799&display=swap");
.card-wrapper {
  position: relative;
  margin: 20px;
  border: rgb(39, 37, 34) solid 5px;
  border-radius: 8px;
}

.card-wrapper::before {
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url("./assets/banner-img.jpg");
  z-index: -1;
  filter: brightness(3) grayscale(1) opacity(0.5) hue-rotate(360deg);
}

.card-wrapper-inside {
  margin: 15px 15px 15px 15px;
  width: 300px;
  height: 250px;
  color: black;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
}

.score {
  font-family: "Orbitron", sans-serif;
  font-weight: 800;
  align-self: center;
  color: rgba(0, 0, 0, 0.845);
}

.score :nth-child(1) {
  font-size: 10px;
  color: rgb(214, 139, 40);
}
.score :nth-child(2) {
  font-size: 15px;
  color: rgb(0, 0, 0);
  transform: translateY(-10px);
}

.card-header {
  background-color: white;
  margin-right: 15px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.943);
  font-family: "Orbitron", sans-serif;
  font-size: 12px;
  font-weight: 600;
  border-bottom: 3px solid rgba(0, 0, 0, 0.943);
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.943);
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  box-shadow: 10px 5px;
}
.logo-team {
  padding: 8px;
  display: flex;
  flex-direction: column;
  width: 100px;
  justify-content: center;
  align-content: center;
}
.logo-team img {
  margin: 0 auto;
  width: 64px;
  height: 74px;
}
.events-wrapper {
  margin: 10px auto;
  width: 300px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.568);
  border-radius: 8px;
  color: rgb(0, 0, 0);
  font-family: "Orbitron", sans-serif;
  font-size: 11px;
  font-weight: 600;
}
.score-wrapper {
  margin-top: 5px;
  border-bottom: 1px dotted rgba(0, 0, 0, 0.356);
}
.score-thuis {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.score-uit {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.minuten {
  position: absolute;
  transform: translateX(138px);
}
</style>
