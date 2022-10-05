<template>
  <div class="header">
    <div class="header__root">
      <select v-model="selected">
        <option disabled value="">Выберите диск...</option>
        <option>C:</option>
        <option>D:</option>
        <option>E:</option>
      </select>
      <button class="header__back">/</button>
    </div>
    <div class="path">Директория: {{ selected }}</div>
  </div>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      selected: ""
    }
  },

  methods: {
    Test(e) {
      console.log(e)
    }
  }
}

</script>


<style scoped lang="scss">
@import "src/assets/styles/variables/_variables.scss";


.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background: $panelcolor;
  width: 50vw;

  &__root {
    flex-direction: row;
    padding: 10px;
  }

  &__back {
    width: 20px;
    margin-left: 10px;
  }
}

.path {
  background: $panelcolor;
  color: $yellowcolor;
}

</style>