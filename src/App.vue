<template>
  <div id="app">
    <router-view></router-view>
    <!-- $route 指当前路由 -->
    <footer-guide v-show="$route.meta.showFooter === true"></footer-guide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide';
export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

