<template>
  <Loading v-if="store.loading"/>
<div v-else class="project">

  <div class="container">
      <div class="project-title d-flex justify-content-center align-items-center">
      <h1 class="m-0"> {{ store.project.name }}</h1>
  </div>
  <div class="mb-3">
      <img class="img-fluid" :src="store.project.image" alt="">
  </div>

</div>
<div class="project-body">
  <div class="container">
      <div class=" py-2">
          <span v-for="types in store.project.types"
            class="text-bg-dark badge me-1">{{ types.name }}</span>
      </div>
       <p v-html="store.project.description"></p>
      <div class="buttons d-flex justify-content-center">
        <a :href="store.project.repository_url" class="btn btn-primary">Repository</a>
      </div>
  </div>
  </div>
</div>
</template>
<script>
import { store } from '../store';
import Loading from '../components/Loading.vue';

export default {
name:"Project",
components: {
  Loading,
},
data() {
  return {
      store,
      apiProject: 'http://localhost:8000/api/projects',

  }
},
created(){
  // const projectSlug = this.$route.params.slug;
  
  store.getProjects((this.apiProject), true);
}   
}
</script>

<style lang="scss" scoped>

</style>