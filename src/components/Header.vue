<template>
  <div id="header" class="row">
    <Menu v-if="showMenu"></Menu>

    <div class="row">
      <div v-on:click="showMenu = true">
        <icon>menu</icon>
      </div>
      <h1>Portal</h1>
    </div>

    <img src="../assets/logo.png" width="50px" alt="" />
    <img src="" alt="" />

    <div id="perfil" class="row">
      <img src="../assets/profile.jpeg" alt="" />
      <div>
        <p>Helbert Silva</p>
        <p>Agência 999 CC 988</p>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  components: { Menu },
};
</script>

<style lang="scss">
#header {
  background-color: gray;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  #perfil img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
}
</style>