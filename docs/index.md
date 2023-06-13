<script setup>
import ScrollNumber from "../package/ScrollNumber/index.vue"
import {ref,onMounted} from 'vue'
import dayjs from 'dayjs'

let timer = null
const time = ref(dayjs().format('YYYY-MM-DD HH:mm:ss'))

const getTime = () => {
    if(timer){
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        time.value = dayjs().format('YYYY-MM-DD HH:mm:ss')
        getTime()
      }, 1000)
}


onMounted(() => {
    getTime()
})
</script>

<div :class="$style['clock-bg']">
    <ScrollNumber :number="time" :h="36" :custom-style="{fontWeight: 700}" />
</div>

<style module>
.clock-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 668px;
    height: 260px;
    background: #74ebd5;  
    background: radial-gradient(circle at 10% 20%, #74ebd5 0%, #ACB6E5 100%);
    border-radius: 16px;
}
</style>
