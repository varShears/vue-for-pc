/*
 * @Description: sider menu
 * @Version: 2.0
 * @Autor: Ling Long
 * @Date: 2020-01-21 10:29:31
 * @LastEditors  : Ling Long
 * @LastEditTime : 2020-01-21 11:16:23
 */
import service from "./requests/httpService";

const services = {
  getMenu() {
    return service.get("/getMenu");
  }
};

export default services;
