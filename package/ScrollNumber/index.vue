<template>
  <div style="display: flex; align-items: center">
    <div v-for="(item, index) in numberToArray" :key="index" :class="['number', { sign: ignoreStr.includes(item) }]" :style="numStyle">
      <div class="scroll-container" :style="{ ...animateStyle(item) }" v-bind="getBindValue">
        <div v-for="(v, i) in numberBox" :key="i" class="scroll-single" :style="{ color: color }">
          {{ v }}
        </div>
      </div>
    </div>

    <!-- <span v-show="isShowWan">万</span> -->
  </div>
</template>

<script lang="ts">
export default {
  name: 'scroll-number'
}
</script>
<script lang="ts" setup>
import { computed, ref, watch, useAttrs } from 'vue'
// import './index.less'

const props = defineProps({
  number: {
    type: [Number, String],
    required: true
  },
  h: {
    type: Number, // 数字高度
    default: 24
  },
  color: {
    type: [String],
    default: '#606cee'
  },
  customStyle: {
    type: Object,
    default: () => {
      return {}
    }
  }
})

const attrs = useAttrs()
// 绑定自定义属性，包括class
const getBindValue = computed(() => {
  return {
    ...attrs
  }
})

const numberBox = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.', '-', ':', ' ']
const ignoreStr = ['.', ' ', '-', ':']
const numberToArray = ref<any[]>([])
// const isShowWan = ref(false)

watch(
  () => props.number,
  (n) => {
    numberToArray.value = n.toString().split('')
  },
  {
    immediate: true,
    deep: true
  }
)

const numStyle = computed(() => {
  return {
    ...props.customStyle,
    height: `${props.h}px`,
    fontSize: `${props.h}px`
  }
})

const animateStyle = (item: any) => {
  const index = item.trim().length === 0 ? 9999 : numberBox.findIndex((i) => item == i)
  return { transform: `translate(0,-${index * props.h}px)` }
}
</script>

<style>
.number {
  overflow: hidden;
}
.number.sign {
  width: 12px;
  margin: 0 4px;
}
.scroll-container {
  display: flex;
  flex-direction: column;
  transform: translate(0, 0);
  transition: all 0.6s;
}
.scroll-single {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  line-height: 1;
  overflow: hidden;
}
</style>
