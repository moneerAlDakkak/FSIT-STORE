<template>
  <nav>
    <ul>
      <li class="col-auto">
        <NuxtLink to="/"> Home </NuxtLink>
      </li>
      <li class="col-auto">About Us</li>
      <li class="col-auto">Media Center</li>
      <li class="col-auto">Contact Us</li>
      <li class="col-auto fw-bold">AR | EN</li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
ul {
  margin: 0;
  list-style: none;
  display: flex;
  gap: 2rem;
}
nav {
  justify-content: flex-end;
  width: 100vw;
  display: flex;
}
a {
  color: inherit;
  text-decoration: none;
}
</style>
