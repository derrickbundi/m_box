<template>
<div class="flex flex-center">
    <div class="q-mt-md text-h2 my-card">
        Create new meetup
    <q-separator class="q-mt-md"></q-separator>
    <!-- <q-card outlined class="q-mt-md"> -->
        <q-form
      @submit.prevent="onCreateMeetup"
      class="q-mt-md"
    >
      <q-input
        outlined
        v-model="name"
        label="Name of meetup *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type name of meetup']"
      />

      <q-input
        outlined
        v-model="location"
        label="Location *"
        :rules="[ val => val && val.length > 0 || 'Please type location of meetup']"
      />

      <q-input
        outlined
        v-model="imageUrl"
        label="Image URL *"
        :rules="[ val => val && val.length > 0 || 'Please type location of meetup']"
      />

        <div class="text-h6">
            Description:
        </div>
      <q-editor v-model="description" min-height="5rem" />

      <!-- <div class="q-pa-md" style="max-width: 300px"> -->
    <q-input filled v-model="date" class="q-mt-md">
      <template v-slot:prepend>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-date v-model="date" mask="YYYY-MM-DD HH:mm" />
          </q-popup-proxy>
        </q-icon>
      </template>

      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  <!-- </div> -->

      <!-- <q-uploader
        label="Upload Image"
        class="q-mt-md"
        square
        flat
        bordered
      /> -->

      <div align="right">
        <q-btn router to="/" class="q-mr-md" label="Back">
        <q-tooltip content-class="bg-accent">Go Back</q-tooltip>
        </q-btn>
        <q-btn
        type="submit"
        :loading="submitting"
        label="Save"
        color="primary"
      >
        <template v-slot:loading>
          <q-spinner-facebook />
        </template>
      </q-btn>
      </div>
    </q-form>

    <!-- </q-card> -->
    </div>
</div>
</template>

<script>
export default {
  data: () => ({
    date: '2019-02-01 12:44',
    submitting: false,
    name: '',
    location: '',
    description: '',
    imageUrl: ''
  }),
  methods: {
    onCreateMeetup () {
      const meetupData = {
        name: this.name,
        location: this.location,
        description: this.description,
        imageUrl: this.imageUrl,
        date: this.date
      }
      this.submitting = true
      this.$store.dispatch('user/createMeetup', meetupData)
      this.$router.push('/meet_up')
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 90%
  max-width: 600px
</style>
