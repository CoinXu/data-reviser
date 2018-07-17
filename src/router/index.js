/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @default vue路由配置
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

import demoPage from "../page/demo";

Vue.use(VueRouter);

const routes = [{
  path: '/demo',
  name: 'demo',
  component: demoPage
}];


const router = new VueRouter({
  routes
});


export default router
