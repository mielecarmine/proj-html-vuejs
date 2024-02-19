<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      header_links: [
        "Home",
        "Celebrity",
        "Movie",
        "Page",
        "Shop",
        "Blog",
        "Contact us",
      ],
    };
  },

  components: { AppHeader },
};
</script>

<template></template>

<style lang="scss">
@use "./styles/general.scss";
</style>
