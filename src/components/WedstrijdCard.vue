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
.card-wrapper {
  margin: 30px 15px 15px 15px;
  width: 400px;
  height: 250px;
  background: rgb(255, 255, 255);
  border: 2px solid orange;
  color: black;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
}
.logo-team {
  display: flex;
  flex-direction: column;
}
.logo-team img {
  height: 75px;
  width: 130px;
}
</style>
