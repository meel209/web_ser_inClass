<template>
  <div id="app">
    <MyNav></MyNav>
    <router-view/>
  </div>
</template>
<script>

import MyNav from "@/components/Nav.vue";


export default {
  name: 'App',
  components: {
    MyNav
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
