<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Ling Long
 * @Date: 2020-01-16 09:23:39
 * @LastEditors  : Ling Long
 * @LastEditTime : 2020-01-21 11:15:07
 -->
<template>
  <a-menu
    :defaultSelectedKeys="defaultSelectedKeys"
    :defaultOpenKeys="defaultOpenKeys"
    :openKeys.sync="openKeys"
    mode="inline"
    theme="dark"
    :forceSubMenuRender="true"
    :selectedKeys.sync="selectedKeys"
    @click="this.turnTo"
    class="sider"
  >
    <template v-for="item in this.list">
      <a-menu-item v-if="!item.children" :key="item.key">
        <a-icon type="pie-chart" />
        <span>{{ item.title }}</span>
      </a-menu-item>
      <sub-menu v-else :menu-info="item" :key="item.key" />
    </template>
  </a-menu>
</template>

<script>
import SubMenu from "./SubMenu.vue";
import list from "../../utils/sider.js";
import service from "../../service/Menu";
import { mapActions } from "vuex";
export default {
  name: "iSider",
  data() {
    return {
      list: list,
      defaultSelectedKeys: [],
      defaultOpenKeys: [],
      selectedKeys: [],
      openKeys: []
    };
  },
  computed: {
    // ...mapState([""]),
    // ...mapGetters("user", ["getUserInfo"])
  },
  created() {
    this.checkSelected();
  },
  mounted() {
    // this.selectedKeys = ["/home"];
  },
  components: {
    "sub-menu": SubMenu
  },
  methods: {
    ...mapActions(["changeMenu"]),
    turnTo({ item, key, keyPath }) {
      console.log({ item, key, keyPath });
      this.$router.push({ path: key }).catch(err => {
        err;
      });
      this.selectedKeys = null;
      this.selectedKeys = [key];
    },
    getMenuList() {},
    checkSelected() {
      // 在这里配置跳转首页
      const url = this.$route.path;
      const urls = this.$route.matched;
      const urlList = urls.map(e => {
        return e.path;
      });
      const len = url.split("/").length - 1;
      if (len === 1) {
        this.openKeys = [];
        this.selectedKeys = [url];
      } else {
        const _selfKeys = url.split("/").slice(1, len + 1);
        const _selfLen = _selfKeys.length - 1;
        const menuList = [];
        let str = "/" + _selfKeys[0];
        let i = 0;
        while (i < _selfLen) {
          i++;
          menuList.push(str + "/" + _selfKeys[i]);
          str = str + "/" + _selfKeys[i];
        }
        menuList.reverse();
        this.openKeys = menuList;
        console.log(url);
        this.selectedKeys = menuList;
      }
    }
  }
};
</script>

<style type="text/less" lang="less" scoped>
.ant-menu-inline .ant-menu-item {
  margin-top: 0;
}
.ant-menu-dark .ant-menu-inline.ant-menu-sub {
  background-color: #373847 !important;
}
.sider ::v-deep .ant-menu {
  background-color: #373847 !important;
}
.sider ::v-deep .ant-menu-sub {
  box-shadow: none !important;
}
</style>
