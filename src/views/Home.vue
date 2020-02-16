<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Ling Long
 * @Date: 2019-12-18 15:59:18
 * @LastEditors  : Ling Long
 * @LastEditTime : 2020-01-17 09:05:51
 -->
<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <!-- <iHeader></iHeader> -->
      <Breadcrumb></Breadcrumb>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200">
        <Sider></Sider>
      </a-layout-sider>
      <a-layout style="padding: 1rem;background-color:#16171c">
        <a-layout-content
          :style="{
            background: '#262732',
            padding: '24px',
            margin: 0,
            minHeight: '280px',
            color: '#FFF'
          }"
        >
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
  import iHeader from "../components/layout/header.vue"
  import Sider from "../components/layout/sider.vue"
  import Breadcrumb from "../components/layout/breadcrumb.vue"
  export default {
    name: "home",
    components: {
      iHeader,
      Sider,
      Breadcrumb
    }
  }
</script>

<style type="text/less" lang="less" scoped>
  .ant-layout-has-sider {
    height: calc(100vh - 64px);
    // background-color: rgba(0, 0, 0, 0.65);
  }
  .ant-layout-sider-children {
    background-color: #373847 !important;
  }
  .ant-layout-sider-dark {
    background-color: #373847;
  }
  .ant-layout-header {
    background-color: #373847;
  }
  .ant-menu {
    background-color: #373847;
  }
  .header .ant-menu-dark {
    background-color: #373847 !important;
  }
  .header {
    padding: 0;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  }
</style>
