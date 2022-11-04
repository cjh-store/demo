<template>
  <div>
    <van-tabs v-model:active="activeName">
      <van-tab title="标签 1" name="a">内容 1</van-tab>
      <van-tab title="标签 2" name="b">内容 2</van-tab>
      <van-tab title="标签 3" name="c">内容 3</van-tab>
    </van-tabs>
    <van-sidebar v-model="active">
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
    </van-sidebar>
    <van-tag type="primary">标签</van-tag>
    <van-tag type="success">标签</van-tag>
    <van-tag type="danger">标签</van-tag>
    <van-tag type="warning">标签</van-tag>
    <van-switch v-model="checked" />
  </div>
</template>

<script setup lang="ts">
const activeName = ref('a')
const active = ref(0)
const checked = ref(true)
</script>

<style scoped></style>
