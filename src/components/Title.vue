<script setup>
const props = defineProps({
  title: String,
});
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
