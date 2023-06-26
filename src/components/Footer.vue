<template>
  <div class="body-footer">
    <ul>
      <li>
        <a href="#"> <i class="fab fa-facebook-f icon"></i> </a>
      </li>
      <li>
        <a href="#"><i class="fab fa-twitter icon"></i></a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/jorge-castillo-tenasoa-48bb60236/"><i class="fab fa-linkedin-in icon"></i></a>
      </li>
      <li>
        <a href="https://github.com/JorgeLuix"><i class="fa-brands fa-github icon"></i></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.body-footer {
  background-color: $redMario;
  //   margin: 0;
  //   padding: 0;
}
ul {
  display: flex;
  justify-content: center;
  padding: 10px;
  
}

ul li {
  list-style: none;
 
}

ul li a {
  width: 70px;
  height: 70px;
  background-color: $main-mario;
  text-align: center;
  line-height: 80px;
  font-size: 35px;
  margin: 0 10px;
  display: block;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid #fff;
  z-index: 1;
}

ul li a .icon {
  position: relative;
  color: #262626;
  transition: 0.5s;
  z-index: 3;
}

ul li a:hover .icon {
  color: #fff;
  transform: rotateY(360deg);
}

ul li a:before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f00;
  transition: 0.5s;
  z-index: 2;
}

ul li a:hover:before {
  top: 0;
}

ul li:nth-child(1) a:before {
  background: #3b5999;
}

ul li:nth-child(2) a:before {
  background: #55acee;
}

ul li:nth-child(3) a:before {
  background: #0077b5;
}

ul li:nth-child(4) a:before {
  background: $greenMario;
}
</style>
