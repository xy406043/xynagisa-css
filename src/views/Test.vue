<template>
  <div class="home">
    <h1 >test count:{{count}}</h1>
    <h2 >count * 2 ={{doubleCount}}</h2>
    <button @click="add">add</button>
    <button @click="update">update</button>
    <h1 >test count2:{{b.count}}</h1>
  </div>
</template>

<script>
import {ref,reactive,onMounted,computed,watch,getCurrentInstance} from "vue"

export default {
  name: 'test-el',
  components: {
  },
  setup(props,content){
    /**
     * @Vue3的Hook写法
     * @按逻辑划分代码而不是类别
     */
    const {ctx} = getCurrentInstance()
    onMounted(()=>{
      console.log(`vue3`,ctx,props,content)
    })
    const {count,a,add,doubleCount,update,b} = useComputeCount()

    return{
      count,
      a,
      add,
      doubleCount,
      update,
      b
    }
  }
}
export function  useComputeCount (){
   const {ctx} = getCurrentInstance()
    const count =ref(0)
    const b =reactive({count:0})
    //监听count
    watch(()=>count.value,val =>{
      console.log(`count is ${val}`)
    })
    const add= () =>{count.value++}
    const doubleCount =computed(()=> count.value*2)
    const a  = computed(()=> ctx.$store.state.test.a)
    const update =() =>{
      ctx.$store.commit("setTestA",count)
      console.log(ctx.$store.state.test.a)
    }
    return{
      count,
      add,
      doubleCount,
      a,
      update,
      b
    }
}
</script>
