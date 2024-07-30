<script setup>
import { ref } from "vue";

const props = defineProps([
  "id",
  "title",
  "prev",
  "tech",
  "desc",
  "demo",
  "imgdemo",
]);

const showDetail = ref(false);
const showModal = ref(false);
</script>

<template>
  <div class="card">
    <div class="img-preview">
      <img
        v-for="image in props.prev"
        :src="image"
        class="img-project"
        alt="image preview"
      />
    </div>
    <h3>{{ props.title }}</h3>
    <div class="technology">
      <img v-for="list in props.tech" :src="list" alt="tech" />
    </div>
    <div @click="showDetail = !showDetail" class="togle">
      <h4 v-if="showDetail" class="close">Close</h4>
      <h4 v-else class="detail">Detail</h4>
    </div>
    <div v-show="showDetail" class="description-list">
      <ul>
        <li v-for="list in props.desc" v-html="list"></li>
      </ul>
      <div>
        <h4 v-if="props.id == 1">
          <a :href="props.demo" target="_blank" class="demo">Demo &#10138;</a>
        </h4>
        <h4 v-else-if="props.id == 2" class="demo" @click="showModal = true">
          Demo &#10138;
        </h4>
      </div>
    </div>
  </div>
  <div class="modal-container" v-if="showModal">
    <div class="modal-main">
      <div class="close" @click="showModal = false">
        <h4>Close</h4>
      </div>
      <div v-for="image in props.imgdemo" class="image-container">
        <img :src="image" alt="image-demo" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  height: fit-content;
  border-radius: 7px;
  box-shadow: 0 0 5px gray;
  overflow: hidden;
}

.img-preview {
  aspect-ratio: calc(16 / 9);
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding: 30px 10px;
  gap: 10px;
  background-color: rgba(127, 127, 127, 0.17);
  backdrop-filter: blur(1px);
}

.card h3,
h4 {
  text-align: center;
}

.technology {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.technology img {
  width: 25px;
  height: auto;
  object-fit: contain;
  margin: 0 5px;
}

.togle {
  cursor: pointer;
}

.detail {
  color: green;
}

.close {
  color: red;
}

.description-list {
  margin: 0 17px 0 10px;
}

li {
  list-style-type: square;
}

.demo {
  text-decoration: none;
  color: green;
  cursor: pointer;
}

.modal-cont {
  position: relative;
  width: 100%;
  height: 100%;
}

/* baru */
.modal-container {
  width: 100%;
  height: 100%;
  background-color: rgba(127, 127, 127, 0.17);
  z-index: 4;
  position: fixed;
  top: 0;
  align-content: center;
}

.modal-main {
  width: 95%;
  height: 80%;
  max-width: 700px;
  border-radius: 10px;
  background-color: rgba(127, 127, 127, 0.17);
  backdrop-filter: blur(1px);
  z-index: 5;
  margin: auto;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.close {
  padding: 10px 0;
  position: sticky;
  top: 0;
}

.close h4 {
  margin: 0;
  border: none;
  padding: 10px;
  font-weight: 500;
  font-size: large;
  color: red;
  border-radius: 10px;
  cursor: pointer;
}

.image-container {
  width: inherit;
}

.image-container img {
  width: 100%;
  margin: auto;
}
</style>
