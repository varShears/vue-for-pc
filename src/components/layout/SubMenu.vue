<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Ling Long
 * @Date: 2020-01-16 10:52:48
 * @LastEditors  : Ling Long
 * @LastEditTime : 2020-01-19 10:27:34
 -->
<template functional>
  <a-sub-menu :key="props.menuInfo.key">
    <span slot="title">
      <a-icon type="mail" /><span>{{ props.menuInfo.title }}</span>
    </span>
    <template v-for="item in props.menuInfo.children">
      <a-menu-item
        v-if="!item.children"
        :key="item.key"
      >
        <a-icon type="pie-chart" />
        <span>{{ item.title }}</span>
      </a-menu-item>
      <sub-menu v-else :key="item.key" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>
<script>
  export default {
    props: ["menuInfo"],
    methods: {
      turnTo(item) {
        this.$router.push(item.path)
      }
    }
  }
</script>

<style lang="less" scoped></style>
