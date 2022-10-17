<template>
  <div class="container">
    <div class="header">
      <div class="header__root">
        <select v-model="selected" v-on:change="submitOne">
          <option disabled value="">Выберите диск...</option>
          <option>C:\</option>
          <option>D:\</option>
          <option>E:\</option>
        </select>
        <button class="header__back">/</button>
      </div>
      <div class="path">Директория: {{ selected }}
        <span v-for="item in items">{{ item.name }}</span></div>
    </div>

    <div class="header">
      <div class="header__root">
        <select v-model="selectedtwo" v-on:change="submitTwo">
          <option disabled value="">Выберите диск...</option>
          <option>C:\</option>
          <option>D:\</option>
          <option>E:\</option>
        </select>
        <button class="header__back">/</button>
      </div>
      <div class="path">Директория: {{ selectedtwo }}
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
      selectedtwo: "",
      items: []
    }
  },

  methods: {
    submitOne() {
      axios
          .put("http://localhost:3000/api/post", {
            "directory_A": `${this.selected}`,
            "_id":"634d211869fc18bc72848cd1"
          })
    },
    submitTwo() {
      axios
          .put("http://localhost:3000/api/post", {
            "directory_B": `${this.selectedtwo}`,
            "_id":"634d211869fc18bc72848cd1"
          })
    }

  },

  mounted() {
    axios
        .get(`http://localhost:3000/api/post`)
        .then(response => (this.items = response.data))
        .then(console.log(this.items))
  }
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