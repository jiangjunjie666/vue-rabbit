<template>
  <!-- 一级路由出口 -->
  <RouterView />
  <div class="test">test scss</div>
</template>

<script setup>
</script>

<style scoped lang="scss">
* {
  text-align: center;
}
.test {
  color: $priceColor;
}
</style>
