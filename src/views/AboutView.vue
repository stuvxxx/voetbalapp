<template>
  <h1>About</h1>
</template>

<script>
export default {
  name: "AboutView",
  beforeMount() {
    document.getElementById("aap").innerHTML = "about";
  },
};
</script>
