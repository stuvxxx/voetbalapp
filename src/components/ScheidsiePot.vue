<template>
  <div class="stats-items-wrapper">
    <div class="pot-wrapper">
      Stand van de pot: <span class="geld-stand">170,-</span>
      <div class="pot-details" id="pot-details">
        <div class="pot-in">
          <h3>In:</h3>
          <p class="text-small">Tikkie 10/09/2022</p>
          <p>15x15 <span class="geld-in">225,-</span></p>
          <p class="text-small">Tikkie 10/10/2022</p>
          <p>12x15 <span class="geld-in">180,-</span></p>
          <p class="text-small">Tikkie 07/12/2022</p>
          <p>12x20 <span class="geld-in">240,-</span></p>
          <hr />
          <p>totaal <span class="geld-in">645,-</span></p>
        </div>
        <div class="pot-uit">
          <h3>Af:</h3>
          <p class="text-small">Thuiswedstrijden</p>
          <p><span class="geld-uit">320,-</span> 8x40</p>
          <p class="text-small">Jamal aflasting</p>
          <p><span class="geld-uit">70,-</span>1x30 1x40</p>
          <p class="text-small">Nw. ballen</p>
          <p><span class="geld-uit">85,-</span></p>
          <hr />
          <p><span class="geld-uit">475,-</span>totaal</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScheidsiePot",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Orbitron:wght@400;799&display=swap");

.stats-items-wrapper {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pot-wrapper {
  cursor: pointer;
  font-family: "Orbitron", sans-serif;
  width: 300px;
  border: 1px solid white;
  transition: height 1s;
}
.pot-details {
  display: flex;
  transition: opacity 1.5s;
}
.pot-in {
  width: 150px;
  text-align: left;
  margin-left: 5px;
}
.pot-in span {
  text-align: right;
}
.pot-uit {
  min-width: 150px;
  text-align: right;
}
.pot-uit span {
  text-align: left;
}
.geld-in {
  color: green;
}
.geld-uit {
  color: rgb(141, 8, 8);
}
.geld-stand {
  color: rgb(255, 117, 47);
}
p {
  margin: 0;
}
.text-small {
  font-size: 12px;
}
</style>
