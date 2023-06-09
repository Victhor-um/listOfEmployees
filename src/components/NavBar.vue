<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <RouterLink to="/" class="navbar-item"> Home </RouterLink>

        <RouterLink to="/formEmployee/id" class="navbar-item">
          ADD-TO-FORM
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { RouterLink } from 'vue-router';
</script>
<style scoped>
.navbar {
  padding: 1rem;
}
.navbar-item {
  font-weight: bold;
  font-size: 1.5rem;
}
.navbar-item:hover {
  background-color: #24aff0;
  color: white;
}
</style>
