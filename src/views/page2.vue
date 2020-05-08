<template>
  <div>
    <p>page2</p>
    This is state count: {{ store.state.count }}

    <button @click="inc">Clicked {{ count }} times.</button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, watch } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Page2',
  setup() {
    const count = ref(0)
    const inc = () => {
      count.value++
    }
    
    watch(count, (val) => {
      console.log(`count change >>> ${val}`)
    })

    return {
      store: useStore(),
      inc,
      count
    }
  }
})
</script>

<style scoped>
</style>
