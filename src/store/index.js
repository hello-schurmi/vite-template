/*
 * @Author:  vuex
 * @Date: 2022-06-23
 * @LastEditors: wumingchao wumingchao@quansantai.com
 * @LastEditTime: 2022-06-23
 * @FilePath: /vite-template/src/store/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {createStore} from 'vuex'
import {mutations} from './mutations'
import {actions} from './actions'
import { state } from './state'
export const store = createStore({
    state,
     
    getters:{
        getId(state){
            return state.typeId
        },
        getUser(state){
            return state.user
        }
 
    },
    mutations,
    actions
})
 