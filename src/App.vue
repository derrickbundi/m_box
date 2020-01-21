<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import * as firebase from 'firebase'
export default {
  name: 'App',
  methods: {
    created () {
      firebase.initializeApp({
        apiKey: 'AIzaSyCIfoBBsHmThtp83nX02R0EvXZyisB8yJA',
        authDomain: 'meetup-5cffc.firebaseapp.com',
        databaseURL: 'https://meetup-5cffc.firebaseio.com',
        projectId: 'meetup-5cffc',
        storageBucket: ''
      })
    }
  }
}
</script>
