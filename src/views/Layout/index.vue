<script setup>
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixd from './components/LayoutFixed.vue'
</script>

<template>
  <div>
    <!-- 二级路由出口 -->
    <LayoutFixd />
    <LayoutNav />
    <LayoutHeader />
    <RouterView />
    <LayoutFooter />
  </div>
</template>