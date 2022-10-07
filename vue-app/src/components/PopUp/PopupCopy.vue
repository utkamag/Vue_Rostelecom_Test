<template>
  <div class="popup">
    <div class="popup__content">
      <h2 class="popup__title">Копировать файл в:</h2>
      <div class="popup__way">
        <select v-model="selected">
        <option disabled value="">Директория...</option>
        <option>C:</option>
        <option>D:</option>
      </select>
      </div>
      <div class="popup__btn">
        <button class="popup__btn1">Ok</button>
        <button class="popup__btn2">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupCopy",
  data() {
    return {
      selected: ""
    }
  },
  methods: {
    test() {

    }
  }
}
</script>

<style scoped lang="scss">

@import "src/assets/styles/variables/variables.scss";

.popup {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.4);

  &__content {
    padding: 50px;
    height: 40vh;
    width: 60vw;
    background: $panelcolor;
  }

  &__way {
    padding: 20px;
  }

  &__btn {
    display: flex;
    margin-top: 100px;
    margin-right: 750px;
  }

  &__btn1 {
    padding: 10px;
    font-size: 15px;
    margin-left: 10px;
    background: $secondcolor;
  }
  &__btn2 {
    padding: 10px;
    font-size: 15px;
    margin-left: 10px;
    background: $secondcolor;
  }
}

</style>