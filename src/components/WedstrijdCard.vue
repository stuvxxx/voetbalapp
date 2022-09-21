<template>
  <div
    v-for="wedstrijd in wedstrijden"
    :key="wedstrijd.id"
    class="card-wrapper"
  >
    <div class="card-header">
      <div class="logo-team thuis">
        <img :src="require(`@/assets/${wedstrijd.thuis.logo}`)" />
        {{ wedstrijd.thuis.team }}
      </div>
      <div class="score">
        {{ wedstrijd.uitslag.thuis }} - {{ wedstrijd.uitslag.uit }}
      </div>
      <div class="logo-team uit">
        <img :src="require(`@/assets/${wedstrijd.uit.logo}`)" />
        {{ wedstrijd.uit.team }}
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
  margin: 30px 15px 15px 15px;
  width: 400px;
  height: 250px;
  background: rgb(255, 255, 255);
  color: black;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  background-color: rgb(245, 243, 243);
}

.score {
  font-family: "Orbitron", sans-serif;
  font-weight: 800;
  align-self: center;
  font-size: 30px;
  color: rgba(0, 0, 0, 0.845);
}

.card-header {
  background-color: white;
  margin-top: 3px;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.943);
  font-family: "Orbitron", sans-serif;
  font-size: 10px;
  font-weight: 600;
  border-bottom: 2px dotted black;
}
.logo-team {
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

.logo-team.uit {
  justify-self: flex-start;
}
</style>
