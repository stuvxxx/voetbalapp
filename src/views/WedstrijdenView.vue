<template>
  <h1>Wedstrijden</h1>
  <div class="wedstrijd-wrapper">
    <WedstrijdCard :wedstrijden="wedstrijden" />
  </div>
</template>

<script>
import WedstrijdCard from "@/components/WedstrijdCard.vue";
export default {
  name: "WedstrijdenView",
  components: {
    WedstrijdCard,
  },
  data() {
    return {
      wedstrijden: [
        {
          id: 1,
          thuis: { team: "Zeeburgia 3", logo: "./assets/zeeburgia-logo.png" },
          uit: { team: "FIT 7", logo: "./assets/fit-logo.png" },
          datum: "04-09-2022",
          tijdstip: "11:30",
          uitslag: {
            thuis: 1,
            uit: 1,
          },
          goals: [
            {
              minuut: 44,
              score: "thuis",
              goalwie: "Ahmed",
            },
            {
              minuut: 65,
              score: "uit",
              goalwie: "e.d.",
              assistwie: "Fakkel",
            },
          ],
        },
        {
          id: 2,
          thuis: { team: "FIT 7", logo: "./assets/fit-logo.png" },
          uit: { team: "JOS 3", logo: "./assets/jos-logo.png" },
          datum: "11-09-2022",
          tijdstip: "15:15",
          uitslag: {
            thuis: 4,
            uit: 2,
          },
          goals: [
            {
              minuut: 25,
              score: "thuis",
              goalwie: "Bas",
              assistwie: "?",
            },
            {
              minuut: 35,
              score: "thuis",
              goalwie: "Invaller",
              assistwie: "?",
            },
            {
              minuut: 45,
              score: "uit",
            },
            {
              minuut: 60,
              score: "thuis",
              goalwie: "Oscar",
              assistwie: "?",
            },
            {
              minuut: 80,
              score: "thuis",
              goalwie: "Jip",
              assistwie: "?",
            },
            {
              minuut: 85,
              score: "uit",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.wedstrijd-wrapper {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
</style>
