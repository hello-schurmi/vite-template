/*
 * @Author: 首页 接口
 * @Date: 2022-06-30
 * @LastEditors: wumingchao wumingchao@quansantai.com
 * @LastEditTime: 2022-07-01
 * @FilePath: /vite-template/src/api/index/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
 
import {axiosGet,axiosPost,axiosPostJson} from "@/assets/js/axios/index";

export let getList = () => {
  return  axiosGet('ucenter-api/userlist/queryLoginUsers')
};

export let getType=(data)=>{
  return axiosPostJson('ucenter-api/userlist/getUsersInDepIds?isAllUser=1',data)
}