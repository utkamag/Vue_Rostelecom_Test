<template>
  <div class="file">
    <div class="file__content">
      <div class="file__panel">
        <div class="file__name" v-on:click="LinkToNextDirectory">
          <div class="file__name-title">Имя</div>
          <div class="file__line-name" v-if="this.test" v-for="test in tests">{{ test.data.name }}
          </div>
          <div v-else>
            <div class="file__line-name" v-if="direction === direction1" v-for="item in items">{{ item.data.name }}
            </div>
            <div class="file__line-name" v-if="direction === direction2" v-for="file in files">{{ file.data.name }}
            </div>
          </div>
        </div>
        <div class="file__size">
          <div class="file__size-title">Размер</div>
          <div class="file__line-size" v-if="this.tests" v-for="test in tests">{{ test.data.size }}</div>
          <div v-else>
            <div class="file__line-size" v-if="direction === direction1" v-for="item in items">{{ item.data.size }}
            </div>
            <div class="file__line-size" v-if="direction === direction2" v-for="file in files">{{ file.data.size }}
            </div>
          </div>

        </div>
        <div class="file__date">
          <div class="file__date-title">Дата</div>
          <div class="file__line-date" v-if="this.tests" v-for="test in tests">{{ test.data.date }}</div>
          <div v-else>
            <div class="file__line-date" v-if="direction === direction1" v-for="item in items">{{
                item.data.date
              }}
            </div>
            <div class="file__line-date" v-if="direction === direction2" v-for="file in files">{{
                file.data.date
              }}
            </div>
          </div>
        </div>
        <div class="file__time">
          <div class="file__time-title">Время</div>
          <div class="file__line-time" v-if="this.tests" v-for="test in tests">{{ test.data.time }}</div>
          <div v-else>
            <div class="file__line-time" v-if="direction === direction1" v-for="item in items">{{
                item.data.time
              }}
            </div>
            <div class="file__line-time" v-if="direction === direction2" v-for="file in files">{{
                file.data.time
              }}
            </div>
          </div>
        </div>
      </div>
      <div class="file__panel">
        <div class="file__name">
          <div class="file__name-title">Имя</div>
        </div>
        <div class="file__size">
          <div class="file__size-title">Размер</div>
        </div>
        <div class="file__date">
          <div class="file__date-title">Дата</div>
        </div>
        <div class="file__time">
          <div class="file__time-title">Время</div>
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
    return {
      direction1: "C:\\",
      direction2: "D:\\",
      tests: "",
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
      type: String
    },
    update: {
      type: Boolean
    },

  },

  methods: {
    // Используем axios all что-бы обработать несколько ссылок

    LinkToNextDirectory(e) {
      if (e.target.innerText === "Windows!!") {
        const requestOne = axios.get("http://localhost:3000/post/c/635183fb664dadeb3b7b5e1d");
        const requestTwo = axios.get("http://localhost:3000/post/c/63518413664dadeb3b7b5e1f");
        axios
            .all([requestOne, requestTwo])
            .then(response => this.tests = response)
        this.test = true
      } else if (e.target.innerText === "Program Files") {
        alert(123)
      } else if (e.target.innerText === "Games") {
        alert(123)
      }
    }
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
    color: #028182;
    width: 35%;
    border-right: 3px solid $secondcolor;
  }

  &__size {
    color: #028182;
    width: 22%;
    border-right: 3px solid $secondcolor;
  }

  &__date {
    color: #028182;
    width: 22%;
    border-right: 3px solid $secondcolor;

  }

  &__time {
    color: #028182;
    width: 22%;

  }

  &__name-title {
    font-family: Consolas;
    color: $yellowcolor;
    font-size: 19px;
    margin-top: 5px;
    margin-bottom: 7px;
  }

  &__size-title {
    font-family: Consolas;
    color: $yellowcolor;
    font-size: 19px;
    margin-top: 5px;
    margin-bottom: 7px;
  }

  &__date-title {
    font-family: Consolas;
    color: $yellowcolor;
    font-size: 19px;
    margin-top: 5px;
    margin-bottom: 7px;
  }

  &__time-title {
    font-family: Consolas;
    color: $yellowcolor;
    font-size: 19px;
    margin-top: 5px;
    margin-bottom: 7px;
  }

  &__line-name {
    color: burlywood;
    padding: 3px;
  }

  &__line-name:hover {
    background: $secondcolor;
    cursor: default;
  }

  &__line-size {
    padding: 3px;
    cursor: default;
  }

  &__line-date {
    padding: 3px;
    cursor: default;
  }

  &__line-time {
    padding: 3px;
    cursor: default;
  }

  &__img {
    width: 1.5vw;
  }
}

</style>