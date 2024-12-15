<template>
  <div>
    <Humberger ref="humburger" />
    <!-- Header for large screens -->
    <header class="d-flex">
      <img src="/icons/logo_black.png" alt="logo" />
      <ul class="list-unstyled d-none d-lg-flex">
        <li><NuxtLink to="/category/electronics"> Electronics </NuxtLink></li>
        <li><NuxtLink to="/category/jewelery"> jewelery </NuxtLink></li>
        <li>
          <NuxtLink to="/category/men's clothing"> Men Clothing </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/category/women's clothing"> Women Clothing </NuxtLink>
        </li>
      </ul>
      <div class="d-none d-lg-flex">
        <Searchbar />
        <div class="icons">
          <NuxtLink to="/login">
            <img src="/icons/Login.png" alt="my account" />
          </NuxtLink>
          <NuxtLink to="/wishlist">
            <img src="/icons/heart_11613265.png" alt="wishlist" />
          </NuxtLink>
          <NuxtLink to="/cart">
            <img src="/icons/Cart.png" alt="cart" />
          </NuxtLink>
        </div>
      </div>
      <UiNavbar class="d-none d-lg-flex" />
      <img
        src="/icons/menu.jpg"
        alt="menu"
        @click="$refs.humburger?.toggleMenu(true)"
        style="width: 40px; mix-blend-mode: darken"
        class="d-flex d-lg-none"
      />
    </header>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
header {
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  > img {
    width: 100px;
    &:not(.d-lg-none img) {
      @media (min-width: 992px) {
        transform: translateY(-30%);
      }
    }
  }
}

ul {
  display: flex;
  justify-content: flex-end;
  padding: 0 1rem;
  gap: 2rem;
  margin: 0;
  font-weight: bold;
  a {
    color: inherit;
    text-decoration: none;
  }
}

div:has(> .icons) {
  display: flex;
  gap: 1rem;
  align-items: center;
  .icons {
    display: flex;
    gap: 1rem;
    img {
      height: 20px;
    }
  }
}
</style>
