<template>
  <div id="app">
    <Header></Header>

    <input type="text" v-model="filtro" />

    <table>
      <template v-for="(linha, key) in api">
        <tr v-bind:key="key" v-if="linha.valor-0 > filtro">
          <td>{{ linha.data }}</td>
          <td>{{ linha.valor }}</td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  data() {
    return {
      api: [],
      filtro: 0,
    };
  },
  components: {
    Header,
  },

  created() {
    var xhttp = new XMLHttpRequest();
    var that = this;
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        that.api = JSON.parse(xhttp.responseText);
      }
    };
    xhttp.open(
      "GET",
      "https://api.bcb.gov.br/dados/serie/bcdata.sgs.1/dados?formato=json&dataInicial=23/10/2019&dataFinal=30/10/2019",
      true
    );
    xhttp.send();
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.row {
  display: flex;
  flex-flow: row;
}
</style>
