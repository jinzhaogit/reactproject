/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// 引入路由模块
import {createStackNavigator} from 'react-navigation'
// 引入组件
import LoginComponent from './app/components/project/login'
import MainComponent from './app/components/project/main'
import ListComponent from './app/components/project/productList'
import DetailComponent from './app/components/project/detail'
import UserList from './app/components/project/userList'
// 配置路由
var MyNavigator=createStackNavigator({
  'main':{
    screen:MainComponent
  },
  'list':{
    screen:ListComponent
  },
  'login':{
    screen:LoginComponent
  },
  'detail':{
    screen:DetailComponent
  },
  'user':{
    screen:UserList
  },
})

// 定义默认显示内容为路由内容
AppRegistry.registerComponent('myapp', () => MyNavigator);
