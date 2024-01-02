<template>
  <button :type="type">
    <slot></slot>
  </button> 
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  name: 'button-item'
}
</script>

<style scoped>
button {
  display: block;
  width: 100%;
  background-color: #3dcaca;
  text-align: center;
  color: #fff;
  font-size: 18px;
  border: none;
  margin-top: 20px;
  padding: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #3ac2c2;
}
</style>