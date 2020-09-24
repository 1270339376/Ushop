<template>
  <div class="table-bg">
    <el-table
      :data="memberlist"
      row-key="id"
      :tree-props="{ children: 'children' }"
    >
      <el-table-column
        v-model="forminfo.uid"
        label="用户ID"
        align="center"
      ></el-table-column>
      <el-table-column
        v-model="forminfo.nickname"
        label="昵称"
        align="center"
      ></el-table-column>
      <el-table-column
       v-model="forminfo.phone"
        label="手机号"
        align="center"
      ></el-table-column>
      <el-table-column
        
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

import { mapGetters, mapActions } from "vuex";
import { editMember } from "@/request/member";

let defaultItem = {
  uid: 0,
  nickname: "",
  phone: "",
  password: "",
  status: 1, // 状态1正常2禁用
};
let resetItem = { ...defaultItem };
export default {
  data() {
    return {
      forminfo: { ...defaultItem },
      filelist: [],
    };
  },
  computed: {
    ...mapGetters({
      memberlist: "member/memberlist",
    }),
  },
  mounted() {
    if (!this.memberlist.length) {
      this.get_member_list();
    }
  },
  methods: {
    ...mapActions({
      get_member_list: "member/get_member_list",
    }),
    edit(val) {
      this.$emit("edit", { ...val });
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