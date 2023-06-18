<template>
    <carousel :autoplay="3000" :items-to-show="2.5" :wrap-around="true">
        <Slide v-for="project in showcase" :key="slide">
        <div class="carousel__item">
        <div class="box position-relative">
          <img class="img-fluid" :src="project.image" alt="">
          <div class="text px-3">
            <p>{{ project.name }}</p>
          </div>
        </div>
      </div>
    </Slide>
  
      <template #addons>
        <navigation />
      </template>
    </carousel>
  </template>
  
  <script>
  
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide,  Navigation } from 'vue3-carousel'
  import { store } from '../store'
  export default {
    name: 'Carousel',
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    data() {
    return {
      store,
      apiShowcase: 'http://localhost:8000/api/showcase',
      showcase: [],
      
    }
  },
  mounted() {
    axios.get(this.apiShowcase).then((res) => {
      this.showcase = res.data.results;
    }
    )
  }
  }
  </script>

<style lang="scss" scoped>

</style>