<template>
  <Transition name="fade">
    <aside v-if="open" @click.self="toggleMenu(false)">
      <UiNavbar />
      <ul class="list-unstyled">
        <li><NuxtLink to="/category/electronics"> Electronics </NuxtLink></li>
        <li><NuxtLink to="/category/jewelery"> jewelery </NuxtLink></li>
        <li>
          <NuxtLink to="/category/men-clothing"> Men Clothing </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/category/women-clothing"> Women Clothing </NuxtLink>
        </li>
      </ul>
      <div>
        <Searchbar />
        <div class="icons">
          <img src="/icons/Login.png" alt="my account" />
          <img src="/icons/heart_11613265.png" alt="wishlist" />
          <img src="/icons/Cart.png" alt="cart" />
        </div>
      </div>
    </aside>
  </Transition>
</template>

<script setup lang="ts">
const open = ref(false);

function toggleMenu(newOpenState: boolean) {
  open.value = newOpenState;
}

defineExpose({ toggleMenu });
</script>

<style lang="scss" scoped>
aside {
  position: fixed;
  z-index: 1;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  height: 100vh;
  height: 100dvh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-size: 1.5em;

  &:deep(nav) {
    justify-content: center;
    width: fit-content;
    ul {
      flex-flow: column nowrap;
      align-items: center;
      padding: 0;
      gap: 1.5rem;
      width: fit-content;
    }
  }
}

ul {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin: 0;
  font-weight: bold;
  width: fit-content;
  a {
    color: inherit;
    text-decoration: none;
  }
}

div:has(> .icons) {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  .icons {
    display: flex;
    gap: 1rem;
    img {
      height: 20px;
      filter: invert(100000);
    }
  }
}
</style>
