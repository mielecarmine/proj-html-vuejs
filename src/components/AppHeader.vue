<script>
export default {
  data() {
    return {};
  },

  props: {
    links: Object,
  },

  created() {
    // console.log(this.links);
  },
};
</script>
<template>
  <div id="header">
    <div id="login" class="border-bottom border-dark">
      <div class="d-flex gap-3">
        <div class="d-flex gap-1">
          <font-awesome-icon class="icon" icon="fa-regular fa-envelope" />
          <span>Superhit Top Movie</span>
          <span class="special">** King Star **</span>
        </div>
        <div class="icons d-flex gap-3">
          <font-awesome-icon class="icon" icon="fa-brands fa-facebook" />
          <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
          <font-awesome-icon class="icon" icon="fa-brands fa-linkedin" />
          <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
          <font-awesome-icon class="icon" icon="fa-brands fa-google-plus-g" />
        </div>
      </div>
      <div class="d-flex gap-1">
        <font-awesome-icon class="icon" icon="fa-solid fa-lock" />
        <a href=""><span>Login</span></a>
      </div>
    </div>

    <div id="search" class="border-bottom border-dark">
      <img src="../assets/imgs/cropped-logo.png" alt="" />
      <div class="">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control bg-blue border-dark border-start-0"
            placeholder="Search"
          />
          <button
            class="btn btn-outline-secondary bg-green text-white"
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </div>

    <div id="nav">
      <div class="menu">
        <ul class="list-group list-group-horizontal gap-1">
          <!-- <li v-for="link in this.links" class="list-item">{{ link }}</li> -->
        </ul>
      </div>
      <div class="basket">
        <font-awesome-icon icon="fa-solid fa-basket-shopping" />
        <div class="bg-green">0</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../styles/general.scss";

#header {
  height: 200px;
  background-color: var(--blue);
  color: white;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .special {
    color: var(--green);
  }

  .icon {
    height: 0.8rem;
  }
}

.list-item {
  display: block;
  padding: 5px;
  text-decoration: none;
  font-weight: bold;
}

.basket {
  position: relative;
  div {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    position: absolute;
    bottom: 10px;
    left: 10px;
  }
}

#login {
  height: 20%;
}
#search {
  height: 50%;
}
#nav {
  height: 30%;
}
</style>
