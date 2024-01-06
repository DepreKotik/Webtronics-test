<template>
  <router-view></router-view>
</template>

<script>

</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}

#app {
  color: #4d4b4b;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: 400;
}

.wrapper {
  min-height: 100vh;
  background-color: rgb(237 237 237);
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
}

.wrapper--center-mod {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  padding: 20px;
  border: 1px solid #dbd4d4;
  border-radius: 5px;
  background-color: #fff;
  min-width: 290px;
}


</style>
