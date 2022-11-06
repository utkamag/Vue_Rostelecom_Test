<template>
  <div class="container">
    <div class="header">
      <div class="header__root">
        <select v-model="selected">
          <option disabled value="">Выберите диск...</option>
          <option>C:\</option>
          <option>D:\</option>
        </select>
        <button class="header__submit" @click="getDisk">Принять</button>
        <button class="header__back" @click="wayBack">/</button>
      </div>
      <div class="path">Директория: {{ selected  }}{{headerDirection}}
        <span v-for="item in items">{{ item.name }}</span></div>
    </div>

    <div class="header">
      <div class="header__root">
        <select v-model="selectedTwo">
          <option disabled value="">Выберите диск...</option>
          <option>E:\</option>
          <option>F:\</option>
        </select>
        <button class="header__submit" @click="getSecondDisk">Принять</button>
        <button class="header__back"  @click="wayBack">/</button>
      </div>
      <div class="path">Директория: {{ selectedTwo }}{{headerDirectionRight}}
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
      arrayDiskD: [],
      arrayDiskE: [],
      arrayDiskF: [],
      disabled: false
    }
  },

  props: {
    headerDirection: {
      type: String
    },
    headerDirectionRight: {
      type: String
    }
  },

  methods: {
    async getDisk() {
      if(this.selected === "C:\\") {
        const requestOne = axios.get("https://vuerostelecom.herokuapp.com/c/634fe02e2d3692b37022a71d");
        const requestTwo = axios.get("https://vuerostelecom.herokuapp.com/c/634fe0d82d3692b37022a722");
        axios
            .all([requestOne, requestTwo])
            .then(response => this.arrayDiskC = response)
        this.$emit("createC", this.arrayDiskC, this.selected)
      }
      else if (this.selected === "D:\\") {
        const requestOne = axios.get("https://vuerostelecom.herokuapp.com/d/634fe24af3ca54bf16157238");
        axios
            .all([requestOne])
            .then(response => this.arrayDiskD = response)
        this.$emit("createD", this.arrayDiskD, this.selected)
      }
      else {
        alert("Необходимо выбрать диск")
      }
    },
    async getSecondDisk() {
      if(this.selectedTwo === "E:\\") {
        const requestOne = axios.get("https://vuerostelecom.herokuapp.com/e/63666cc85a9bd18f87328012");
        const requestTwo = axios.get("https://vuerostelecom.herokuapp.com/e/63666d30e318d7cdd8cb2f5d");
        axios
            .all([requestOne, requestTwo])
            .then(response => this.arrayDiskE = response)
        this.$emit("createE", this.arrayDiskE, this.selectedTwo)
      }
      else if (this.selectedTwo === "F:\\") {
        const requestOne = axios.get("https://vuerostelecom.herokuapp.com/f/6367b814cd8cfb2ae34d0141");
        axios
            .all([requestOne])
            .then(response => this.arrayDiskF = response)
        this.$emit("createF", this.arrayDiskF, this.selectedTwo)
      }
      else {
        alert("Необходимо выбрать диск")
      }
    },
    wayBack() {
      location.reload()
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