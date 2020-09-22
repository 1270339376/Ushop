import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import menu from "./modules/menu"
import role from './modules/role'
import user from './modules/user'
import category from "./modules/category"
import specs from './modules/specs'
import goods from "./modules/goods"
import banner from "./modules/banner"
import seckill from "./modules/seckill"
let store =new Vuex.Store({
    state:{
        iscollapse:false  // 是否折叠，默认不折叠！
    },
    mutations:{
        TOGGLE(state){
            state.iscollapse = !state.iscollapse
        }
    },
    modules:{
        menu,role,user,category,specs,goods,banner,seckill
    }
})
export default store;