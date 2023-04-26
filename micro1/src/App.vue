<template>
  <div id="app">
    <nav>
      <span @click="handleToHome">Home</span> |
      <span @click="handleToAbout">About</span>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
// import LayoutIndex from './views/LayoutIndex.vue'
export default {
  // components: { LayoutIndex },
  methods: {
    handleToHome() {
      this.$router.push('/micro1')
    },
    handleToAbout() {
      this.$router.push('/micro1/about')
    }
  }
}
</script>
<style>
/** 这里没有样式隔离 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
