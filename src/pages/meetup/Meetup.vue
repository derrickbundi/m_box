<template>
<div class="flex flex-center">
  <!-- <div class="q-pa-md row items-start q-gutter-md"> -->
       <q-card style="max-width: 900px;width:95%;" class="q-ma-md">
           <q-card-section>
               <div class="text-h6">Our Changing Planet</div>
           </q-card-section>
      <img :src="meetup.image" style="height:300px;">

      <q-card-section>
        <div class="text-h6">{{meetup.title}}</div>
        <div class="text-subtitle2">{{meetup.date}}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga cumque,
        quod quia vel officia accusamus incidunt reiciendis corrupti inventore
        velit tempore harum voluptates excepturi eligendi vitae explicabo quas.
         Magnam, nemo.
      </q-card-section>
      <q-separator />
      <v-card-actions>
          <div align="right">
              <q-btn flat align="right" color="primary">
          Register
        </q-btn>
          </div>
      </v-card-actions>
    </q-card>
  </div>
<!-- </div> -->
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters['user/loadedMeetup'](this.id)
    }
  }
}
</script>

<style>

</style>
