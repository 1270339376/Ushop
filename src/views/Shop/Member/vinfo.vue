<template>
  <el-dialog
    title="修改"
    @close="cancel"
    :visible.sync="info.isShow"
    width="40%"
  >
    <!-- 表单 -->
    <el-form :model="forminfo" ref="form" :rules="rules" label-width="140px">
      <el-form-item label="会员ID" prop="uid">
        <el-input v-model="forminfo.uid"></el-input>
      </el-form-item>
      <el-form-item label="会员昵称" prop="nickname" readonly>
        <el-input v-model="forminfo.nickname"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="forminfo.phone"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="forminfo.phone"></el-input>
      </el-form-item>

      <el-form-item label="角色状态">
        <el-switch
          v-model="forminfo.status"
          :active-value="1"
          :inactive-value="2"
        ></el-switch>
      </el-form-item>
      <el-form-item label>
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button type="warning" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
// 导入  添加和修改的 请求封装方法！
import { editMember } from "@/request/member";
// import { mapGetters, mapActions } from "vuex";
let defaultItem = {
  uid: 0,
  nickname: "",
  phone: "",
  password: "",
  status: 1, // 状态1正常2禁用
};
let resetItem = { ...defaultItem };
export default {
  props: {
    info: {
      type: Object,
      default() {
        return {
          isAdd: true,
          isShow: false,
        };
      },
    },
  },
  data() {
    return {
      forminfo: { ...defaultItem },
      rules: {
        // 验证规则对象！
        // rolename: [{ required: true, message: "必填！", trigger: "blur" }],
      },
      //   checkStrictly: false, //false 关联  true父子不关联
    };
  },
  computed: {
    // ...mapGetters({
    //   menulist: "menu/menulist",
    // }),
  },
  mounted() {
    // if (!this.menulist.length) {
    //   this.get_menu_list();
    // }
  },
  methods: {
    // ...mapActions({
    //   get_menu_list: "menu/get_menu_list",
    //   get_role_list: "role/get_role_list",
    // }),
    setinfo(val) {
      // 将数据赋给默认defaultItem; 赋给表单
      //   let idarr = val.menus.split(",");
      //   if (idarr[0]) {
      //     this.checkStrictly = true;
      //     this.$nextTick(() => {
      //       this.$refs.tree.setCheckedKeys(idarr);
      //       this.checkStrictly = false;
      //     });
      //   }
      val.password = "";
      defaultItem = { ...val };
      this.forminfo = { ...val };
    },
    async submit() {
      // 获取树形节点
      //   let idarr = this.$refs.tree
      //     .getCheckedKeys()
      //     .concat(this.$refs.tree.getHalfCheckedKeys());
      //   if (idarr.length) {
      //     this.forminfo.menus = idarr;
      //   } else {
      //     this.$message.warning("请选择权限");
      //     return;
      //   }

      this.$refs.form.validate(async (valid) => {
        if (valid) {
          let res;
          res = await editMember(this.forminfo);
          // console.log(res);
          if (res.code == 200) {
            console.log(res.msg);
            this.$message.success(res.msg);
            this.info.isShow = false;
            // this.get_role_list();
             this.$emit('update') 
            this.cancel();
          } else {
            this.$message.error(res.msg);
          }
        }
      });
    },
    reset() {
      this.setinfo = { ...defaultItem };
    },
    cancel() {
    //   this.$refs.tree.setCheckedKeys([]);
      this.forminfo = { ...resetItem };
    },
  },
  components: {},
};
</script>
<style scoped>
</style>