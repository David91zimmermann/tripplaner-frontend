<template>
  <Navbar>Navbar</Navbar>
    <div class="container-fluid position-absolute bottom-0 top-0" :style=" { background: ' #7B7B7BFF'}">
      <trips-list :trips="this.trips"></trips-list>
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
      trips: [
        {
          id: 1,
          urlaubsname: 'Florida 2023',
          reiseort: 'Orlando',
          tripbegin: '01.04.2023',
          tripend: '14.04.2023'
        },
        {
          id: 1,
          urlaubsname: 'One Piece',
          reiseort: 'Laugh Tale',
          tripbegin: '01.01.2024',
          tripend: '31.12.2024'
        }
      ]
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
        .then(trip => this.trips.push(trip))
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
.container-fluid {
  margin-top: 56px;
  right: 0;
}
</style>
