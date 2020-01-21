import { firebaseAuth } from 'boot/firebase'

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
  user: null
}

const mutations = {
  createMeetup (state, payload) {
    state.loadedMeetups.push(payload)
  },
  setUser (state, payload) {
    state.user = payload
  }
}

const actions = {
  createMeetup ({ commit }, payload) {
    const meetup = {
      name: payload.name,
      location: payload.location,
      description: payload.description,
      imageUrl: payload.imageUrl,
      date: payload.date,
      id: 'qwerty111'
    }
    commit('createMeetup', meetup)
  },
  signUserUp ({ commit }, payload) {
    firebaseAuth.createUserWithEmailAndPassword(
      // payload.firstName,
      // payload.lastName,
      payload.email,
      payload.password
    )
      .then(
        user => {
          const newUser = {
            id: user.UID,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          console.log(error)
        }
      )
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
