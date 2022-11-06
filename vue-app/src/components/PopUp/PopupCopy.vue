<template>
  <div class="popup" v-show="popupCopyOn">
    <div class="popup__content">
      <h2 class="popup__title">Копировать {{names}} файл в:</h2>
      <div class="popup__way">
        <select v-model="btn1">
        <option disabled value="">Директория...</option>
        <option>C:</option>
        <option>D:</option>
      </select>
      </div>
      <div class="popup__btn">
        <button class="popup__btn1" @click="btn1click">Скопировать</button>
        <button class="popup__btn2" @click="btn2click">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupCopy",
  data() {
    return {
      btn1: false,
      btn2: false,
      popupCopyOff: false
    }
  },
  props: {
    files: {
      type: Array
    },
    popupCopyOn: {
      type: String
    },
    names: {
      type: String
    }
  },
  methods: {
    btn1click() {
      this.$emit("btn1Click", this.btn1)
    },
    btn2click() {
      this.$emit("btn2Click", this.btn2)
      this.$emit("popupCopyOff", this.popupCopyOff)
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