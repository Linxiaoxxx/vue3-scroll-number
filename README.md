# vue3-scroll-number

基于 vue3+ts 实现的数字滚动动效，支持日期格式，支持数字格式化中的相关符号，如有遗漏的符号，请在 issues 中告知我

## 预览

[效果预览](https://linxiaoxxx.github.io/vue3-scroll-number/)

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
import 'vue3-scroll-number/css' // 引入样式
```

## 页面中

```
<template>
  <scroll-number :number="10" :h="24" color="#606cee"></scroll-number>
</template>
```

## 属性

| 属性        | 类型          | 默认值  | 必填 | 说明                                   |
| ----------- | ------------- | ------- | ---- | -------------------------------------- |
| number      | Number String | -       | 是   | 数字内容                               |
| h           | Number        | 24      | 否   | 单个数字高度（字体大小默认与高度相同） |
| color       | String        | #606cee | 否   | 数字颜色                               |
| customStyle | Object        | -       | 否   | 额外添加的给数字的样式                 |
