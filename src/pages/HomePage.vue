<template>
  <Loading v-if="store.loading" />
  <div v-else class="container-fluid">
    <div class="container-fluid">
      <Carousel/>
    </div>
    <div class="title-page mx-auto mb-4 text-center">
      <h1>
        <span class="letter-1">M</span>
        <span class="letter-5">i</span>
        <span class="letter-3">e</span>
        <span class="letter-1">i</span><br>
        <span class="letter-5"> </span>
        <span class="letter-1">P</span>
        <span class="letter-4">r</span>
        <span class="letter-3">o</span>
        <span class="letter-4">g</span>
        <span class="letter-5">e</span>
        <span class="letter-1">t</span>
        <span class="letter-1">t</span>
        <span class="letter-5">i</span>
        <span class="letter-4"> </span>
      </h1>
    </div>
    <div class="row p-3">
      <Card v-for="project in store.projects" :project="project" />
    </div>
    <nav class="mt-2">
      <ul class="pagination d-flex justify-content-center pb-4">
        <li
          v-for="link in store.links"
          @click="changePage(link)"
          :class="{ active: link.active, disabled: link.url === null }"
          class="page-item"
        >
          <a class="page-link" href="#" v-html="link.label"></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Loading from "../components/Loading.vue";
import { store } from "../store";
import Carousel from '../components/Carousel.vue';
export default {
  name: "HomePage",
  components: {
    Card,
    Loading,
    Carousel,
  },
  data() {
    return {
      link: "http://localhost:8000/api/projects",
      projects: [],
      links: [],
      store,
    };
  },
  methods: {
    changePage(link) {
      if (link.url) {
        store.getProjects(link.url);
      } else {
        return;
      }
    },
  },
  created() {
    store.getProjects(this.link);
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
.title-page {
  padding: 0.5rem;
  border-radius: 5px;
  min-width: 300px;
  width: 100%;
  background-color: $blueMario;
  h1 {
    font-size: 2rem;
  }
}
.letter-1 {
  color: #e60012; 
}
.letter-2 {
  color: #0060ad;
}
.letter-3 {
  color: #46ad37;
}
.letter-4 {
  color: #fed200; 
}
.letter-5 {
  color: #009edb; 
}
</style>
