<template>
  <div >
       <div v-for="(item,index) in telList" class="showList" :key="index" @click="toHome(index)">
           {{item}}
       </div>


  </div>
    
</template>

<script>
import {ref,getCurrentInstance} from "vue"
    export default {
         setup(){
             let { ctx } =getCurrentInstance()
          let telList = ref([1,2,3,4,5])
          const toHome = (index) =>{
               ctx.$router.push({
                   name:"home"
               })
          } 
          return{
              telList,
              toHome
          }
         }
    }
</script>

<style lang="less" scoped>
    .showList:hover{
    cursor: pointer;
    }
</style>