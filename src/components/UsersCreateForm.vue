<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#users-create-offcanvas" aria-controls="#users-create-offcanvas">
    <i class="bi bi-user-plus-fill"></i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="users-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New User</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="users-create-form" novalidate>
        <div class="mb-3">
          <label for="first-name" class="form-label">First name</label>
          <input type="text" class="form-control" id="first-name" v-model="firstName" required>
          <div class="invalid-feedback">
            Please provide the first name.
          </div>
        </div>
        <div class="mb-3">
          <label for="last-name" class="form-label">Last name</label>
          <input type="text" class="form-control" id="last-name" v-model="lastName" required>
          <div class="invalid-feedback">
            Please provide the last name.
          </div>
        </div>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" class="form-control" id="username" v-model="username" required>
          <div class="invalid-feedback">
            Please provide a username.
          </div>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="text" class="form-control" id="password" v-model="password" required>
          <div class="invalid-feedback">
            Please provide a username.
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
          <button class="btn btn-primary me-3" type="submit" @click.prevent="createUser">Create</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsersCreateForm',
  data () {
    return {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    async createUser () {
      if (this.validate()) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/users'
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        const user = JSON.stringify({
          username: this.username,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName
        })
        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: user,
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
      const form = document.getElementById('users-create-form')
      form.classList.add('was-validated')
      return form.checkValidity()
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>
