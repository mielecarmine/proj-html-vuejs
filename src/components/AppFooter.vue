<script>
export default {
  data() {
    return {};
  },

  props: {
    movies: Array,
    informations: Array,
    posts: Array,
  },
};
</script>
<template>
  <section class="bg-img mt-5">
    <div class="transbox">
      <div class="container">
        <div class="d-flex align-items-center">
          <div
            class="d-flex align-items-center flex-grow-1 justify-content-between"
          >
            <div class="about-us">
              <h5 class="fw-bold">About Us</h5>
              <span
                >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                nemo quibusdam non totam iure ab.</span
              >
            </div>
            <div class="links">
              <h5 class="fw-bold">Movie Category</h5>
              <ul class="p-0">
                <li class="mb-4" v-for="link in movies">
                  <a :href="link.url">{{ link.text }}</a>
                </li>
              </ul>
            </div>
            <div class="links">
              <h5 class="fw-bold">Informations</h5>
              <ul class="p-0">
                <li class="mb-4" v-for="link in informations">
                  <a :href="link.url">{{ link.text }}</a>
                </li>
              </ul>
            </div>
            <div class="posts">
              <h5 class="fw-bold">Recent posts</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.transbox {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.288);
}

.bg-img {
  height: 400px;
  background-image: url("../assets/imgs/ft-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

.links {
  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>
