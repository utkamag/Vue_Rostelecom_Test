<template>
  <div class="file">
    <div class="file__content">
      <div class="file__panel">
        <div class="file__name">
          <div class="file__name-title">Имя</div>
          <div class="file__name-text">Имя</div>
          <div v-if="direction === direction1" v-for="item in items">{{item.name}}</div>
          <div v-if="direction === direction2" v-for="file in files">{{file.name}}</div>
        </div>
        <div class="file__size">
          <div class="file__size-title">Размер</div>
          <div class="file__size-text">Размер</div>
          <div v-for="item in items">{{item.size}}</div>
          <div v-for="file in files">{{file.size}}</div>
        </div>
        <div class="file__date">
          <div class="file__date-title">Дата</div>
          <div class="file__date-text">Дата</div>
          <div v-for="item in items">{{item.date}}</div>
          <div v-for="file in files">{{file.date}}</div>
        </div>
        <div class="file__time">
          <div class="file__time-title">Время</div>
          <div class="file__time-text">Время</div>
          <div v-for="item in items">{{item.time}}</div>
          <div v-for="file in files">{{file.time}}</div>
        </div>
      </div>
      <div class="file__panel">
          <div class="file__name">
            <div class="file__name-title">Имя</div>
            <div class="file__name-text">Имя</div>
          </div>
          <div class="file__size">
            <div class="file__size-title">Размер</div>
            <div class="file__size-text">Размер</div>
          </div>
          <div class="file__date">
            <div class="file__date-title">Дата</div>
            <div class="file__date-text">Дата</div>
          </div>
          <div class="file__time">
            <div class="file__time-title">Время</div>
            <div class="file__time-text">Время</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FileList",
  data() {
    return{
      direction1: "C:\\",
      direction2: "D:\\",
      size: "",
      date: "",
      time: ""
    }
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    files: {
      type: Array,
      required: true
    },
    direction: {
      type: Object
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

@import "src/assets/styles/variables/_variables.scss";

.file {
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    display: flex;
    margin: 10px;
    width: 99vw;
    height: 80vh;
    border: 3px solid $secondcolor;
  }

  &__panel {
    display: flex;
    margin: 3px;
    border: 3px solid $secondcolor;
    width: 50%;
    height: 99%;
  }

  &__name {
    width: 35%;
    border-right: 3px solid $secondcolor;
  }

  &__size {
    width: 22%;
    border-right: 3px solid $secondcolor;
  }

  &__date {
    width: 22%;
    border-right: 3px solid $secondcolor;

  }

  &__time {
    width: 22%;

  }

  &__name-title {
    font-family: Consolas;
    color: $yellowcolor;
    font-size: 19px;
    margin-top: 5px;
  }

  &__size-title {
    font-family: Consolas;
    color: $yellowcolor;
    font-size: 19px;
    margin-top: 5px;
  }

  &__date-title {
    font-family: Consolas;
    color: $yellowcolor;
    font-size: 19px;
    margin-top: 5px;
  }

  &__time-title {
    font-family: Consolas;
    color: $yellowcolor;
    font-size: 19px;
    margin-top: 5px;
  }

  &__name-text {
    font-family: Consolas;
    color: $secondcolor;
    text-align: left;
    font-size: 18px;
    margin: 4px;
  }

  &__size-text {
    font-family: Consolas;
    color: $secondcolor;
    text-align: left;
    font-size: 18px;
    margin: 4px;
  }

  &__date-text {
    font-family: Consolas;
    color: $secondcolor;
    text-align: left;
    font-size: 18px;
    margin: 4px;
  }

  &__time-text {
    font-family: Consolas;
    color: $secondcolor;
    text-align: left;
    font-size: 18px;
    margin: 4px;
  }
}

</style>