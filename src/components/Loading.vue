<template>
    <div class="loader">
    <div class="loader-content">
      <img class="mario" :src="sourcegif" alt="Loader GIF"> 
      <h1>
        <span class="letter-1">L</span>
        <span class="letter-2">o</span>
        <span class="letter-3">a</span>
        <span class="letter-4">d</span>
        <span class="letter-5">i</span>
        <span class="letter-1">n</span>
        <span class="letter-2">g</span>
        <span class="letter-3">.</span>
        <span class="letter-4">.</span>
        <span class="letter-5">.</span>
      </h1>
    </div>
  </div>
</template>

<script>
import sourcegif from '@/assets/source.gif';
export default {
      name: 'Loading',
      data() {
        return {
            sourcegif
        }
    },
    }
</script>

<style lang="scss" scoped>
.letter-1 {
  color: #e60012; 
}
.letter-2 {
  color: #0060ad;
}
.letter-3 {
  color: #46ad37;
}
.letter-4 {
  color: #fed200; 
}
.letter-5 {
  color: #009edb; 
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

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
}

.loader-content {
  text-align: center;
  color: #fff;
  font-family: "Press Start 2P", sans-serif;
  animation: jump 1s infinite;
  transition: transform 0.3s ease-in-out;
}

.mario {
  width: 100px;
  height: 100px;
  background: none;
}

h1 {
  font-size: 28px;
  margin-top: 20px;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

.loader:hover .mario {
  transform: translateY(-50px);
}



</style>