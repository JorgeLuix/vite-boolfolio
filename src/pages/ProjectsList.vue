<template>
    <div class="container" id="product-list">
      <h1>{{ title }}</h1>
      <div class="row gy-4 mb-4">
        <div
          class="col-sm-6 col-md-4 col-lg-3"
          v-for="(project, index) in projects"
          :key="projects.id">
          <div class="card" style="width: 200px;" >
              <img :src="project.image" :alt="projects.name" class="img-fluid" />
              <div class="card-body">
                <h6>{{ project.name }}</h6>
              </div>
            </div>
          </div>
      </div>
      
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <button class="page-link" @click="getData(currentPage - 1)">
              Previous
            </button>
          </li>
          <li class="page-item" v-for="n in lastPage">
            <button class="page-link" @click="getData(n)">{{ n }}</button>
          </li>
  
          <li class="page-item">
            <button class="page-link" @click="getData(currentPage + 1)">
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "App",
    data() {
      return {
        title: "Projects",
        projects: [],
        apiUrl: "http://127.0.0.1:8000/api",
        imgBasePath: "http://127.0.0.1:8000/storage/",
        currentPage: 1,
        lastPage: null,
      };
    },
    methods: {
      getData(numPage) {
        axios.get(`${this.apiUrl}/projects`, {
            params: {
              page: numPage,
            },
          })
          .then((res) => {
            //console.log(res);
            this.projects = res.data.results;
          //   this.currentPage = res.data.results.current_page;
          //   this.lastPage = res.data.results.last_page;
            console.log(this.projects);
          });
      },
    },
    mounted() {
      this.getData(1);
    },
  };
  </script>
  
  <style lang="scss" scoped></style>
  