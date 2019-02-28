
<style lang="scss" src="./assets/css/init.scss"></style>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
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

