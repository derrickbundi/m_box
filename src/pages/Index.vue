<template>
  <!-- <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
  </q-page> -->
  <div class="q-pa-md">
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="300px"
    >
      <q-carousel-slide
      v-for="meetup in meetups"
      :key="meetup.id"
      :name="meetup.name"
      :img-src="meetup.image"
      @click="onLoad(meetup.id)">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">{{meetup.title}}</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="flex flex-center q-mt-md">
      <q-btn unelevated rounded color="primary" label="Explore Meetup" class="q-mr-md" router to="/meet_up">
      <q-tooltip content-class="bg-accent">Explore Meetup</q-tooltip>
      </q-btn>
      <q-btn unelevated rounded color="primary" label="Organise Meetup" router to="/meet_up/new">
        <q-tooltip content-class="bg-accent">Organise Meetup</q-tooltip>
      </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data: () => ({
    slide: 'first'
    // meetups: [
    //   {
    //     id: 'qwerty123',
    //     image: 'https://cdn.quasar.dev/img/mountains.jpg',
    //     title: 'One Meetup',
    //     name: 'first'
    //   },
    //   {
    //     id: 'qwerty456',
    //     image: 'https://cdn.quasar.dev/img/parallax1.jpg',
    //     title: 'Two Meetup',
    //     name: 'second'
    //   },
    //   {
    //     id: 'qwerty789',
    //     image: 'https://cdn.quasar.dev/img/parallax2.jpg',
    //     title: 'Three Meetup',
    //     name: 'third'
    //   }
    // ]
  }),
  methods: {
    onLoad (id) {
      this.$router.push('/meet_up/' + id)
    }
  },
  computed: {
    meetups () {
      return this.$store.getters['user/featuredMeetups']
    }
  }
}
</script>
<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
