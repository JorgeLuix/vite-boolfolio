<template>
  <section id="inizio" class="inizio">
    <div class="contenuto-banner">
      <div class="contenuto-img">
        <img src="../assets/img/IMG_20230621_161807.jpg" alt="" />
      </div>
      <h1>Jorge Castillo</h1>
      <h2>Jr Full Stack Developer</h2>
    </div>
  </section>

  <section id="aboutme" class="aboutme" v-cloak>
  <div class="contenuto-section">
    <h2>About me</h2>
    <p><span>Ciao, sono Jorge Castillo,</span> 
    un giovane sviluppatore full stack appassionato di creare soluzioni innovative e coinvolgenti nella progettazione e nello sviluppo di applicazioni web moderne utilizzando tecnologie front-end e back-end.</p>

    <div class="fila">
      <!-- dati personali -->
      <div class="col">
        <h3>Dati Personali</h3>
        <ul>
          <li v-for="item in store.personalData" :key="item.label">
            <strong>{{ item.label }}</strong>
            {{ item.value }}
          </li>
        </ul>
      </div>

      <!-- interesi -->
      <div class="col">
        <h3>Interesi</h3>
        <div class="container-interesi">
          <div class="interesi" v-for="interest in store.interests" :key="interest.label">
            <i :class="'fa-solid ' + interest.icon"></i>
            <span>{{ interest.label }}</span>
          </div>
        </div>
      </div>
    </div>
    <button>
      Scarica CV <i class="fa-solid fa-download"></i>
      <span class="overlay"></span>
    </button>
  </div>
</section>

<section class="container-fluid bg-skills">
<div class="section container skill">
    <h2 class="text-uppercase text-center">Skills</h2>
    <transition-group name="fade" tag="div" class="grid-container">
      <div v-for="(item, index) in store.items" :key="index" class="grid-item">
        <img :src="item.image" :alt="item.name" class="logo-image" />
        <!-- <span class="logo-name">{{ item.name }}</span> -->
      </div>
    </transition-group>
  </div>
</section>
</template>

<script>
import { store } from "../store";
export default {
  name: "HomePage",
  data() {
    return {
        store,

    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
.inizio {
  background: linear-gradient(
      to top,
      rgba(30, 35, 38, 0.8),
      rgba(30, 35, 38, 1)
    ),
    url(../assets/img/fondo.jpg);
  background-size: cover;
  height: 100vh;
  color: #fff;
  display: flex;
  align-items: center;
}
.inizio .contenuto-banner {
  margin-top: 8rem!important;
  padding: 20px;
  background-color: $blueMario;
  max-width: 350px;
  margin: auto;
  text-align: center;
  border-radius: 40px;
}
.inizio .contenuto-banner img {
  margin-top: 40px;
  border: 10px solid #1cb698;
  display: block;
  width: 80%;
  margin: auto;
  border-radius: 100%;
}
.inizio .contenuto-banner h1 {
  margin-top: 40px;
  font-size: 42px;
  font-family: "Righteous";
}
.inizio .contenuto-banner h2 {
  font-size: 15px;
  font-weight: normal;
}
.inicio .contenido-banner .redes a:hover {
  background-color: #1cb698;
}
</style>
