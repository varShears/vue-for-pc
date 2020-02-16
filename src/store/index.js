/*
 * @Description:
 * @Version: 2.0
 * @Autor: Ling Long
 * @Date: 2019-12-18 15:59:18
 * @LastEditors  : Ling Long
 * @LastEditTime : 2020-01-21 15:37:33
 */
import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "我是傻逼"
  },
  // modules,
  actions, // 根级别的 action
  mutations, // 根级别的 mutations
  // 根级别的 getters
  getters: {}
});
