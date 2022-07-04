/*
 * @Author:  路由
 * @Date: 2022-06-23
 * @LastEditors: wumingchao wumingchao@quansantai.com
 * @LastEditTime: 2022-07-01
 * @FilePath: /vite-template/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import {createRouter,createWebHistory} from 'vue-router';
import routes from './routes'
 
const router = createRouter({
    history:createWebHistory(), //history模式使用HTML5模式
    routes,
});

 
export default router;
 