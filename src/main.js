import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)
//Vue3.0 全局混入
app.mixin({
    beforeCreate(){
        //  console.log("我是全局混入")
    }
})
app.use(router).use(store).mount('#app')
