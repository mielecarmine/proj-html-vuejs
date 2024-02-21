<script>
import AppCardMovie from "./AppCardMovie.vue";
import AppCardPreview from "./AppCardPreview.vue";
import { store } from "../store/index";

export default {
  data() {
    return {
      store,
    };
  },

  components: { AppCardMovie, AppCardPreview },
};
</script>
<template>
  <div class="wrapper">
    <div class="text text-center">
      <span class="fw-bold">Welcome to our movie site</span>
      <h1>OUR SPECIAL <span class="special">MOVIES</span></h1>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
        enim est ipsam ducimus deserunt. Aliquam illo placeat nostrum mollitia
        obcaecati? Ab cum, sunt natus dolores libero reprehenderit totam
        blanditiis dolore!
      </span>
      <button class="button bg-green mt-3">Read More</button>
    </div>
  </div>
  <div class="container">
    <!-- INFOS -->
    <div class="d-flex mt-5">
      <div class="infos">
        <h3 class="fw-bold">New Movie</h3>
        <span
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nisi
          provident!</span
        >
      </div>
      <div class="arrows d-flex align-self-center gap-3 special">
        <font-awesome-icon
          class="icon clickable"
          icon="fa-solid fa-chevron-left"
        />
        <font-awesome-icon
          class="icon clickable"
          icon="fa-solid fa-chevron-right"
        />
      </div>
    </div>
    <div class="row mt-5">
      <div v-for="film in store.new_movies_slider" class="col">
        <app-card-movie :film="film" />
      </div>
    </div>

    <div class="d-flex mt-5">
      <div class="infos">
        <h3 class="fw-bold">Movie Playlist</h3>
        <span
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nisi
          provident!</span
        >
      </div>
    </div>
    <div class="d-flex gap-5 mt-5">
      <div class="preview flex-grow-1">
        <iframe
          width="100%"
          height="500px"
          src="https://www.youtube.com/embed/dVBJ0Y7ov5Q?si=vU1sTkR76eP5Bk6z"
          title="YouTube video player"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div class="queue d-flex flex-column">
        <div class="heading mb-1">
          <h5 class="fw-bold">New Movie</h5>
          <span>Playing 24</span>
        </div>
        <div class="body overflow-scroll">
          <app-card-preview v-for="film in store.new_movies" :film="film" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../styles/general.scss";
.wrapper {
  background-image: url("../assets/imgs/slider.jpg");
  height: 650px;
  position: relative;
  .text {
    position: absolute;
    bottom: 40%;
    left: 45%;
    width: 30%;
  }
}

.infos {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 15px;
  border-left: 3px solid var(--green);
  border-bottom: 1px solid #333;
}

.icon {
  height: 20px;
  width: 20px;
  padding: 5px;
  border: 1px solid #333;
  border-radius: 50%;
}

.width {
  width: calc(100% / 3);
}

.queue {
  height: 500px;
  .heading,
  .body {
    background-color: var(--light-blue);
    padding: 20px;
  }
}
</style>
