<template>
  <Header @createC="createFilesC" @createD="createFilesD" @createE="createFilesE" @createF="createFilesF" :headerDirection="headerDirection" :headerDirectionRight="headerDirectionRight"/>
  <FileList :items="itemsDiskC" :files="itemsDiskD" :itemsE="itemsDiskE" :filesF="itemsDiskF" :direction="direction" :directionRight="directionRight" @VideoClick="addDirectoryName" @VideoClickRight="addDirectoryNameRight" @sendNames="sendName"/>
  <Footer @popupCopy="popupCopy"/>
  <PopupCopy @popupCopyOff="popupCopyOf" :popupCopyOn="popupCopyOn" :files="itemsDiskC" :names="names"/>
</template>

<script>

import Header from "@/components/Header";
import FileList from "@/components/FileList";
import Footer from "@/components/Footer";
import PopupCopy from "@/components/PopUp/PopupCopy";

export default {
  name: 'App',
  components: {
    PopupCopy,
    Header,
    FileList,
    Footer,
  },
  data() {
    return{
      itemsDiskC:[],
      itemsDiskD:[],
      itemsDiskE:[],
      itemsDiskF:[],
      direction: "",
      directionRight: "",
      headerDirection: "",
      headerDirectionRight: "",
      popupCopyOn: "",
      popupCopyOff: "",
      names: ""
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
    createFilesE(item, direction) {
      this.itemsDiskE = item
      this.directionRight = direction
    },
    createFilesF(item, direction) {
      this.itemsDiskF = item
      this.directionRight = direction
    },
    addDirectoryName(item) {
      this.headerDirection = item
    },
    addDirectoryNameRight(item) {
      this.headerDirectionRight = item
    },
    popupCopy(item) {
      this.popupCopyOn = item
    },
    popupCopyOf(item) {
      this.popupCopyOn = item
    },
    sendName(item) {
      this.names = item
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
