<script setup>
import project from "../model/project.js";
import Title from "../components/Title.vue";
import Card from "../components/Card.vue";
</script>

<template>
  <div id="project">
    <Title title="Project" />
    <div class="card-container">
      <Card
        v-for="item in project"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :prev="item.prev"
        :tech="item.technologies"
        :desc="item.description"
        :typedemo="item.typedemo"
        :linkdemo="item.linkdemo"
        :imgdemo="item.imagedemo"
      />
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 1rem;
}

@media (max-width: 900px) {
  .card-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 500px) {
  .card-container {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
