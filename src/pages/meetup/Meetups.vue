<template>
<q-page>
    <!-- <div class="flex flex-center"> -->
        <div class="q-pa-md row justify-center items-start q-gutter-md">
    <q-card class="my-card" flat bordered v-for="meetup in meetups" :key="meetup.id">
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">{{meetup.title}}</div>
          <div class="text-caption text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            :src="meetup.image"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat>
          7:30PM {{meetup.date}}
        </q-btn>
        <q-btn flat color="primary" router :to="'/meet_up/' + meetup.id">
          view meetup
        </q-btn>
      </q-card-actions>
    </q-card>
        </div>
    <!-- </div> -->
</q-page>
</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters['user/loadedMeetups']
    }
  }
}
</script>

<style>

</style>
