<template>
  <div id="menu" class="row">
    <div>
      <p>Opção 1</p>
      <p>Opção 1</p>
      <p>Opção 1</p>
      <p>Opção 1</p>
      <p>Opção 1</p>
      <p>Opção 1</p>
      <p>Opção 1</p>
      <p>Opção 1</p>
      <p>Opção 1</p>
    </div>
    <div v-on:click="$parent.showMenu = false"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#menu {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  > div:nth-child(1) {
    background-color: gray;
    padding: 20px;
    display: inline-block;
    height: 100%;
  }
  > div:nth-child(2) {
    background-color: rgba(0, 0, 0, 0.3);
    height: 100%;
    width: 100%;
    display: inline-block;
  }
}
</style>