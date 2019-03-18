<style lang="scss" scoped>
    .content-container{
        width: 100vw;
        height:100vh;
        overflow: hidden;
        overflow-y:scroll; 
        box-sizing: border-box;
    }
</style>

<template>
    <div class="content-container">
        <router-view></router-view>

        <income-window />
    </div>
</template>

<script>
import incomeWindow from '../../incomeWindow.vue';   
export default {
    components: {
        incomeWindow //收益浮窗
    },
    data(){
        return {
          
        }
    }
}
</script>

