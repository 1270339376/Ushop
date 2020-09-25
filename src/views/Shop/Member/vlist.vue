<template>
  <div class="table-bg">
    <el-table
      :data="list"
    >
      <el-table-column
        prop="uid"
        label="用户ID"
        align="center"
      ></el-table-column>
      <el-table-column
       prop="nickname"
        label="昵称"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="phone"
        label="手机号"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="addtime"
        label="注册日期"
        align="center"
      ></el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="small"
            @click="edit(scope.row)"
            circle
            icon="el-icon-edit"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>

// import { mapGetters, mapActions } from "vuex";
import {getMember } from "@/request/member";



export default {
  data() {
    return {

      list:[]
    };
  },
  // computed: {
  //   ...mapGetters({
  //     memberlist: "member/memberlist",
  //   }),
  // },
  mounted() {
    // 
    this.get_list();
  },
  methods: {
    // ...mapActions({
    //   get_member_list: "member/get_member_list",
    // }),
    edit(val) {
      this.$emit("edit", { ...val });
    },
    async get_list(){
      let res=await getMember();
       this.list = res;
    },
    setinfo(val) {
     val.children ? delete val.children : "";
      defaultItem = { ...val };
      this.forminfo = { ...val };
    },
  },
  components: {},
};
</script>
<style scoped>
</style>