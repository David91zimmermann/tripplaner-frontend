<template>
  <Navbar>Navbar</Navbar>
  <h1>Welcome to User</h1>
  <div class="container-fluid">
    <users-card-list :users="this.users"></users-card-list>
  </div>
  <users-create-form @created="addUser"></users-create-form>
</template>

<script>
import UsersCardList from '@/components/UsersCardList'
import UsersCreateForm from '@/components/UsersCreateForm'
import Navbar from '@/components/Navbar'

export default {
  name: 'Users',
  components: {
    Navbar,
    UsersCardList,
    UsersCreateForm
  },
  data () {
    return {
      users: []
    }
  },
  methods: {
    addUser (userLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + userLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(user => this.users.push(user))
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/users'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(user => {
        this.users.push(user)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
</style>
