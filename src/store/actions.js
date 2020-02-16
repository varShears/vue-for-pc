/*
 * @Description:
 * @Version: 2.0
 * @Autor: Ling Long
 * @Date: 2020-01-20 17:24:50
 * @LastEditors  : Ling Long
 * @LastEditTime : 2020-01-21 09:53:33
 */
import * as types from "@/store/mutation-types.js";

export default {
  changeMenu({ commit }, list) {
    commit(types.SET_MENU, list);
  }
};
