<template>
  <button class="btn btn-outline-info sticky-xxl-top" data-bs-toggle="offcanvas" data-bs-target="#trips-create-offcanvas" aria-controls="#trips-create-offcanvas">
    <i class="fas fa-plus-circle"> Neue Reise erstellen</i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="trips-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">Neue Reise</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="trips-create-form" novalidate>
        <div class="mb-3">
          <label for="urlaubsname" class="form-label">Geben Sie Ihrer Reise einen Namen</label>
          <input type="text" class="form-control" id="urlaubsname" v-model="urlaubsname" required>
          <div class="invalid-feedback">
            Bitte geben Sie Ihrer Reise einen Namen (Bsp. Florida 2023).
          </div>
        </div>
        <div class="mb-3">
          <label for="reiseort" class="form-label">Ort (Wohin geht Ihre Reise?)</label>
          <input type="text" class="form-control" id="reiseort" v-model="reiseort" required>
          <div class="invalid-feedback">
            Geben Sie den Ort Ihrer Reise an.
          </div>
        </div>
        <div class="mb-3">
          <label for="reisestart_picker" class="form-label">Reise beginnt am:</label>
          <input type="text" class="form-control" id="reisestart_picker" v-model="tripbegin" required>
          <div class="invalid-feedback">
            Geben Sie das Datum im Format (dd.mm.jjjj) an.
          </div>
        </div>
        <div class="mb-3">
          <label for="reiseende" class="form-label">endet am:</label>
          <input type="text" class="form-control" id="reiseende" v-model="tripend" required>
          <div class="invalid-feedback">
            Geben Sie das Datum im Format (dd.mm.jjjj) an.
          </div>
        </div>
        <div v-if="this.serverValidationMessages">
          <ul>
            <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
              {{ message }}
            </li>
          </ul>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click.prevent="createTrip">Erstellen</button>
          <button class="btn btn-danger" type="reset">Zurücksetzen</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TripsCreateForm',
  data () {
    return {
      urlaubsname: '',
      reiseort: '',
      tripbegin: '',
      tripend: '',
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    async createTrip () {
      if (this.validate()) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/trips'
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        const trip = JSON.stringify({
          urlaubsname: this.urlaubsname,
          reiseort: this.reiseort,
          tripbegin: this.tripbegin,
          tripend: this.tripend
        })
        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: trip,
          redirect: 'follow'
        }
        const response = await fetch(endpoint, requestOptions)
        await this.handleResponse(response)
      }
    },
    async handleResponse (response) {
      if (response.ok) {
        this.$emit('created', response.headers.get('location'))
        document.getElementById('close-offcanvas').click()
      } else if (response.status === 400) {
        response = await response.json()
        response.errors.forEach(error => {
          this.serverValidationMessages.push(error.defaultMessage)
        })
      } else {
        this.serverValidationMessages.push('Unknown error occurred')
      }
    },
    validate () {
      const form = document.getElementById('trips-create-form')
      form.classList.add('was-validated')
      return form.checkValidity()
    }
  }
}
</script>

<style scoped>
.sticky-xxl-top {
  position: fixed;
  top: 20%;
  bottom: 75%;
  left: 30%;
  padding: 5px 50px 5px 10px;
  border-radius: 30px;
}
</style>
