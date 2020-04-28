<template>
    <div>
         你好啊
    </div>
</template>

<script>
import {inject} from "vue" 

    export default {
        name: 'other-s',
        setup(){
            const themeColor = inject('globalData')
            console.log("全局",themeColor)
        }
    }
</script>

<style lang="less" scoped>
    
</style>