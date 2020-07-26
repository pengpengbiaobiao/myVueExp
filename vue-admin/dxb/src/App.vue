<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import login from "./components/login.vue";
@Component({
  components: {
    login
  }
})
export default class App extends Vue {}
</script>
<style>
</style>