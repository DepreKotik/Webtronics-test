import {createStore} from 'vuex'

export default createStore(
  {
    state: () => ({
      isAuth: false,
      information: '',
      firstName: '',
      secondName: '',
      birthDate: '',
      city: ''
    }),
    mutations: {
      setIsAuthState(state, boolean) {
        state.isAuth = boolean
      },
      setInformationState(state, string) {
        state.information = string
      },
      setFirstNameState(state, string) {
        state.firstName = string
      },
      setSecondNameState(state, string) {
        state.secondName = string
      },
      setBirthDateState(state, string) {
        state.birthDate = string
      },
      setCityState(state, string) {
        state.city = string
      }
    }
  }
) 