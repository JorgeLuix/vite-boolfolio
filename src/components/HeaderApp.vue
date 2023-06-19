<template>
  <div class="container-fluid">
      <header class="d-flex justify-content-center">
          <div class="head-container">
              <nav class="d-flex align-items-center justify-content-between">
                  <div class="logo">
                      <h4 class="m-0">Portfolio</h4>
                  </div>
                  <div class="navlinks d-flex gap-2">
                      <li> <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link></li>
                      <li> <router-link class="nav-link" :to="{ name: 'contact' }">Contatto</router-link></li>
                      <li> <a class="nav-link" href="http://localhost:8000">Admin</a></li>
                  </div>
              </nav>
          </div>
      </header>
  </div>
</template>

<script>
  export default {
    name: 'HeaderApp',
    data(){
      return {

        showNavLinks: false,
        disableToggler:false,

      }
    },
    methods: {
      toggleNavLinks() {
        this.showNavLinks = !this.showNavLinks;
      }
    }
  }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.head-container {
    background-color: $redMario;
    padding: 1rem;
    margin-top: 10px;
    margin-bottom: 5px;
    width: 100%;
    
}

nav {
    li {
        list-style: none;
    
    }
}

.logo {
    color: $main-mario;
    font-family: 'Press Start 2P', cursive;

    h4 {
        font-size: 1.2rem;
        border: 2px solid;
        padding: 10px;
        border-radius: 30px;
        cursor:pointer;
    }

    img {
        width: 100px;
        border-radius: 10px;
    }
}

.router-link-active {

    color: $gialloMario !important;

}

.nav-link {
    color: $second-text-color
}
</style>