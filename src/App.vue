<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

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
      menu_links: [
        {
          text: "All",
          url: "#",
          active: true,
        },
        {
          text: "Coming Soon",
          url: "#",
          active: false,
        },
        {
          text: "Latest Movie",
          url: "#",
          active: false,
        },
        {
          text: "Top Rating",
          url: "#",
          active: false,
        },
        {
          text: "TV Series",
          url: "#",
          active: false,
        },
      ],
      latest_news: [
        {
          title: "Actor The Concept Movie High Concept Theory See The Post",
          comments: 0,
          share: true,
          poster: "blog-150x150.jpg",
        },
        {
          title: "Actor The Concept Movie High Concept Theory See The Post",
          comments: 0,
          share: true,
          poster: "blog2-150x150.jpg",
        },
        {
          title: "Actor The Concept Movie High Concept Theory See The Post",
          comments: 0,
          share: true,
          poster: "blog3-150x150.jpg",
        },
        {
          title: "Actor The Concept Movie High Concept Theory See The Post",
          comments: 0,
          share: true,
          poster: "blog4-150x150.jpg",
        },
        {
          title: "Actor The Concept Movie High Concept Theory See The Post",
          comments: 0,
          share: true,
          poster: "blog5-150x150.jpg",
        },
      ],
      footer_links: [
        {
          title: "Movie Category",
          links: [
            {
              text: "English New Movie",
              url: "#",
            },
            {
              text: "Hindi All Movie",
              url: "#",
            },
            {
              text: "Latest Tamil Movie",
              url: "#",
            },
            {
              text: "New Top Rating Movie",
              url: "#",
            },
            {
              text: "Hornn New Movie",
              url: "#",
            },
            {
              text: "Animation New Movie",
              url: "#",
            },
          ],
        },
        {
          title: "Information",
          links: [
            {
              text: "Youtube Video Post",
              url: "#",
            },
            {
              text: "Actor Information",
              url: "#",
            },
            {
              text: "New Promotion",
              url: "#",
            },
            {
              text: "Latest Movie In English",
              url: "#",
            },
            {
              text: "Latest Flim Product",
              url: "#",
            },
            {
              text: "Video New Video",
              url: "#",
            },
          ],
        },
      ],
      footer_posts: [
        {
          poster: "blog-100x100.jpg",
          text: "Actor The Concept Movie High Concept Theory see",
          release: "April 14, 2020",
        },
        {
          poster: "blog2-100x100.jpg",
          text: "Actor The Concept Movie High Concept Theory see",
          release: "April 14, 2020",
        },
        {
          poster: "blog3-100x100.jpg",
          text: "Actor The Concept Movie High Concept Theory see",
          release: "April 14, 2020",
        },
      ],
    };
  },

  components: { AppHeader, AppMain, AppFooter },
};
</script>

<template>
  <div class="arrow-up">
    <a href="#"><font-awesome-icon icon="fa-solid fa-chevron-up" /></a>
  </div>
  <app-header :links="header_links" />
  <app-main :links="menu_links" :news="latest_news" />
  <app-footer :links="footer_links" :posts="footer_posts" />
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
