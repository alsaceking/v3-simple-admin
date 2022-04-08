<template>
  <div class="wrapper">
    分析页
    <span>{{ num }}</span>
    <button @click="add">+</button>
  </div>
</template>

<script>
export default {
  name: 'analysis'
}
</script>
<script setup name="analysis" namedExport>
import { ref } from 'vue'

const num = ref(0)
const add = () => {
  num.value++
}

</script>

<style scoped lang="less">
</style>
