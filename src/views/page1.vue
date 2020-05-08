<template>
  <div>
    <p>{{ message }}</p>
    {{ computedTest }}
    <button @click="inc">Clicked {{ store.state.count }} times.</button>

    <router-link to="/page2">go to page2</router-link>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Page1',
  setup() {
    const store = useStore()
    const message = 'Hello Vue3.0'
    const inc = () => {
      store.commit('inc')
    }
    const computedTest = computed(
      () => 1
    )

    return {
      store,
      inc,
      message,
      computedTest
    }
  }
})
</script>

<style scoped>
</style>
