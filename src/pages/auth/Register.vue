<template>
<q-page>
    <div class="flex flex-center">
        <q-card class="my-card q-mt-md">
            <q-form
      @submit.prevent="onRegister"
      class="q-gutter-md"
    >
      <q-card-section>
        <q-input
        v-model="firstName"
        label="First Name *"
        lazy-rules
        outlined
        :rules="[ val => val && val.length > 0 || 'Please type First Name']"
      />
      <q-input
        v-model="lastName"
        label="Last Name *"
        lazy-rules
        outlined
        :rules="[ val => val && val.length > 0 || 'Please type Last Name']"
      />
      <q-input
        v-model="email"
        label="Email *"
        lazy-rules
        outlined
        :rules="[ val => val && val.length > 0 || 'Please type Email']"
      />

      <q-input
        type="password"
        v-model="password"
        label="Password *"
        lazy-rules
        outlined
        :rules="[
          val => val !== null && val !== '' || 'Please type your password'
        ]"
      />
      <q-input
        type="password"
        v-model="cpassword"
        label="Confirm Password *"
        lazy-rules
        outlined
        :rules="[
          val => val !== null && val !== '' || 'Please type your password'
        ]"
      />
      <q-separator class="q-mt-md"/>
      <q-card-actions class="q-mt-md" align="right">
        <q-btn router to="/user" label="Back">
        <q-tooltip content-class="bg-accent">Go Back</q-tooltip>
        </q-btn>
        <q-btn type="submit" color="primary">Register</q-btn>
      </q-card-actions>
      </q-card-section>
      </q-form>
    </q-card>
    </div>
</q-page>
</template>

<script>
export default {
  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cpassword: ''
  }),
  methods: {
    onRegister () {
      const userData = {
        // firstName: this.firstName,
        // lastName: this.lastName,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('user/signUserUp', userData)
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 95%
  max-width: 400px
</style>
