<style lang="scss" scoped>
    .content-container{
        height: 95vh;
        overflow-y:scroll; 
        box-sizing: border-box;
    }
</style>

<template>
    <div class="content-container">
        内容
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

