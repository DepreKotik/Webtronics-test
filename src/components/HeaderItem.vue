<template>
  <header>
    <nav>
      <ul>
        <li @click="$router.push('/tickets')">Tickets</li>
        <li @click="$router.push('/profile')">Profile</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'header-item'
}
</script>

<style scoped>
header {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #e0e0e0;
  border-radius: 5px;
  min-width: 290px;
}

ul {
  display: flex;
  justify-content: end;
  gap: 20px;
}

li {
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
}

li:hover {
  color: #3ac2c2
}
</style>