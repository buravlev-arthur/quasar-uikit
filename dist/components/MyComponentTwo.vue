<template>
  <div id="countTwo">count: {{  count }}</div>
</template>

<script setup lang="ts">
const count: number = 12;
</script>

<style lang="scss">
#countTwo {
  color: $green;
}
</style>