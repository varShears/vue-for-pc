<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Ling Long
 * @Date: 2020-01-16 09:23:30
 * @LastEditors  : Ling Long
 * @LastEditTime : 2020-01-16 14:52:05
 -->
<template>
  <div style="background-color:#373847">
    <div class="logo" />
    <a-menu
      :defaultSelectedKeys="defaultSelectedKeys"
      :defaultOpenKeys="defaultOpenKeys"
      mode="horizontal"
      theme="dark"
      style="background-color:#373847"
    >
      <template v-for="item in this.list">
        <a-menu-item v-if="!item.children" :key="item.key">
          <a-icon type="pie-chart" />
          <span>{{ item.title }}</span>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.key" />
      </template>
    </a-menu>
  </div>
</template>

<script>
  import SubMenu from "./SubMenu.vue"
  import list from "../../utils/header.js"
  export default {
    name: "iHeader",
    data() {
      return {
        list: list,
        defaultSelectedKeys: ["1"],
        defaultOpenKeys: []
      }
    },
    components: {
      "sub-menu": SubMenu
    },
    mounted() {},
    methods: {
      getMenuList() {}
    }
  }
  // #373847
</script>

<style type="text/less" lang="less" scoped>
  .ant-menu-horizontal {
    line-height: 64px;
  }
  .ant-layout-header {
    padding: 0;
  }
  .logo {
    width: 122px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
  }
</style>
