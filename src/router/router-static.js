import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
// 解决多次点击左侧菜单报错问题
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

import users from '@/views/modules/users/list'
import chujiguanli from '@/views/modules/chujiguanli/list'
import dictionary from '@/views/modules/dictionary/list'
import jiedai from '@/views/modules/jiedai/list'
import jiesuan from '@/views/modules/jiesuan/list'
import yingdi from '@/views/modules/yingdi/list'
import yingdiOrder from '@/views/modules/yingdiOrder/list'
import yonghu from '@/views/modules/yonghu/list'
import config from '@/views/modules/config/list'
import dictionaryJiedai from '@/views/modules/dictionaryJiedai/list'
import dictionaryJiedaiZhuangtai from '@/views/modules/dictionaryJiedaiZhuangtai/list'
import dictionaryJiesuanZhuangtai from '@/views/modules/dictionaryJiesuanZhuangtai/list'
import dictionarySex from '@/views/modules/dictionarySex/list'
import dictionaryYingdi from '@/views/modules/dictionaryYingdi/list'
import dictionaryYingdiOrder from '@/views/modules/dictionaryYingdiOrder/list'
import dictionaryYingdiZhuangtai from '@/views/modules/dictionaryYingdiZhuangtai/list'
import yuyuejiedai from '@/views/modules/jiedai/add-or-update'
import jiedaijiesuan from '@/views/modules/jiesuan/add-or-update'




//2.配置路由   注意：名字
const routes = [{
  path: '/index',
  name: '首页',
  component: Index,
  children: [{
    // 这里不设置值，是把main作为默认页面
    path: '/',
    name: '首页',
    component: Home,
    meta: { icon: '', title: 'center' }
  }, {
    path: '/updatePassword',
    name: '修改密码',
    component: UpdatePassword,
    meta: { icon: '', title: 'updatePassword' }
  }, {
    path: '/pay',
    name: '支付',
    component: pay,
    meta: { icon: '', title: 'pay' }
  }, {
    path: '/center',
    name: '个人信息',
    component: center,
    meta: { icon: '', title: 'center' }
  }, {
    path: '/huanyuan',
    name: '数据还原',
    component: huanyuan
  }, {
    path: '/beifen',
    name: '数据备份',
    component: beifen
  }, {
    path: '/users',
    name: '管理信息',
    component: users
  }
    , {
    path: '/dictionaryJiedai',
    name: '接待类型',
    component: dictionaryJiedai
  }
    , {
    path: '/dictionaryJiedaiZhuangtai',
    name: '接待状态',
    component: dictionaryJiedaiZhuangtai
  }
    , {
    path: '/dictionaryJiesuanZhuangtai',
    name: '结算状态',
    component: dictionaryJiesuanZhuangtai
  }
    , {
    path: '/dictionarySex',
    name: '性别类型',
    component: dictionarySex
  }
    , {
    path: '/dictionaryYingdi',
    name: '营地类型',
    component: dictionaryYingdi
  }
    , {
    path: '/dictionaryYingdiOrder',
    name: '营地类型',
    component: dictionaryYingdiOrder
  }
    , {
    path: '/dictionaryYingdiZhuangtai',
    name: '营地状态',
    component: dictionaryYingdiZhuangtai
  }
    , {
    path: '/jiedaijiesuan',
    name: '接待结算',
    component: jiedaijiesuan
  }
    , {
    path: '/yuyuejiedai',
    name: '预约接待',
    component: yuyuejiedai
  }

  //   , {
  //   path: '/config',
  //   name: '轮播图',
  //   component: config
  // }


    , {
    path: '/chujiguanli',
    name: '初级管理',
    component: chujiguanli
  }
    , {
    path: '/dictionary',
    name: '字典',
    component: dictionary
  }
    , {
    path: '/jiedai',
    name: '接待',
    component: jiedai
  }
    , {
    path: '/jiesuan',
    name: '结算',
    component: jiesuan
  }
    , {
    path: '/yingdi',
    name: '营地',
    component: yingdi
  }
    , {
    path: '/yingdiOrder',
    name: '营地预约',
    component: yingdiOrder
  }
    , {
    path: '/yonghu',
    name: '用户',
    component: yonghu
  }


  ]
},
{
  path: '/login',
  name: 'login',
  component: Login,
  meta: { icon: '', title: 'login' }
},
{
  path: '/register',
  name: 'register',
  component: register,
  meta: { icon: '', title: 'register' }
},
{
  path: '/',
  name: '首页',
  redirect: '/index'
}, /*默认跳转路由*/
{
  path: '*',
  component: NotFound
}
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
