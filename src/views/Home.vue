<template>
  <Navbar>Navbar</Navbar>
  <div class="container-fluid">
    <trips-list :users="this.trips"></trips-list>
  </div>
  <trips-create-form @created="addTrip"></trips-create-form>
</template>

<script>
import TripsCreateForm from '@/components/TripsCreateForm'
import Navbar from '@/components/Navbar'
import TripsList from '@/components/TripsList'

export default {
  name: 'Trips',
  components: {
    Navbar,
    TripsList,
    TripsCreateForm
  },
  data () {
    return {
      trips: []
    }
  },
  methods: {
    addTrip (tripLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + tripLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(user => this.trips.push(user))
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/trips'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(trip => {
        this.trips.push(trip)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
</style>
