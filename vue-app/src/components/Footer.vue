<template>
  <div class="footer">
    <div class="buttongroup">
      <button class="buttongroup__btn1" @click="copyBtn">Скопировать</button>
      <button class="buttongroup__btn2" @click="replaceBtn">Переместить</button>
      <button class="buttongroup__btn3" @click="deleteBtn">Удалить</button>
    </div>
    <div v-show="copy === true"><PopupCopy @btn1Click="click1" @btn2Click="click2"/></div>
    <div v-show="remove === true"><PopupDelete @btn1Click="click1" @btn2Click="click2"/></div>
    <div v-show="replace === true"><PopupReplace @btn1Click="click1" @btn2Click="click2"/></div>
  </div>
</template>

<script>

import PopupCopy from "@/components/PopUp/PopupCopy";
import PopupDelete from "@/components/PopUp/PopupDelete";
import PopupReplace from "@/components/PopUp/PopupReplace";

export default {
  name: "Footer",
  components: {
    PopupCopy,
    PopupDelete,
    PopupReplace
  },
  data() {
    return {
      copy: false,
      remove: false,
      replace: false
    }
  },
  methods: {
    copyBtn() {
      this.copy = true
    },
    deleteBtn() {
      this.remove = true
    },
    replaceBtn() {
      this.replace = true
    },
    click1(selected) {
      this.copy = selected
      this.remove = selected
      this.replace = selected
    },
    click2(selected) {
      this.copy = selected
      this.remove = selected
      this.replace = selected
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