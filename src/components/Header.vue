<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
      <div class="container-fluid">
        <!-- <img class="navbar-brand" src="../assets/rotorink-twitter.jpg" /> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/players" aria-current="page">Players</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/sign-in">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register">Join</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>
