<script setup>
import bg2 from "../assets/bg2.jpg";
</script>

<template>
  <div class="modal-container">
    <div class="modal-main">
      <div class="close">
        <h4>Close</h4>
      </div>
      <div v-for="i in 5" class="image-container">
        <img :src="bg2" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
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
