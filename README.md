# vue3-scroll-number
基于vue3+ts实现的数字滚动动效

## 安装
```
npm install vue3-scroll-number
```
```
yarn add vue3-scroll-number
```
## 全局使用
```
import { createApp } from 'vue';
import ScrollNumber from 'vue3-scroll-number';
import App from './App.vue';

createApp(App).use(ScrollNumber).mount('#app');
```
## 局部引入
```
import { ScrollNumber } from 'vue3-scroll-number';
import 'vue3-scroll-number/lib/style.css' // 引入样式
```
## 页面中
```
<template>
  <scroll-number :number="10" :h="24" color="#606cee"></scroll-number>
</template>  
```
## 属性
| 属性 | 类型 | 默认值 | 说明 |
| ---- | ---- | ---- | ---- |
| number | Number | 0 | 数字内容 |
| h | Number | 24 | 单个数字高度（字体大小默认与高度相同） |
| color | String | #606cee | 数字颜色 |
| customStyle | Object | - | 额外添加的给数字的样式 |
