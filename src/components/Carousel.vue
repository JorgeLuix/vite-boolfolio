<template>
  <Carousel :autoplay="3000" :items-to-show="2.5" :wrap-around="true" :transition="500">
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
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import axios from 'axios';

import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import { store } from '../store';
export default defineComponent({

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
      console.log(this.showcase)
    }
    )
  }
})

</script>

<style lang="scss" scoped>
.box {
  margin: 2rem auto;
  max-width: 40ch;
  border: 8px solid #0038FF;
  color: #fff;
  padding: 2ch;
  position: relative;
  border-image:
    url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 0H8v4H4v4H0v8h4v4h4v4h8v-4h4v-4h4V8h-4V4h-4V0zm0 4v4h4v8h-4v4H8v-4H4V8h4V4h8z' fill='%230038FF'/%3E%3C/svg%3E") 8 stretch;
}

.box:before {
  content: "";
  position: absolute;
  right: -28px;
  top: calc(50% - 14px);
  width: 24px;
  height: 28px;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 0H0v8h12v4h4v4h-4v4H0v8h4v-4h8v-4h4v-4h8v-4h-8V8h-4V4H4V0z' fill='%230038FF'/%3E%3Cpath fill='%23161616' d='M0 8h4v12H0z'/%3E%3C/svg%3E");
}

p {
  margin: 0;
}

p+p {
  margin-top: 1ch;
}

a {
  color: #0038FF;
  font-weight: bold;
}

.text {
  position: absolute;
  bottom: 0;
  left: 19px;
  right: 19px;
  background-color: #929292
}
</style>