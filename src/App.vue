<template>
  <div id="app">
    <router-view></router-view>
    <!-- $route 指当前路由121122112 -->
    <footer-guide v-show="$route.meta.showFooter === true"></footer-guide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide';
import {reqFoodCategorys} from './api';


export default {

  //  mounted(){
  //  reqFoodCategorys().then( res =>{
  //   console.log(res)

  //  })
  // },

  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

