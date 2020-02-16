<template>
  <div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" :src="img100" />
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" :src="img100" />
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" :src="img100" />
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" :src="img100" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
// import img100 from "@/asserts/img/mallDemo/100_100";

export default {
  name: "mallDemo",
  data() {
    return {
      img100: null
    };
  },
  methods: {}
};
</script>

<style>
</style>