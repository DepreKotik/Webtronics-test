<template>
  <h1><slot></slot></h1>
</template>

<script>
export default {
  name: 'title-item'
}
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 25px;
}
</style>