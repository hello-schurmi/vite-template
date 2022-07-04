<!--
 * @Author: wumingchao wumingchao@quansantai.com
 * @Date: 2022-06-23
 * @LastEditors: wumingchao wumingchao@quansantai.com
 * @LastEditTime: 2022-07-01
 * @FilePath: /vite-template/src/views/home/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div class="">
    {{ a }}
    <el-button type="primary">Primary</el-button>
    <div>
      <p v-for="(item, index) in res.data" :key="index">{{ item.realName }}==={{ item.telephone }}</p>
    </div>
  </div>
</template>
<script setup>
import { getList , getType} from "../../api/index";
import { onMounted, reactive, ref } from "vue";
defineProps({});
let a = ref("hom页面");
//直接对res 赋值 会使res 失去相应式 应使用 res.data
const res = reactive({
  data: {},
  pages:{
    pageSize:0,
    pageNum:10
  },
  depId:201019000015749
});

//初始化 
onMounted(async () => {
  let x =  await getList()
  res.data=x.result 
  let y= await getType(['201019000015749'])
  console.log(y.result);


})
</script>
<style scoped>
/*@import url(); 引入公共css类*/
</style>
