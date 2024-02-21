<script>
export default {
  data() {
    return {};
  },

  props: {
    film: Object,
  },

  methods: {
    buildImagePath(imageName) {
      const imageUrl = new URL("../assets/imgs/" + imageName, import.meta.url);
      return imageUrl.href;
    },
  },
};
</script>
<template>
  <div class="d-flex align-items-center gap-3 mb-2">
    <img :src="buildImagePath(film.poster)" alt="" />
    <div class="text">
      <h5>{{ film.title }}</h5>
      <span>{{ film.views }} Views</span>
      <div class="d-flex justify-content-between">
        <span>{{ film.release_date }}</span>
        <span>{{ film.length }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../styles/general.scss";

.d-flex {
  img {
    width: 70px;
    height: 70px;
  }

  .text {
    width: 100%;
  }
}
</style>
