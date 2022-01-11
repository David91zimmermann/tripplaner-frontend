<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="trip in trips" :key="trip.tid">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">{{ trip.urlaubsname }}</h5>
          <p class="card-text">
            Reiseziel: {{ trip.reiseort }} Reisebegin: {{ trip.reisestart }} Reiseende: {{ trip.reiseende }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TripsList',
  props: {
    trips: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
