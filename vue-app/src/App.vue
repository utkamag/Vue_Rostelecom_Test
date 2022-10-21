<template>
  <Header @wayToBack="wayBack" @createC="createFilesC" @createD="createFilesD" />
  <FileList :items="itemsDiskC" :files="itemsDiskD" :direction="direction" :update="visible" />
  <Footer/>
</template>

<script>

import Header from "@/components/Header";
import FileList from "@/components/FileList";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Header,
    FileList,
    Footer,
  },
  data() {
    return{
      itemsDiskC:[],
      itemsDiskD:[],
      direction: "",
      visible: Boolean
    }
  },
  methods: {
    createFilesC(item, direction) {
      this.itemsDiskC = item
      this.direction = direction
    },
    createFilesD(item, direction) {
      this.itemsDiskD = item
      this.direction = direction
    },
    wayBack(item) {
      this.visible = item
    }

  }
}
</script>

<style lang="scss">
@import "src/assets/styles/variables/_variables.scss";

*,
*::before,
*::after {
  font-family: Consolas;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, Consolas;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: $maincolor;
  width: 100vw;
  height: 100vh;
}
</style>
