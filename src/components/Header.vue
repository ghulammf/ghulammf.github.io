<template>
  <header>
    <nav>
      <a href="#">Home</a>
      <a href="#project">Project</a>
      <a href="#skill">Skill</a>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 10px;
  z-index: 3;
  width: 100%;
  margin: auto;
  max-width: 500px;
}

nav {
  display: flex;
  justify-content: center;
  background-color: rgba(238, 235, 235, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin-top: 5px;
  width: inherit;
}

nav a {
  margin: 15px 20px;
  text-decoration: none;
  color: black;
  font-size: large;
  font-weight: 500;
  transition: all 0.4s;
}

nav a:hover {
  color: white;
  text-shadow: 0 0 10px black;
}
</style>
