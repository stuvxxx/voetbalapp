<template>
  <div
    v-for="wedstrijd in wedstrijden"
    :key="wedstrijd.id"
    class="card-wrapper"
  >
    <div>
      {{ wedstrijd.thuis.team }} -
      {{ wedstrijd.uit.team }}
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
  display: flex;
  width: 400px;
  height: 250px;
  background: rgb(255, 255, 255);
  border: 2px solid orange;
  color: black;
  justify-content: center;
  flex: 0 0 auto;
}
</style>
