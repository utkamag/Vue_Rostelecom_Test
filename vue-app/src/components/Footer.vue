<template>
  <div class="footer">
    <div class="buttongroup">
      <button class="buttongroup__btn1" v-on:click="setBtn1">Скопировать</button>
      <button class="buttongroup__btn2">Переместить</button>
      <button class="buttongroup__btn3">Удалить</button>
    </div>
    <div v-show="btn1 === true"><PopupCopy/></div>
  </div>
</template>

<script>

import PopupCopy from "@/components/PopUp/PopupCopy";

export default {
  name: "Footer",
  components: {
    PopupCopy
  },
  data() {
    return {
      btn1: false,
      btn2: false,
      btn3: false
    }
  },
  methods: {
    setBtn1() {
      this.btn1 = true
    }
  }
}

</script>

<style scoped lang="scss">

@import "src/assets/styles/variables/_variables.scss";

.buttongroup {
  border: 2px solid $secondcolor;
  display: flex;
  justify-content: left;
  background: black;
  margin: 2px;

  &__btn1 {
    padding: 10px;
    font-size: 15px;
    margin-left: 20px;
    background: $secondcolor;
    transition: linear 0.2s;

  }

  &__btn1:hover {
    padding: 10px;
    font-size: 15px;
    margin-left: 20px;
    background: $secondcolor;
    color: $yellowcolor;
    cursor: pointer;

  }

  &__btn2 {
    padding: 10px;
    font-size: 15px;
    margin-left: 10px;
    background: $secondcolor;
    transition: linear 0.2s;

  }

  &__btn2:hover {
    padding: 10px;
    font-size: 15px;
    margin-left: 10px;
    background: $secondcolor;
    color: $yellowcolor;
    cursor: pointer;

  }

  &__btn3 {
    padding: 10px;
    font-size: 15px;
    margin-left: 10px;
    background: $secondcolor;
    transition: linear 0.2s;

  }

  &__btn3:hover {
    padding: 10px;
    font-size: 15px;
    margin-left: 10px;
    background: $secondcolor;
    color: $yellowcolor;
    cursor: pointer;

  }
}

</style>