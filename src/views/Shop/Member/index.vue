<template>
  <div>
    <!-- <el-button type="primary" @click="add">添加轮播</el-button> -->
    <!-- 列表组件 -->
    <v-list @edit="edit"></v-list>
    <!-- 添加/修改组件 -->
    <!-- <v-info :info="info" ref="dialog"></v-info> -->
  </div>
</template>

<script>
import VList from './vlist'
// import VInfo from './vinfo'
export default {
  components: {
    VList
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
  },
};
</script>

<style  scoped>
</style>
