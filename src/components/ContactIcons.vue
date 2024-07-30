<template>
  <div>
    <div class="contact">
      <div class="mail">
        <a href="mailto:muhtadinamri123@gmail.com"> &#9993; </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  display: flex;
  justify-content: center;
  background-color: rgba(238, 235, 235, 0.5);
  backdrop-filter: blur(10px);
  height: 90px;
}

.mail {
  align-content: center;
}

.mail a:hover {
  color: red;
  text-shadow: 0 0 10px gray;
}

.mail a {
  text-decoration: none;
  font-size: 3rem;
  color: black;
  transition: all 0.6s;
}
</style>
