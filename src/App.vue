<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      header_links: {
        home_links: ["Home", "Home 2", "Home 3", "Home 4", "Home 5", "Home 6"],
        Celebrity: [
          "Celebrity",
          "Celebrity 2",
          "Celebrity 3",
          "Celebrity 4",
          "Celebrity 5",
          "Celebrity 6",
        ],
        Movie: ["Movie", "Movie 2", "Movie 3", "Movie 4", "Movie 5", "Movie 6"],
        Page: ["Page", "Page 2", "Page 3", "Page 4", "Page 5", "Page 6"],
        Shop: ["Shop", "Shop 2", "Shop 3", "Shop 4", "Shop 5", "Shop 6"],
        blog_link: "Blog",
        contact: "Contact Us",
      },
    };
  },

  components: { AppHeader, AppMain },
};
</script>

<template>
  <app-header :links="header_links" />
  <app-main />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
