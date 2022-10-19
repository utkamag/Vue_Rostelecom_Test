<template>
  <div class="container">
    <div class="header">
      <div class="header__root">
        <select v-model="selected" v-on:change="submitOne">
          <option disabled value="">Выберите диск...</option>
          <option>C:\</option>
          <option>D:\</option>
        </select>
        <button class="header__submit" @click="getDisk">Принять</button>
        <button class="header__back">/</button>
      </div>
      <div class="path">Директория: {{ selected }}
        <span v-for="item in items">{{ item.name }}</span></div>
    </div>

    <div class="header">
      <div class="header__root">
        <select v-model="selectedtwo" v-on:change="submitTwo">
          <option disabled value="">Выберите диск...</option>
          <option>E:\</option>
          <option>F:\</option>
        </select>
        <button class="header__submit" @click="getDisk">Принять</button>
        <button class="header__back">/</button>
      </div>
      <div class="path">Директория: {{ selectedTwo }}
        <span v-for="item in items">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";


export default {
  name: "Header",

  data() {
    return {
      selected: "",
      selectedTwo: "",
      items: [],
      arrayDiskC: [],
      arrayDiskD: []
    }
  },

  methods: {
    async getDisk() {
      if(this.selected === "C:\\") {
        axios
            .get("http://localhost:3000/post/c")
            .then(response => this.arrayDiskC = response.data)
        this.$emit("createC", this.arrayDiskC, this.selected)
      }
      else if (this.selected === "D:\\") {
        axios
            .get("http://localhost:3000/post/d")
            .then(response => this.arrayDiskD = response.data)
        this.$emit("createD", this.arrayDiskD, this.selected)
      }
      else {
        alert("Необходимо выбрать диск")
      }
    }
  },
}

</script>


<style scoped lang="scss">
@import "src/assets/styles/variables/_variables.scss";

.container {
  display: flex;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 7px;
  background: $panelcolor;
  width: 50vw;
  border: 2px solid $secondcolor;

  &__root {
    flex-direction: row;
    padding: 10px;
  }

  &__back {
    width: 20px;
    margin-left: 10px;
  }

  &__submit {
    margin-left: 10px;
  }

}

.path {
  background: $panelcolor;
  color: $yellowcolor;
  font-family: Consolas;
  font-size: 18px;
}

</style>