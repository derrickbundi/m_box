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
  user: {
    id: 'asdfghj123',
    registeredMeetups: ['qwerty123']
  }
}

const mutations = {

}

const actions = {

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
