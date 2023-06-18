<template>
  <div class="bg-main">
  <HeaderApp/>
  <main>
    <router-view></router-view>
  </main>
 <Footer/> 
</div>
</template>

<script>
import Footer from './components/Footer.vue';
import HeaderApp from './components/HeaderApp.vue';

  export default {
    name: 'App',
    components: { HeaderApp, Footer },
  }
</script>

<style lang="scss" scoped>
// @use './assets/styles/partials/variables' as *;
//  .bg-main {
//   background-color: $main-black;
//  }
</style>
