<template>
    <div class="not-found">
        <div class="error">
            <h1 class="mario">Mamma mia!!!</h1>
            <h2 class="mario">Errore 404</h2>
            <!-- <img class="mario-gif" :src="mario404" alt="Mario GIF"> -->
        </div>
    </div>
</template>

<script>
import mario404 from '@/assets/mario404.gif';
    export default {
        name: 'NotFound',
        data () {
            return {
                mario404
            }
        }
    }
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
.not-found {
    display: flex;
    padding-top: 15rem;
    padding-left: 2rem;
    height: 100vh;
    background-image: url(../assets/img/super-mario-3d-world-bowsers-fury-lm-2560x1440.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.error {
    text-align: center;
    color: $redMario;
    font-family: "Press Start 2P", sans-serif;
}
.mario {
    font-size: 28px;
    margin-bottom: 20px;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
}
.mario-gif {
    width: 200px;
    height: 200px;
    animation: jump 1s infinite;
    transition: transform 0.3s ease-in-out;
    
}
@keyframes jump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>