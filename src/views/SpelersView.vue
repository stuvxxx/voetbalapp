<template>
  <div class="spelers-wrapper">
    <HeaderSpelers />
    <SpelerCard :spelers="spelers" />
  </div>
</template>

<script>
import SpelerCard from "@/components/SpelerCard.vue";
import HeaderSpelers from "@/components/HeaderSpelers.vue";
export default {
  name: "SpelersView",
  components: {
    SpelerCard,
    HeaderSpelers,
  },
  data() {
    return {
      spelers: [
        {
          nickname: "Marc",
          naam: "Marc Zwiers",
          leeftijd: 37,
          foto: "",
          pos: "CV",
          voet: "Rechts",
          goals: 0,
          assists: 0,
          kaarten: 0,
          bio: "blablablablabla",
        },
        {
          nickname: "Daniel",
          naam: "Daniel Aw",
          leeftijd: "?",
          foto: "",
          pos: "VM",
          voet: "Rechts",
          goals: 0,
          kaarten: 0,
          bio: "blablablablabla",
        },
        {
          nickname: "Alex",
          naam: "Alexander Bulthuis",
          leeftijd: 42,
          foto: "",
          pos: "RB",
          voet: "Rechts",
          goals: 0,
          assists: 0,
          kaarten: 0,
          bio: "blablablablabla",
        },
        {
          nickname: "Sjoerc",
          naam: "Sjoerd Droger",
          leeftijd: "?",
          foto: "",
          pos: "LB",
          voet: "Rechts",
          goals: 0,
          assists: 0,
          kaarten: 0,
          bio: "blablablablabla",
        },
        {
          nickname: "Isani",
          naam: "Isani Franzua Martinez",
          leeftijd: "?",
          foto: "",
          pos: "LB, CV, VM",
          voet: "Rechts",
          goals: 0,
          assists: 0,
          kaarten: 0,
          bio: "blablablablabla",
        },
        {
          nickname: "Peppie",
          naam: "Pepijn Van Hulst",
          leeftijd: "?",
          foto: "",
          pos: "LV, LB, CV",
          voet: "Rechts",
          goals: 0,
          assists: 0,
          kaarten: 0,
          bio: "blablablablabla",
        },
        {
          nickname: "Joep",
          naam: "Joep Maenen",
          leeftijd: "?",
          foto: "",
          pos: "CV",
          voet: "Rechts",
          goals: 0,
          assists: 0,
          kaarten: 0,
          bio: "blablablablabla",
        },
        {
          nickname: "Oscar",
          naam: "Oscar Verheul",
          leeftijd: "?",
          foto: "",
          pos: "RV",
          voet: "Rechts",
          goals: 1,
          assists: 0,
          kaarten: 0,
          bio: "blablablablabla",
        },
        {
          nickname: "Jip",
          naam: "Jip Verwiel",
          leeftijd: "?",
          foto: "",
          pos: "VM, AM",
          voet: "Rechts",
          goals: 1,
          assists: 0,
          kaarten: 0,
          bio: "blablablablabla",
        },
        {
          nickname: "Bas",
          naam: "Bas Voorwinde",
          leeftijd: 39,
          foto: "",
          pos: "SP",
          voet: "Rechts",
          goals: 1,
          assists: 0,
          kaarten: 0,
          bio: "blablablablabla",
        },
        {
          nickname: "Tim",
          naam: "Tim Wagemakers",
          leeftijd: "?",
          foto: "",
          pos: "KP",
          voet: "Links",
          goals: 0,
          assists: 0,
          kaarten: 0,
          bio: "blablablablabla",
        },
        {
          nickname: "Lauran",
          naam: "Lauran Ypinga",
          leeftijd: "?",
          foto: "",
          pos: "AM, VM",
          voet: "Rechts",
          goals: 0,
          assists: 0,
          kaarten: 0,
          bio: "blablablablabla",
        },
        {
          nickname: "Metin",
          naam: "Metin van Zijl",
          leeftijd: "?",
          foto: "",
          pos: "AM, LV",
          voet: "Tweebenig",
          goals: 0,
          assists: 0,
          kaarten: 0,
          bio: "blablablablabla",
        },
        {
          nickname: "Tom",
          naam: "Tom Haarts",
          leeftijd: "?",
          foto: "",
          pos: "VM",
          voet: "Rechts",
          goals: 0,
          assists: 0,
          kaarten: 0,
          bio: "blablablablabla",
        },
        {
          nickname: "Pelle",
          naam: "Pelle Bast",
          leeftijd: "?",
          foto: "",
          pos: "RB, RV, VM",
          voet: "Rechts",
          goals: 0,
          assists: 0,
          kaarten: 0,
          bio: "blablablablabla",
        },
        {
          nickname: "Yossi",
          naam: "Yossi Bierman",
          leeftijd: 4,
          foto: "",
          pos: "AM",
          voet: "Links",
          goals: 0,
          assists: 0,
          kaarten: 0,
          bio: "blablablablabla",
        },
      ],
    };
  },
  beforeMount() {
    document.getElementById("aap").innerHTML = "spelers";
  },
};
</script>
<style scoped>
.spelers-wrapper {
  background-color: rgb(31, 30, 29);
  margin: 0 auto;
  width: 300px;
  height: 475px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
}
</style>
