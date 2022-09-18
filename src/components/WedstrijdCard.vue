<template>
  <div
    v-for="wedstrijd in wedstrijden"
    :key="wedstrijd.id"
    class="card-wrapper"
  >
    <div class="card-header">
      <div class="logo-team thuis"></div>
      <div class="score"></div>
      <div class="logo-team uit"></div>
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
  justify-content: center;
}
</style>
