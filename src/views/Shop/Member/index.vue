<template>
  <div>
    <!-- <el-button type="primary" @click="add">添加轮播</el-button> -->
    <!-- 列表组件 -->
    <v-list @edit="edit" ref="list"></v-list>
    <!-- 添加/修改组件 -->
    <v-info :info="info" ref="dialog" @update="update"></v-info>
  </div>
</template>

<script>
import VList from './vlist'
import VInfo from './vinfo'
export default {
  components: {
    VList,VInfo
  },
  props: {},
  data() {
    return {
      info: {
        // 组件的info变量
        isAdd: false,
        isShow: false, 
      },
    };
  },
  methods: {

    edit(val) {
      this.info.isAdd = false;
      this.info.isShow = true;
      // 调用弹框组件的setinfo方法！
      this.$refs.dialog.setinfo(val);
    },
    update(){
      this.$refs.list.get_list();  //调用组件的获取数据列表的方法 
    }
  },
};
</script>

<style  scoped>
</style>
