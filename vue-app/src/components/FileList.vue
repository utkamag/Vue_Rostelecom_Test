<template>
  <div class="file">
    <div class="file__content">
      <div class="file__panel">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileList"
}
</script>

<style scoped lang="scss">

@import "src/assets/styles/variables/_variables.scss";

.file {
  display: flex;
  justify-content: center;
  align-items: center;
  &__content {
    margin: 10px;
    width: 99vw;
    height: 80vh;
    border: 3px solid $secondcolor;
  }
}

</style>