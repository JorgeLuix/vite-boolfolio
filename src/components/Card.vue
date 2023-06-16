<template>
    <div class="col-12 pe-1 col-md-4 col-lg-3 col-md-4 col-sm-6 col-xxl-2 d-flex justify-content-center mb-5">
        <div class="card" style="width: 22rem;">
            <div class="card">
                <img class="inside-image" :src="project.image" alt="image">
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ project.name }}</h5>
                <div class="mb-2">
                    <span v-for="types in project.types"
                        class=" text-bg-dark badge me-1">{{ types.name }}</span>
                </div>
                <div class="buttons d-flex justify-content-center">
                    <router-link :to="{ name: 'projects' }" class="btn btn-primary"> 
                        visualizza
                        <!-- <MatrixDescription ref="MatrixDescription" :description="'Visualizza'" /> -->
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['project'],
    components: {
        
    }

}
</script>

<style lang="scss" scoped>
</style>
