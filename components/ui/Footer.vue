<template>
  <footer class="pt-4 text-white px-4">
    <div class="container w-100 px-4">
      <div class="row align-items-center justify-content-between">
        <div class="col-12 col-lg-4 d-flex flex-column align-items-center">
          <img class="logo" src="/icons/logo.png" alt="Developer test logo" />
          <ul
            class="row mt-3 list-unstyled justify-content-lg-center gap-0 socials"
          >
            <li class="col-auto">
              <a href="/">
                <img src="/icons/socialMedia/facebook.png" alt="" />
              </a>
            </li>
            <li class="col-auto">
              <a href="/">
                <img src="/icons/socialMedia/youtube.png" alt="" />
              </a>
            </li>
            <li class="col-auto">
              <a href="/">
                <img src="/icons/socialMedia/instagram.png" alt="" />
              </a>
            </li>
            <li class="col-auto">
              <a href="/">
                <img src="/icons/socialMedia/twitter.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div class="categories col-12 col-lg-4 row">
          <ul class="col fs-5">
            <li><NuxtLink to="/"> Home </NuxtLink></li>
            <li><NuxtLink to="/a"> About Us </NuxtLink></li>
            <li><NuxtLink to="/a"> Media Center </NuxtLink></li>
            <li><NuxtLink to="/a"> Contact Us </NuxtLink></li>
          </ul>
          <ul class="col fs-5">
            <li>
              <NuxtLink to="/category/electronics"> Electronics </NuxtLink>
            </li>
            <li><NuxtLink to="/category/jewelery"> jewelery </NuxtLink></li>
            <li>
              <NuxtLink to="/category/men-clothing"> Men Clothing </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/category/women-clothing">
                Women Clothing
              </NuxtLink>
            </li>
          </ul>
        </div>

        <ul class="col-auto">
          <li class="fw-bold fs-2">Contact Us</li>
          <li>+971 0000000</li>
          <li>+971 0000000</li>
          <li>info@sample.com</li>
        </ul>
      </div>
    </div>
    <div class="py-3 text-center border-top border-white">
      &copy; Developer Test 2024. All Rights Reserved.
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped>
footer {
  background-color: black;
  color: white;
}
ul {
  list-style: none;
}
li {
  margin-bottom: 0.5rem;
  font-weight: 100;
}
.logo {
  width: 100%;
  max-width: 300px;
}
.socials img {
  height: 30px;
}

a {
  text-decoration: none;
  color: inherit;
}

a.router-link-active {
  font-weight: bold;
}

@media (max-width: 90000px) {
  .container {
    max-width: 100% !important;
  }
}
</style>
