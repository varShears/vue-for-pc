<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Ling Long
 * @Date: 2020-01-16 14:21:46
 * @LastEditors  : Ling Long
 * @LastEditTime : 2020-01-16 15:16:51
 -->
<template>
  <div>
    <div class="logo"></div>
    <a-breadcrumb
      style="margin: 1.5rem 2rem;color:#FFF;position:relative;left:0;top:0;width: 200px;
    vertical-align: top;
    display: inline-block;"
    >
      <a-breadcrumb-item v-for="(i,index) in munus" :key="index">{{i}}</a-breadcrumb-item>
      <!-- <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item>List</a-breadcrumb-item>
      <a-breadcrumb-item>App</a-breadcrumb-item>-->
    </a-breadcrumb>
  </div>
</template>

<script>
import sList from "@/utils/sider";
export default {
  data() {
    return {
      blist: sList,
      munus: []
    };
  },
  created() {
    this.dealMenu();
  },
  methods: {
    dealMenu() {
      const urls = this.$route.matched;

      const arr = this.flatten(this.blist);

      const menus = [];

      arr.forEach(e => {
        urls.forEach(ele => {
          if (e.key === ele.path) {
            menus.push(e.title);
          }
        });
      });
      this.munus = menus;
    },
    flatten(ary) {
      return ary.reduce(
        (arr, { key, title, path, children = [] }) =>
          arr.concat([{ key, title, path }], this.flatten(children)),
        []
      );
    }
  },
  watch: {
    $route: function() {
      this.dealMenu();
    }
  }
};
</script>

<style>
.logo {
  height: 64px;
  position: relative;
  left: 0;
  display: inline-block;
  width: 12.5rem;
  line-height: 64px;
  cursor: pointer;
  -webkit-transition: padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
  background: #373847;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  overflow: hidden;
  background: url("../../assets/logo.png") no-repeat;
  background-size: 3rem;
  background-position-y: 50%;
  background-position-x: 10%;
  /* display: flex; */
  /* align-items: center; */
  /* padding-left: 20px; */
}
.ant-breadcrumb-link {
  color: #fff;
}
.ant-breadcrumb-separator {
  color: #fff;
}
</style>
