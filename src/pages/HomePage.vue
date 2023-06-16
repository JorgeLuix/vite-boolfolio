<template>
    <Loading v-if="store.loading"/>
    <div v-else class="container-fluid">
        <div class="title-page mx-auto mb-4 text-center">
        <h1 class="m-0">Miei progetti</h1>
    </div>
      <div class="row">
       <Card v-for="project in store.projects" :project="project"/>
        
      </div>
      <nav class="mt-2">
        <ul class="pagination d-flex justify-content-center pb-4">
          <li v-for="link in store.links" @click="changePage(link)" :class="{ 'active' : link.active, 'disabled' : link.url === null }" class="page-item"><a
              class="page-link" href="#" v-html="link.label"></a></li>
        
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  import Card from '../components/Card.vue';
  import Loading from '../components/Loading.vue'
  import { store } from '../store';
  export default {
    name: 'Home',
    components: {
        Card,
        Loading,
    },
    data() {
      return {
        link: 'http://localhost:8000/api/projects',
        projects: [],
        links: [],
        store
      }
    },
    methods: {
      
      changePage(link) {
        if (link.url) {
            store.getProjects(link.url)
        }
        else {
            return
        }

      }
    },
    created() {
      store.getProjects(this.link);
    }
  
  }
  </script>