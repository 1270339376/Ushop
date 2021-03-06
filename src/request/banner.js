import $axios from "@/common/http"  // 导入封装好的axios!

/**
 * 获取菜单列表
 */
export async function getBanner() {
    let res = await $axios.get("/bannerlist?istree=1")
    if(res.code==200 && res.list){
        return res.list
    }else{
        return [];
    }
}
/**
 * 添加轮播图
 * @param {*} data  添加的数据
 */
export function addBanner(data){
    return  $axios.post("/banneradd",data)
}
/**
 * 修改轮播
 * @param {*} data  修改的轮播
 */
export function editBanner(data) {
    return $axios.post("/banneredit", data)
}
/**
 * 删除轮播
 * @param {*} id  删除的ID
 */
export function delBanner(id) {
    return $axios.post("/bannerdelete", {id})
}