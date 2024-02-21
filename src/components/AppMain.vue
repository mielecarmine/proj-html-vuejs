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

  props: {
    links: Array,
    news: Array,
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
    <!-- MOVIE PREVIEW -->
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
  <div class="jumbo2 mt-2">
    <div class="text text-center">
      <span class="fw-bold special">COMING SOON MOVIE</span>
      <h1>MAX STILL</h1>
      <div>
        <h3>JON PLAYER <span class="special">&</span> EMILY ROSE</h3>
        <span class="fw-bold fs-5">THE COUNTDOWN IS FINISHED!</span>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="d-flex">
      <div class="infos">
        <h3 class="fw-bold">New Movie</h3>
        <span
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nisi
          provident!</span
        >
      </div>
    </div>
    <div class="menu d-flex gap-5 mt-3">
      <span
        class="link fw-bold fs-5"
        v-for="link in links"
        :class="link.active ? 'active' : ''"
        >{{ link.text }}</span
      >
    </div>
    <div class="row g-4 mt-3">
      <div class="col-4" v-for="film in store.new_movies">
        <app-card-movie :film="film" />
      </div>
    </div>
    <!-- LATEST NEWS -->
    <div class="d-flex mt-5">
      <div class="infos">
        <h3 class="fw-bold">Latest News</h3>
        <span
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nisi
          provident!</span
        >
      </div>
    </div>
    <!-- SUBSCRIBE -->
    <div class="subscribe mt-5">
      <img src="../assets/imgs/form-bg-1.png" alt="" />
      <div class="form d-flex justify-content-around">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Email Address" />
      </div>
      <button class="button">Subscribe</button>
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

.jumbo2 {
  background-image: url("../assets/imgs/coming-bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  height: 650px;
  position: relative;
  .text {
    position: absolute;
    bottom: 40%;
    left: 45%;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      background-color: var(--light-blue);
      padding: 10px 50px;
    }
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

// .width-3 {
//   width: calc(100% / 3);
// }

.queue {
  height: 500px;
  .heading,
  .body {
    background-color: var(--light-blue);
    padding: 20px;
  }
}

.menu {
  .link {
    &.active {
      color: var(--green);
    }

    &:hover {
      cursor: pointer;
      color: var(--green);
    }
  }
}

.subscribe {
  position: relative;

  img {
    width: 100%;
  }
  .form {
    width: 100%;
    position: absolute;
    bottom: 50%;

    input {
      background-color: inherit;
      padding: 10px 40px;
      border: 1px solid var(--white);
      border-radius: 40px;
      color: #b2c5b2;
    }
  }

  .button {
    position: absolute;
    left: 45%;
    right: 50%;
    bottom: 20%;
    background-color: var(--light-blue);
    padding: 10px 60px;
  }
}
</style>
