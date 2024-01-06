<template>
  <section v-if="$store.state.isAuth" class="wrapper">
    <header-item></header-item>
    <form class="container" @submit="saveChanges" :style="{maxWidth: '400px', margin: '0 auto'}">
      <title-item>Profile</title-item>
      <label class="profile__label">Information
        <textarea name="information" v-model="$store.state.information" class="profile__input"></textarea>
      </label>
      <label class="profile__label">FirstName
        <input name="firstName" v-model="$store.state.firstName" class="profile__input" type="text">
      </label>
      <label class="profile__label">SecondName
        <input name="secondName" v-model="$store.state.secondName" class="profile__input" type="text">
      </label>
      <label class="profile__label">Date of birth
        <input name="birthDate" v-model="$store.state.birthDate" class="profile__input" ref="datepicker" type="text">
      </label>
      <label class="profile__label">City
        <select name="city" v-model="$store.state.city" class="profile__input">
          <option>Moscow</option>
          <option>Kazan</option>
          <option>Saint Petersburg</option>
        </select>
      </label>
      <button-item :type="submit" :style="{width: '200px', margin: '40px auto 0'}">Save Changes</button-item> 
    </form>
  </section>
  <section v-else-if="!$store.state.isAuth"> {{ $router.push('/login') }}</section>
</template>

<script>
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

export default {
  mounted() {
    new AirDatepicker(this.$refs.datepicker)
  },
  data: () => ({

  }),
  methods: {
    saveChanges(event) {
      event.preventDefault()
      const formData = new FormData(event.target)
      this.$store.commit('setInformationState', formData.get('information'))
      this.$store.commit('setFirstNameState', formData.get('firstName'))
      this.$store.commit('setSecondNameState', formData.get('secondName'))
      this.$store.commit('setBirthDateState', formData.get('birthDate'))
      this.$store.commit('setCityState', formData.get('city'))
      alert('Your profile is successfully changed')
    }
  }
}

</script>

<style lang="scss" scoped>
.profile__label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 769px) {
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }
}

.profile__label + .profile__label {
  margin-top: 20px;
}

.profile__input {
  width: 200px;
  display: block;
  padding: 5px 10px;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  
  @media (max-width: 769px) {
    width: 100%;
  }
}

textarea {
  resize: none;
}

.profile__input:focus-visible {
  border: 1px solid #3dcaca;
  outline: none;
}
</style>