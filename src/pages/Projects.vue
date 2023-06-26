<template>
  <Loading v-if="store.loading" />
  <div v-else class="card container" style="width: 50rem;">
    <!-- <p> {{ JSON.stringify(store.project) }} </p> -->
        <h1 class="p-2">{{ store.project.name }}</h1>
        <img class="img-fluid" :src="store.project.image" alt="" />
      
    <div class="project-body">
      <div class="container">
        <div class="py-2">
          <span
            v-for="types in store.project.types"
            class="text-bg-dark badge me-1"
            >{{ types.name }}</span
          >
        </div>
        <p v-html="store.project.description"></p>
        <div class="buttons d-flex justify-content-center py-5">
          <a :href="store.project.repository_url" class="btn btn-primary">Repository</a>
          <a class="btn2 btn btn-danger"><router-link class="nav-link" :to="{ name: 'portfolio' }">Portfolio</router-link></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { store } from "../store";
import Loading from "../components/Loading.vue";

export default {
  name: "Project",
  components: {
    Loading,
  },
  data() {
    return {
      store,
      linkProject: "http://localhost:8000/api/projects/",
    };
  },
  created() {
    const projectSlug = this.$route.params.slug;
    store.getProjects(this.linkProject + projectSlug, true);
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.card{
  margin-top: 8rem;
  margin-bottom: 5rem;
  .btn {
    width: 40%;
    color: $blueMario;
    background-color: $gialloMario;
    border-color: $bluelightMario;
    margin-bottom: 30px;
    transition: 0.3s;
    font-weight: 600;
    &:hover {
      background-color: $greenMario;
    }
  }

  .project-body {
    background-color: $blueMario;
    color: $main-mario;
  }
}
.btn2{
  background-color: $redMario!important;
  font-weight: 600;
  color: #fff!important;
  
}
.btn2:hover {
    background-color: $greenMario!important;
    color: $blueMario !important;
  }
</style>
