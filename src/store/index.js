import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      user
    },
    // store,
    // enable strict mode (adds overhead!)
    // for dev mode only
    // created () {
    //   firebase.initializeApp({
    //     apiKey: 'AIzaSyCIfoBBsHmThtp83nX02R0EvXZyisB8yJA',
    //     authDomain: 'meetup-5cffc.firebaseapp.com',
    //     databaseURL: 'https://meetup-5cffc.firebaseio.com',
    //     projectId: 'meetup-5cffc',
    //     storageBucket: 'meetup-5cffc.appspot.com',
    //     messagingSenderId: '187865459556',
    //     appId: '1:187865459556:web:10cf1fecaf7c7dc2c9e871'
    //   })
    //   this.$store.dispatch('user/loadMeetups')
    // },
    strict: process.env.DEV
  })

  return Store
}
