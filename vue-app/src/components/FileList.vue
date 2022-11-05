<template>
  <div class="file">
    <div class="file__content">
      <div class="file__panel">
        <div class="file__name" v-on:click="LinkToNextDirectory">
          <div class="file__name-title">Имя</div>
          <template v-if="this.imgs || this.videos || this.games ">
            <div class="file__line-name" v-if="this.videos" v-for="video in videos">{{ video.data.name }}
              <img class="file__img" src="../assets/png/video.png" alt="">
            </div>
            <div class="file__line-name" v-if="this.imgs" v-for="img in imgs">{{ img.data.name }}
              <img class="file__img" src="../assets/png/image.png" alt="">
            </div>
            <div class="file__line-name" v-if="this.games" v-for="game in games">{{ game.data.name }}
              <img class="file__img" src="../assets/png/program.png" alt="">
            </div>
          </template>
          <div v-else>
            <div class="file__line-name" @click="addDirectoryName" v-if="direction === directionC"
                 v-for="item in items">{{ item.data.name }}
              <img class="file__img" src="../assets/png/file.png" alt="">
            </div>
            <div class="file__line-name" @click="addDirectoryName" v-if="direction === directionD"
                 v-for="file in files">{{ file.data.name }}
              <img class="file__img" src="../assets/png/file.png" alt="">
            </div>
          </div>
        </div>
        <div class="file__size">
          <div class="file__size-title">Размер</div>
          <template v-if="this.imgs || this.videos || this.games">
            <div class="file__line-size" v-if="this.videos" v-for="video in videos">{{ video.data.size }}
            </div>
            <div class="file__line-size" v-if="this.imgs" v-for="img in imgs">{{ img.data.size }}
            </div>
            <div class="file__line-size" v-if="this.games" v-for="game in games">{{ game.data.size }}
            </div>
          </template>
          <div v-else>
            <div class="file__line-size" v-if="direction === direction1" v-for="item in items">{{ item.data.size }}
            </div>
            <div class="file__line-size" v-if="direction === direction2" v-for="file in files">{{ file.data.size }}
            </div>
          </div>

        </div>
        <div class="file__date">
          <div class="file__date-title">Дата</div>
          <template v-if="this.imgs || this.videos || this.games">
            <div class="file__line-date" v-if="this.videos" v-for="video in videos">{{ video.data.date }}
            </div>
            <div class="file__line-date" v-if="this.imgs" v-for="img in imgs">{{ img.data.date }}
            </div>
            <div class="file__line-date" v-if="this.games" v-for="game in games">{{ game.data.date }}
            </div>
          </template>
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
          <template v-if="this.imgs || this.videos || this.games">
            <div class="file__line-time" v-if="this.videos" v-for="video in videos">{{ video.data.time }}
            </div>
            <div class="file__line-time" v-if="this.imgs" v-for="img in imgs">{{ img.data.time }}
            </div>
            <div class="file__line-time" v-if="this.games" v-for="game in games">{{ game.data.time }}
            </div>
          </template>
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
        <div class="file__name" v-on:click="LinkToNextDirectorySecond">
          <div class="file__name-title">Имя</div>
          <template v-if="this.secondImgs || this.secondVideos || this.secondGames ">
            <div class="file__line-name" v-if="this.videos" v-for="video in videos">{{ video.data.name }}
              <img class="file__img" src="../assets/png/video.png" alt="">
            </div>
            <div class="file__line-name" v-if="this.imgs" v-for="img in imgs">{{ img.data.name }}
              <img class="file__img" src="../assets/png/image.png" alt="">
            </div>
            <div class="file__line-name" v-if="this.games" v-for="game in games">{{ game.data.name }}
              <img class="file__img" src="../assets/png/program.png" alt="">
            </div>
          </template>
          <div v-else>
            <div class="file__line-name" @click="addDirectoryName" v-if="direction === directionE"
                 v-for="item in itemsE">{{ item.data.name }}
              <img class="file__img" src="../assets/png/file.png" alt="">
            </div>
            <div class="file__line-name" @click="addDirectoryName" v-if="direction === directionF"
                 v-for="file in filesF">{{ file.data.name }}
              <img class="file__img" src="../assets/png/file.png" alt="">
            </div>
          </div>
        </div>
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
      directionC: "C:\\",
      directionD: "D:\\",
      directionE: "E:\\",
      directionF: "F:\\",
      imgs: "",
      videos: "",
      secondImgs: "",
      secondVideos: "",
      secondGames: ""
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
    itemsE: {
      type: Array,
      required: true
    },
    filesF: {
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
            .then(response => this.imgs = response)
        this.imgs = true
      } else if (e.target.innerText === "Program Files") {
        const requestOne = axios.get("http://localhost:3000/post/c/6363991bbb9f071a63ee2bbc");
        const requestTwo = axios.get("http://localhost:3000/post/c/6363a03ebb9f071a63ee2c56");
        axios
            .all([requestOne, requestTwo])
            .then(response => this.videos = response)
        this.videos = true

      } else if (e.target.innerText === "Games") {
        const requestOne = axios.get("http://localhost:3000/post/d/6363a129bb9f071a63ee2c65");
        const requestTwo = axios.get("http://localhost:3000/post/d/6363a13dbb9f071a63ee2c67");
        const requestThree = axios.get("http://localhost:3000/post/d/6363a159bb9f071a63ee2c69");
        axios
            .all([requestOne, requestTwo, requestThree])
            .then(response => this.games = response)
        this.games = true
      }
    },

    // Экран с данными справа, диски E,F

    LinkToNextDirectorySecond(e) {
      if (e.target.innerText === "Windows!!") {
        const requestOne = axios.get("http://localhost:3000/post/c/635183fb664dadeb3b7b5e1d");
        const requestTwo = axios.get("http://localhost:3000/post/c/63518413664dadeb3b7b5e1f");
        axios
            .all([requestOne, requestTwo])
            .then(response => this.secondImgs = response)
        this.secondImgs = true
      } else if (e.target.innerText === "Program Files") {
        const requestOne = axios.get("http://localhost:3000/post/c/6363991bbb9f071a63ee2bbc");
        const requestTwo = axios.get("http://localhost:3000/post/c/6363a03ebb9f071a63ee2c56");
        axios
            .all([requestOne, requestTwo])
            .then(response => this.secondVideos = response)
        this.secondVideos = true

      } else if (e.target.innerText === "Games") {
        const requestOne = axios.get("http://localhost:3000/post/d/6363a129bb9f071a63ee2c65");
        const requestTwo = axios.get("http://localhost:3000/post/d/6363a13dbb9f071a63ee2c67");
        const requestThree = axios.get("http://localhost:3000/post/d/6363a159bb9f071a63ee2c69");
        axios
            .all([requestOne, requestTwo, requestThree])
            .then(response => this.secondGames = response)
        this.secondGames = true
      }
    },
    addDirectoryName(e) {
      this.$emit("VideoClick", e.currentTarget.innerText)
    }
  },
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
    display: flex;
    justify-content: center;
    align-items: center;
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
    margin-left: 5px;
  }
}

</style>