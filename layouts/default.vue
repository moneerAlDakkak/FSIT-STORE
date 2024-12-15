<template>
  <div>
    <NuxtLoadingIndicator color="black" />
    <UiHeader />
    <main>
      <slot />
    </main>
    <UiFooter />
  </div>
</template>

<script setup lang="ts">
if (import.meta.client) {
  const cartString = localStorage.getItem("dev:cart");
  useState("cart", () => JSON.parse(cartString || "[]"));
}
</script>

<style lang="scss">
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>
