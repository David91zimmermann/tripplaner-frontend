<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="user in users" :key="user.id">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">{{ user.username }}</h5>
          <p class="card-text">
            Vorname: {{ user.firstName }} Nachame: {{ user.lastName }} Nutzername: {{ user.username }}
            Passwort: {{ user.password }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsersCardList',
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
