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
  <div class="my-card">
    <img :src="buildImagePath(film.poster)" alt="" />
    <div class="details">
      <span>Details</span>
    </div>
    <div class="views">Views</div>
    <div class="rating d-flex gap-2 align-items-center">
      <font-awesome-icon class="special" icon="fa-solid fa-star" />
      <span>{{ film.rating }}/10</span>
    </div>
    <div class="text">
      <h4 class="fw-bold">{{ film.title }}</h4>
      <span
        ><span class="fs-5 fw-bold me-3">Category:</span
        >{{ film.category }}</span
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.my-card {
  position: relative;
  img {
    height: 600px;
    width: 100%;
    object-fit: cover;
    border-radius: 40px;
  }

  div {
    position: absolute;
  }

  .details,
  .views {
    padding: 10px;
    background-color: var(--blue);
    bottom: 8%;
    border-left: 0px;
  }

  .details {
    border-radius: 0 30px 30px 0;
  }

  .views {
    right: 0%;
    border-radius: 30px 0 0 30px;
  }

  .rating {
    top: 5%;
    right: 5%;
  }

  .text {
    padding: 30px;
    bottom: 50%;
    top: 50%;
  }
}
</style>
