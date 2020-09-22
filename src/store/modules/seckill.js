// 获取菜单列表！
import { getSeckill } from "@/request/seckill"
export default {
    namespaced:true,
    state: {
        secklist:[]  // 菜单列表
    },
    getters: {
        secklist: state => state.secklist
    },
    mutations: {
        SET_LIST(state,data){
            state.secklist = data;
        }
    },
    actions: {
        // 请求菜单列表的数据！
        async get_seckill_list({commit}){
            let res = await getSeckill();  
            commit('SET_LIST',res)
        }
    }
};