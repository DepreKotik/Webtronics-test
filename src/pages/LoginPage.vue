<template>
  <section class="wrapper wrapper--center-mod">
    <form @submit="submitForm" class="container">
      <title-item>Sign in</title-item>
      <input class="login__input" v-model="name" type="text" name="name" placeholder="Username">
      <input class="login__input" type="password" v-model="password" ref="password" name="password" placeholder="Password">
      <button class="login__password-button" @click="setPasswordState" type="button">{{buttonText}}</button> 
      <button-item :type="submit">Log In</button-item> 
    </form>
  </section>
</template>

<script>

export default {
  data: () => ({
    buttonText: 'Show password',
    passWord: 'admin',
    password: '',
    name: ''
  }),
  methods: {
    setPasswordState() {
      if (this.$refs.password.type === 'password') {
        this.$refs.password.setAttribute('type', 'text')
        this.buttonText = 'Hide password'
      } else {
        this.$refs.password.setAttribute('type', 'password')
        this.buttonText = 'Show password'
      }
    },
    submitForm(event) {
      event.preventDefault()
      if (this.name === this.passWord && this.password === this.passWord) {
        this.$store.commit('setIsAuthState', true)
        this.$router.push('/')
      } else {
        alert('Invalid password or username')
      }
    }
  }
}
</script>

<style>
.login__input {
  display: block;
  padding: 10px;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  width: 100%;
}

.login__input + .login__input {
  margin-top: 20px;
}

.login__input:focus-visible {
  border: 1px solid #3dcaca;
  outline: none;
}

.login__password-button {
  display: block;
  background-color: transparent;
  text-align: center;
  color: #3dcaca;
  font-size: 12px;
  border: none;
  margin: 5px 0 0 auto;
  padding: 5px;
  cursor: pointer;
}

</style>