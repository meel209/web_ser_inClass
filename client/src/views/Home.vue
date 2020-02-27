<template>

  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
<!--
  <div class="card">
    <div class="card-content">
      <ul>
          <li v-for="player in Players" :key="player.Name" >
            {{player.Name}} {{player.Score}}
      </ul>
    </div>
  </div>
-->

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {Players, PictureDeck, CurrentPicture, Init} from "../models/Game";
Init();


export default {
  name: 'Home',
  data:()=>({

  }),

  components: {
    HelloWorld
  }

}
</script>
