<template>
  <div class="container__header">
    <Header/>
    <Header/>
  </div>
  <FileList/>
</template>

<script>

import Header from "@/components/Header";
import FileList from "@/components/FileList";

export default {
  name: 'App',
  components: {
    Header,
    FileList
  }
}
</script>

<style lang="scss">
@import "src/assets/styles/variables/_variables.scss";

*,
*::before,
*::after {
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
.container {
  &__header {
    display: flex;
  }
}
</style>
