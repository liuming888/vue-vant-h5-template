
<style lang="scss" src="./assets/css/init.scss"></style>

<template>
  <div id="app">
    <zdd-layout></zdd-layout>
  </div>
</template>

<script>
import zddMain from '@/components/layout/zddMain.vue';
export default {
  name: "App",
  components: {
    'zdd-layout':zddMain
  },
  created() {},
  methods: {
    /**
     * @description: 初始化FB
     */
    initFB() {
      window.fbAsyncInit = function() {
        FB.init({
          appId: "259750671380714",
          cookie: true,
          xfbml: true,
          version: "v3.2"
        });
        FB.AppEvents.logPageView();
      };
    }
  }
};
</script>

