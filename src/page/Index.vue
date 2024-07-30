<script setup>
import Header from "../components/Header.vue";
import Profile from "../layout/Profile.vue";
import Project from "../layout/Project.vue";
import Skills from "../layout/Skills.vue";
import Footer from "../layout/Footer.vue";
</script>

<template>
  <div class="index">
    <Header />
    <Profile />
    <hr />
    <Project />
    <hr />
    <Skills />
    <Footer />
  </div>
</template>

<style scoped>
.index {
  max-width: 97%;
  margin: auto;
}
</style>
