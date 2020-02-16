/*
 * @Description:
 * @Version: 2.0
 * @Autor: Ling Long
 * @Date: 2020-01-20 17:25:16
 * @LastEditors  : Ling Long
 * @LastEditTime : 2020-01-21 10:10:19
 */
import * as types from "@/store/mutation-types.js";

export default {
  [types.SET_USER_INFO](state, userInfo) {
    state.userInfo = userInfo;
  },
  [types.SET_MENU](state, list) {
    state.list = list;
  }
};
