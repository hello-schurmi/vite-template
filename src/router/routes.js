/*
 * @Author: 路由组件
 * @Date: 2022-06-23
 * @LastEditors: wumingchao wumingchao@quansantai.com
 * @LastEditTime: 2022-07-01
 * @FilePath: /vite-template/src/router/routes.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/index.vue"), //路由懒加载
  },
  //重定向到首页
  {
    path: "/home",
    redirect:'/',  
  },
  {
    path: "/wxc",
    name: "wxc",
    component: () => import("@/views/wxc/index.vue"), //路由懒加载
  },
];
