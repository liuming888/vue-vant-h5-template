<style lang="scss" scoped>

</style>

<template>
    <div>
        <turn-home/>
        user  Guidance ye
    </div>
</template>

<script>
export default {
    components: {
         turnHome: resolve => require(["@/components/turnHome.vue"], resolve), // 返回首页按钮
    }
}
</script>

