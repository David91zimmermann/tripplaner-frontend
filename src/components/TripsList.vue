<template>
  <div class="row row-cols-1 g-2">
    <div class="col" v-for="trip in trips" :key="trip.id">
      <div class="card w-50 text-center translate-middle">
        <h5 class="card-header">{{ trip.urlaubsname }}</h5>
        <div class="card-body">
          <h5 class="card-title">Countdown</h5>
        </div>
        <div class="card-footer text-muted">
          <div class="reiseort">
            Reiseort: {{ trip.reiseort }}
          </div>
          <div class="reisedauer">
            von: {{ trip.tripbegin }} - bis: {{ trip.tripend }}
          </div>
          <a href="#" class="btn btn-outline-info btn-sm position-absolute bottom-0 end-0">Beitreten</a>
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
.card {
  background-color: #ecffd2;
  left: 54%;
  top: 140%;
}
</style>
