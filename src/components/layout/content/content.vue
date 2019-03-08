<style lang="scss" scoped>
    .content-container{
        height: calc(100vh - 93px);
        overflow-y:scroll; 
        box-sizing: border-box;
    }
</style>

<template>
    <div class="content-container">
        <router-view></router-view>
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

