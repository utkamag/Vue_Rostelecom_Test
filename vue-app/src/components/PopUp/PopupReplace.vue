<template>
  <div class="popup">
    <div class="popup__content">
      <h2 class="popup__title">Переместить в ...?</h2>
      <div class="popup__btn">
        <button class="popup__btn1" @click="btn1click">Переместить</button>
        <button class="popup__btn2" @click="btn2click">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupDelete",
  data() {
    return {
      btn1: false,
      btn2: false
    }
  },
  methods: {
    btn1click() {
      this.$emit("btn1Click", this.btn1)
    },
    btn2click() {
      this.$emit("btn2Click", this.btn2)
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
    margin-top: 150px;
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