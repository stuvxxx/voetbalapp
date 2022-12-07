<template>
  <ScheidsiePot />
</template>

<script>
import ScheidsiePot from "@/components/ScheidsiePot.vue";
export default {
  name: "StatsView",
  components: {
    ScheidsiePot,
  },
  beforeMount() {
    document.getElementById("aap").innerHTML = "Stats";
  },
};
</script>
