<template>
<q-page>
    <div class="flex flex-center">
        <q-card class="my-card q-mt-md">
            <q-form @submit.prevent="onLogin"
    >
      <q-card-section>
      <q-input
        v-model="email"
        label="Email *"
        lazy-rules
        outlined
        :rules="[ val => val && val.length > 0 || 'Please type something']"
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
       <q-separator class="q-mt-md"/>
      <q-card-actions class="q-mt-md" align="right">
        <q-btn router to="/register" label="registered? sign up">
        <q-tooltip content-class="bg-accent" color="brown-5">Register</q-tooltip>
        </q-btn>
        <q-btn type="submit" :loading="submitting" color="primary" label="Login">
          <template v-slot:loading>
            <q-spinner-facebook />
          </template>
        </q-btn>
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
    submitting: false,
    email: '',
    password: ''
  }),
  computed: {
    user () {
      return this.$store.getters['user/user']
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onLogin () {
      const userData = {
        email: this.email,
        password: this.password
      }
      this.submitting = true
      this.$store.dispatch('user/signUserIn', userData)
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 95%
  max-width: 400px
</style>
