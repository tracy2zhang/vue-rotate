<template>
  <div id="app">
    <div class="wrapper">
      <rotate ref="rotate" :rotating="rotating" :dps="dps">
        <img id="logo" src="https://cn.vuejs.org/images/logo.png">
      </rotate>
    </div>
    <button type="button" name="button" @click="rotating = true">旋转</button>
    <button type="button" name="button" @click="rotating = false">停止</button>
    <button type="button" name="button" @click="reset">重置</button>
    <p>
      <a href="https://github.com/tracy2zhang/vue-rotate">Docs</a>
    </p>
  </div>
</template>

<script>
import Rotate from './lib/rotate.vue'

export default {
  name: 'app',
  data () {
    return {
      rotating: true,
      dps: 50
    }
  },
  components: {
    Rotate
  },
  methods: {
    reset () {
      this.$refs.rotate.reset()
    }
  }
}
</script>

<style>
body {
  /*background-color: #aaa;*/
  padding: 0;
  margin: 0;
}
.wrapper {
  width: 100px;
  margin: 20px auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#logo {
  display: block;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  background: #fff;
}
</style>
