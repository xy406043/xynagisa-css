<template>
    <div>
        <button @click="toHome" >登录</button>
    </div>
</template>

<script>
import {getCurrentInstance} from "vue"
    export default {
        setup(){
        const {ctx} =getCurrentInstance()
        console.log("渲染结果",getCurrentInstance())
          const toHome =() =>{
              ctx.$router.push({name:"home"})
          }
          return {
              toHome
          }

        }
    }
</script>

<style lang="less" scoped>
    
</style>