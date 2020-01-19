<template>
  <!-- <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
  </q-page> -->
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      navigation
      arrows
      height="300px"
      class="bg-white text-black shadow-1 rounded-borders no-shadow"
    >
      <q-carousel-slide :name="1" class="no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/cat.jpg" />
          <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/material.png" />
          <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/donuts.png" />
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="flex flex-center">
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
    slide: 1
  })
}
</script>
