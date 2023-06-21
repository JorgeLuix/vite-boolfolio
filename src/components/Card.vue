<template>
    <div class="col-12 pe-1 col-md-4 col-lg-3 col-md-4 col-sm-6 col-xxl-2 d-flex justify-content-center mb-5">
        <div class="card" style="width: 30rem;">
                <img class="image" :src="project.image" alt="image">
            
            <div class="card-body">
                <h6 class="card-title">{{ project.name }}</h6>
                <div class="mb-2">
                    <span v-for="types in project.types"
                        class=" text-bg-dark badge me-1">{{ types.name }}</span>
                </div>
                <div class="buttons btn-shadow d-flex justify-content-center">
                    <router-link :to="{ name: 'projects', params: { slug: project.slug } }" class="btn btn-primary">
                       Visualizza
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

@use '../assets/styles/partials/variables' as *;

.card {
    background-color: white;
    color: black;
    cursor:grab;
    .card-title {
        color: black;
        font-family: 'Press Start 2P', cursive;
    }

    .btn {
        width: 200px;
        background-color: $redMario;
        border-color: $bg-color;
        transition:0.3s;
        box-shadow: #f5f5f4 5px 5px ;
        font-family: 'Press Start 2P', cursive;
        &:hover {
            background-color: $greenMario;
        }
    }


}
// .btn-shadow{
//         box-shadow: white 5px 5px ;
//     }
.image {
    padding: 5px;
    height: 200px;
    object-fit: cover;
}


@media screen and (max-width:576px) {
    .image {
    width: 100%;

}
 }
</style>
