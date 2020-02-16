/*
 * @Descripttion: http 请求工具
 * @version: 1.0
 * @Author: zhaoys@boe.com.cn
 * @Date: 2019-10-23 17:34:13
 * @LastEditors  : Ling Long
 * @LastEditTime : 2019-12-19 09:34:18
 */

/*********************************/
// 请求demo
// demo(){
//  return request({
//  url:'',
//  method:'', // GET or POST
//  data or params:**
//  })
//}
/*********************************/



import Vue from 'vue'
import message from 'ant-design-vue/es/message'
import axios from 'axios'
// import {
//     Modal
// } from 'ant-design-vue'
import { Toast } from 'mint-ui';
// import {
//     TokenKey,
//     getToken
// } from './auth'
import store from '@/store'
import router from '@/router'


const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 20000
})

// 携带 cookie
service.defaults.withCredentials = true

service.interceptors.request.use(config => {
  if (store.getters.token) {
    // 头部携带 token
    // config.headers[TokenKey] = getToken()  // 获取token

  }

  return config
}, error => {
  console.error(error)
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  const res = response.data
  if (response.headers['content-type'] && response.headers['content-type'].startsWith('application/json') && res.code !== 0) {
    if (res.code === 20003 || res.code === 20004 || res.code === 20005) {
      Toast({
        message: '您的登录信息已失效，点击确定重新登录，点击取消继续留在当前页面',
        position: 'middle',
        duration: 3000
      });

      // 执行登录失效后的回调
      // return store.dispatch('user/resetToken')
      //   .then(() => {
      //     location.reload()
      //   })
    } else {
      message.error(res.message)
    }

    return Promise.reject(res)
  } else {
    // // 存储 token，已经启用了 cookie, 该头部字段非必须。适配一些不支持或者禁用了 cookie 的场合。
    // if (res.data.token) {
    //   store.dispatch('user/setToken', res.data.token)
    // }

    return Promise.resolve(res)
  }
}, error => {
  message.error(error.message, 5)
  return Promise.reject(error)
})

export default service
