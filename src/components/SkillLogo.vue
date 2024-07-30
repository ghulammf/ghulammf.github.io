<script setup>
import html5 from "../assets/HTML5.png";
import css3 from "../assets/CSS3.png";
import javascript from "../assets/JavaScript.png";
import tailwind from "../assets/Tailwind.png";
import react from "../assets/React.png";
import vue from "../assets/vue.svg";
import git from "../assets/Git.png";
import vite from "../assets/vite.svg";

const imageSkill = [html5, css3, javascript, tailwind, react, vue, git, vite];
</script>

<template>
  <div>
    <div class="skill">
      <img v-for="image in imageSkill" :src="image" class="img-skill" alt="" />
    </div>
  </div>
</template>

<style scoped>
.skill {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.img-skill {
  width: 50px;
  height: auto;
  object-fit: contain;
  margin: 0 20px;
  filter: grayscale(100%);
  transition: all 0.7s;
}

.img-skill:hover {
  filter: grayscale(0);
}
</style>
