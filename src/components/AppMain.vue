<script>
export default {
  data() {
    return {};
  },
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
      <button class="button bg-green mt-2">Read More</button>
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
</style>
