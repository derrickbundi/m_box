import { firebase } from 'firebase/app'
import axios from 'axios'

const state = {
  loadedMeetups: [
    {
      id: 'qwerty123',
      image: 'https://cdn.quasar.dev/img/mountains.jpg',
      title: 'One Meetup',
      name: 'first',
      date: '2020-01-20'
    },
    {
      id: 'qwerty456',
      image: 'https://cdn.quasar.dev/img/parallax1.jpg',
      title: 'Two Meetup',
      name: 'second',
      date: '2020-01-21'
    },
    {
      id: 'qwerty789',
      image: 'https://cdn.quasar.dev/img/parallax2.jpg',
      title: 'Three Meetup',
      name: 'third',
      date: '2020-01-22'
    }
  ],
  user: null,
  submitting: false,
  error: null
}

const mutations = {
  setLoadedMeetups (state, payload) {
    state.loadedMeetups = payload
    // this.$store.dispatch('user/loadMeetups')
  },
  createMeetup (state, payload) {
    state.loadedMeetups.push(payload)
  },
  setUser (state, payload) {
    state.user = payload
  },
  setLoading (state, payload) {
    state.submitting = payload
  },
  setError (state, payload) {
    state.error = payload
  },
  clearError (state, payload) {
    state.error = null
  }
}

const actions = {
  loadMeetups ({ commit }) {
    firebase.database().ref('meetup').once('value')
      .then((data) => {
        const meetups = []
        const obj = data.val()
        for (let key in obj) {
          meetups.push({
            id: key,
            name: obj[key].name,
            location: obj[key].location,
            description: obj[key].description,
            imageUrl: obj[key].imageUrl,
            date: obj[key].date
          })
        }
        // this.$store.dispatch('loadedMeetups')
        commit('setLoadedMeetups', meetups)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  createMeetup ({ commit }, payload) {
    const meetup = {
      name: payload.name,
      location: payload.location,
      description: payload.description,
      imageUrl: payload.imageUrl,
      date: payload.date
    }
    firebase.database().ref('meetup').push(meetup)
      .then((data) => {
        // console.log(data)
        const key = data.key
        commit('createMeetup', {
          ...meetup,
          id: key
        })
      })
      .catch((error) => {
        console.log(error)
      })
  },
  signUserUp ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit('setLoading', true)
      commit('clearError')
      // firebase.auth().createUserWithEmailAndPassword(
      // payload.firstName,
      // payload.lastName,
      // payload.email,
      // payload.password
      // )
      axios({ url: 'http://localhost:8000/api/user/register', data: payload, method: 'POST' })
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    })
  },
  signUserIn ({ commit }, payload) {
    commit('setLoading', true)
    commit('clearError')
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit('setLoading', false)
        const newUser = {
          id: user.uid,
          registeredMeetups: []
        }
        commit('setUser', newUser)
      })
      .catch(error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      })
  },
  clearError ({ commit }) {
    commit('clearError')
  }
}

const getters = {
  loadedMeetups (state) {
    return state.loadedMeetups.sort((meetupA, meetupB) => {
      return meetupA.date > meetupB
    })
  },
  featuredMeetups (state, getters) {
    return getters.loadedMeetups.slice(0, 5)
  },
  loadedMeetup (state) {
    return meetupId => {
      return state.loadedMeetups.find((meetup) => {
        return meetup.id === meetupId
      })
    }
  },
  user (state) {
    return state.user
  },
  loading (state) {
    return state.submitting
  },
  error (state) {
    return state.error
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
