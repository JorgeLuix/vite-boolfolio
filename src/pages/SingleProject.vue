<template>
    <section class="container" v-if="project">
        <div class="mb-4">
            <div class="container-fluid d-flex justify-content-between">
                <div class="p-4 w-25">
                    <img :src="getImagePath" :alt="project.name" class="image-fit" />
                </div>

                <div class="p-4 w-75">
                    <h1 class="display-5 fw-bold">{{ project.name }}</h1>
                    <p class="fs-4">Using a series of utilities, you can create this jumbotron, just like the one
                        in
                        previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to
                        your liking.
                    </p>
                    <button class="btn btn-primary btn-lg" type="button">Example button</button>
                </div>


            </div>
        </div>
        <!-- <ul v-if="product.colors">
            <li v-for="color in product.colors" :style="{ backgroundColor: color.hex_value }">
                {{ color.name }}
            </li>
        </ul> -->
    </section>
</template>

<script>
import { store } from '../store';
import axios from 'axios'
export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            project: null,
            loading: false
        }
    },
    methods: {
        getProduct() {
            this.loading = true;
            axios.get(`${store.apiURL}/projects/${this.$route.params.slug}`).then((res) => {
                console.log(res.data.results);
                this.product = res.data.results;
            }).catch((error) => {
                console.log(error);
                console.log(error.response.data);
                this.$router.push({ name: 'not-found' });
            }).finally(() => {
                this.loading = false;
            });
        }
    },
    computed: {
        getImagePath() {
            return store.imgBasePath + this.project.image;
        }
    },
    mounted() {
        // console.log(this.$router);
        // console.log(this.$route);
        this.getProduct();
    }
}
</script>

<style lang="scss" scoped></style>