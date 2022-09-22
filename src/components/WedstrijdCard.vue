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
  width: 350px;
  height: 250px;
  color: black;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
}

.score {
  font-family: "Orbitron", sans-serif;
  font-weight: 800;
  align-self: center;
  font-size: 30px;
  color: rgba(0, 0, 0, 0.845);
}

.score :nth-child(1) {
  font-size: 10px;
  color: rgb(214, 139, 40);
}
.score :nth-child(2) {
  font-size: 30px;
  color: rgb(0, 0, 0);
  transform: translateY(-10px);
}

.card-header {
  background-color: white;
  margin: 20px 10px;
  margin-right: 15px;
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
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 100px;
  justify-content: center;
  align-content: center;
  padding-bottom: 5px;
}
.logo-team img {
  margin: 0 auto;
  width: 74px;
  height: 84px;
}
</style>
