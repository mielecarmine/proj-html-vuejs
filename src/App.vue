<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      header_links: [
        {
          text: "Home",
          url: "#",
          active: true,
          dropdown: [
            {
              text: "Home 1",
              url: "#",
              active: false,
            },
            {
              text: "Home 1",
              url: "#",
              active: false,
            },
            {
              text: "Home 1",
              url: "#",
              active: false,
            },
          ],
        },

        {
          text: "Celebrity",
          url: "#",
          active: false,
          dropdown: [
            {
              text: "Celebrity 1",
              url: "#",
              active: false,
            },
            {
              text: "Celebrity 1",
              url: "#",
              active: false,
            },
            {
              text: "Celebrity 1",
              url: "#",
              active: false,
            },
          ],
        },
        {
          text: "Movie",
          url: "#",
          active: false,
          dropdown: [
            {
              text: "Movie 1",
              url: "#",
              active: false,
            },
            {
              text: "Movie 1",
              url: "#",
              active: false,
            },
            {
              text: "Movie 1",
              url: "#",
              active: false,
            },
          ],
        },
        {
          text: "Page",
          url: "#",
          active: false,
          dropdown: [
            {
              text: "Page 1",
              url: "#",
              active: false,
            },
            {
              text: "Page 1",
              url: "#",
              active: false,
            },
            {
              text: "Page 1",
              url: "#",
              active: false,
            },
          ],
        },
        {
          text: "Shop",
          url: "#",
          active: false,
          dropdown: [
            {
              text: "Shop 1",
              url: "#",
              active: false,
            },
            {
              text: "Shop 1",
              url: "#",
              active: false,
            },
            {
              text: "Shop 1",
              url: "#",
              active: false,
            },
          ],
        },
        {
          text: "Blog",
          url: "#",
          active: false,
        },
        {
          text: "Contact us",
          url: "#",
          active: false,
        },
      ],
    };
  },

  components: { AppHeader, AppMain },
};
</script>

<template>
  <div class="arrow-up">
    <a href="#"><font-awesome-icon icon="fa-solid fa-chevron-up" /></a>
  </div>
  <app-header :links="header_links" />
  <app-main />
</template>

<style lang="scss">
@use "./styles/general.scss";

.arrow-up {
  background-color: var(--white);
  width: 40px;
  height: 40px;
  padding: 7px;
  color: black;
  text-align: center;
  position: fixed;
  left: 95%;
  top: 80%;
  z-index: 1;
  cursor: pointer;
}
</style>
