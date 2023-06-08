<script setup lang="ts">
import { ref } from 'vue'
import ScrollNumber from '../package/ScrollNumber'

const num = ref(1)
const handleAdd = () => {
  num.value += 1
}
</script>

<template>
  <div class="add-box">
    <scroll-number :number="num" color="#2995ff" :h="36" :style="{ fontWeight: 700 }" />
    <button @click="handleAdd">Add Number</button>
  </div>
</template>

<style scoped lang="less">
.add-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin-top: 24px;
    background-color: #ebebeb;
    &:focus {
      outline: 1px solid #2995ff;
    }
  }
}
</style>
