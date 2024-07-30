<script setup>
import cat from "../assets/cat.png";
</script>

<template>
  <div id="profile">
    <div class="profile">
      <div class="description">
        <p>
          <span class="bold">Hello, I'm Ghulam</span><br />
          <span class="reg">
            I am a passionate Frontend Developer with designing and developing
            responsive and intuitive user interfaces. Mastering HTML, CSS,
            JavaScript, and various modern frameworks, I am dedicated to
            creating great user experiences. I always keep up with the latest
            trends and technology to ensure that the projects I work on are not
            only functional but also visually appealing.</span
          >
        </p>
      </div>
      <section
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        "
      >
        <div class="image">
          <div class="container-profile">
            <div class="img imgprofile" alt=""></div>
          </div>
          <img
            class="imgcat"
            :src="cat"
            alt=""
            style="
              z-index: 5 !important;
              width: 150px;
              transform: translateY(-120px);
              filter: drop-shadow(10px 10px 10px white);
              display: flex;
              justify-content: center;
            "
          />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.profile {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.description p {
  padding: 0 5% 0 5%;
}

.description .bold {
  font-weight: 900;
  font-size: 50px;
  background-image: url("../assets/bg3.jpg");
  background-position: center;
  background-size: cover;
  background-clip: text;
  color: transparent;
}

.description .reg {
  font-size: larger;
}

.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.image {
  margin: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  position: relative;
}

.container-profile {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 5px solid rgba(128, 128, 128, 0.347);
  outline-color: rgba(0, 0, 0, 0.564);
  outline-style: solid;
  outline-width: 2px;
  overflow: hidden;
}

.imgprofile {
  background-image: url("../assets/bg2.jpg");
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  transition: all 1.2s;
  overflow: hidden;
}

.image:hover .imgprofile {
  transform: scale(1.2);
}
</style>
