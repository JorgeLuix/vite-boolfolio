<template>
  <div class="container-fluid">
    
    <header class="d-flex justify-content-center">
      <div class="head-container">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid d-flex justify-content-between">
            <a class="navbar-brand" href="#"><span class="text-uppercase text-primary fw-bold fs-3">Jorge</span></a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation" @click="showNavLinks = !showNavLinks">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div :class="{ 'collapse': !showNavLinks, 'navbar-collapse': true, 'text-muted': true }" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li> 
                  <a><router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
                  </a>
                </li>
                <li> 
                  <a><router-link class="nav-link" :to="{ name: 'portfolio' }">Portfolio</router-link>
                  </a>
                </li>
                <li> 
                  <a><router-link class="nav-link" :to="{ name: 'contact' }">Contatto</router-link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderApp",
  data() {
    return {
      showNavLinks: true,
      
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.head-container {
  background-color: $redMario;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
}
.head-container header {
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
}
.head-container nav a span{
  font-family: "Righteous";
}
.head-container header ul{
    display: flex;
    list-style: none;
}
.head-container header nav ul li a{
    text-align: none;
    color: #fff;
    margin: 0 15px;
    padding: 3px;
    transition: .5s;
    text-decoration: none;
}
.head-container header nav ul li a:hover{
    color: #1CB698;
}
.nav-responsive {
  background-color: #1cb698;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  display: none;
}

.logo {
  color: $main-mario;
  font-family: "Press Start 2P", cursive;
  padding-left: 30px;

  h4 {
    font-size: 1.2rem;
    border: 2px solid;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;
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
  color: $second-text-color;
  font-weight: 600;
}
.admin {
  padding-top: 20px;
}
ul {
  display: flex;
}

ul li {
  list-style: none;
}

ul li a {
  position: relative;
  display: block;
  //   text-transform: uppercase;
  margin: 10px 0;
  padding: 5px 10px;
  text-decoration: none;
  color: $blueMario;
  font-size: 18px;
  transition: 0.5s;
  z-index: 1;
}

ul li a:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top: 2px solid $blueMario;
  border-bottom: 2px solid $blueMario;
  transform: scaleY(2);
  opacity: 0;
  transition: 0.3s;
}

ul li a:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $blueMario;
  transform: scale(0);
  opacity: 0;
  transition: 0.3s;
  z-index: -1;
}

ul li a:hover {
  color: #fff;
}

ul li a:hover:before {
  transform: scaleY(1);
  opacity: 1;
}

ul li a:hover:after {
  transform: scaleY(1);
  opacity: 1;
}
</style>
