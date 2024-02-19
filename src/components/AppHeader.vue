<script>
export default {
  data() {
    return {};
  },

  props: {
    links: Array,
  },

  created() {
    // console.log(this.links);
  },
};
</script>
<template>
  <div id="header">
    <div id="login" class="border-bottom border-dark">
      <span>sadas</span>
      <span>sadasd</span>
    </div>

    <div id="search" class="border-bottom border-dark">
      <span>sadas</span>
      <span>sadasd</span>
    </div>

    <div id="nav">
      <span>sadas</span>
      <span>sadasd</span>
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
