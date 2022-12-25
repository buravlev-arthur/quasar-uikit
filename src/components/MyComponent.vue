<template>
  <div id="countOne">count: {{  count }}</div>
  <div>a: {{ a }}</div>
</template>

<script setup lang="ts">
import a from './value'
const count: number = 5;
const aValue = a;
</script>

<style lang="scss">
#countOne {
  color: $red;
}
</style>