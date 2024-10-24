<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { MinusOutlined } from '@ant-design/icons-vue'
import { h } from 'vue'

const counter = useCounterStore()
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <p>Count: {{ counter.count }}</p>
    <p>Double Count: {{ counter.doubleCount }}</p>
    <a-button type="primary" @click="counter.increment">
      <PlusOutlined />
      <!-- Increment -->
    </a-button>
    <a-button :icon="h(MinusOutlined)" @click="counter.decrement">
      Decrement
    </a-button>
  </div>
</template>

<style scoped>

</style>
