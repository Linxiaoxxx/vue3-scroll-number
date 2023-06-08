<template>
  <div class="numberScroll">
    <div v-for="(item, index) in numberToArray" :key="index" :class="['common-style', { dot: item === '.' }]" :style="numStyle">
      <div :style="animateStyle(item)">
        <div v-for="(v, i) in numberBox" :key="i" :style="`color:${color}`">
          {{ v }}
        </div>
      </div>
    </div>
    <!-- <span v-show="isShowWan">万</span> -->
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'

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
    default: ''
  },
  customStyle: {
    type: Object,
    default: () => {
      return {}
    }
  }
})

const numberBox = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.']
// const numberBox = ['.', 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
const numberToArray = ref<any[]>([])
// const isShowWan = ref(false)

watch(
  () => props.number,
  (n) => {
    numberToArray.value = n.toString().split('')
    // setTimeout(() => {
    //   numberToArray.value = [...numArr]
    //   isShowWan.value = numberToArray.value.includes('.')
    // }, 10)
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
    return `transform:translate(0,-${+num * props.h}px)`
  }
  return `transform:translate(0,-${+10 * props.h}px)`
}
</script>

<style lang="less" scoped>
.numberScroll {
  display: flex;
  align-items: center;

  .common-style {
    overflow: hidden;

    & > div {
      display: flex;
      flex-direction: column;
      transform: translate(0, 0);
      transition: all 0.6s;

      & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        line-height: 1;
        overflow: hidden;
      }
    }

    &.dot {
      width: 14px;
    }
  }
}
</style>
