<template>
  <div id="app" class="container">
    <div class="display-3">
      <img alt="Vue logo" src="./assets/logo.png" id="logo">
      What do you Meme
    </div>
    <Nav />
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
#logo { height: 50px;}
</style>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import '@/services/facebook';

export default {
  name: 'home',
  components: {
    Nav
  }
}
</script>