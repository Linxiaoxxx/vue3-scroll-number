<template>
  <div style="display: flex; align-items: center">
    <div v-for="(item, index) in numberToArray" :key="index" :class="['number', { dot: item === '.' }]" :style="numStyle">
      <div class="scroll-container" :style="{ ...animateStyle(item) }">
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
import { computed, ref, watch } from 'vue'
// import './index.less'

const props = defineProps({
  number: {
    type: Number,
    default: 0
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

const numberBox = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.']
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

const animateStyle = (num: number | string) => {
  if (num !== '.') {
    return { transform: `translate(0,-${+num * props.h}px)` }
  }
  return { transform: `translate(0,-${+10 * props.h}px)` }
}
</script>

<style>
.number {
  overflow: hidden;
}
.number.dot {
  width: 8px;
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
