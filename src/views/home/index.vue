<script setup lang="ts">
import { useCounterStore } from '../../stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <p>Count: {{ counter.count }}</p>
    <p>Double Count: {{ counter.doubleCount }}</p>
    <button @click="counter.increment">
      Increment
    </button>
    <button @click="counter.decrement">
      Decrement
    </button>
  </div>
</template>

<style scoped>

</style>
