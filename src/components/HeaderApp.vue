<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarNav" aria-controls="navbarNav" 
    aria-expanded="false" aria-label="Toggle navigation" :disabled="disableToggler"
      @click="toggleNavLinks">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div :class="{ 'collapse': !showNavLinks, 'navbar-collapse': true, 'text-muted': true }" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="(link, index) in menu" :key="index">
          <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
          <router-link :to="{ name: link.routeName }" class="nav-link">
                {{ link.label }}
          </router-link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
  export default {
    name: 'HeaderApp',
    data(){
      return {

        showNavLinks: false,
        disableToggler:false,

        menu: [
          {
            label: 'Home',
            routeName: 'home'
          },
          {
            label: 'Projects',
            routeName: 'projects'
          },
          {
            label: 'About Us',
            routeName: 'about'
          },
          {
            label: 'Contacts',
            routeName: 'contact'
          },
          
        ]
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

</style>