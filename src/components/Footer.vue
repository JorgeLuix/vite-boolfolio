<template>
    <footer>
     <div class="py-3 d-flex justify-content-center">
         <p class="m-0">Made<span class="text-danger px-2"></span>by Jorge</p>
     </div>
    </footer>
 </template>
 
 <script>
     export default {
         name: 'Footer',
 
     }
 </script>
 
 <style lang="scss" scoped>
 @use '../assets/styles/partials/variables' as *;

 footer {
     background-color: $redMario;
     p {
         font-size:1.2rem;
         color: $main-mario;
         font-family: 'Press Start 2P', cursive;
     }
 }
 </style>