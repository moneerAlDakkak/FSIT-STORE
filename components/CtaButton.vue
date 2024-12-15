<template>
  <NuxtLink :to>
    <button :class="color">
      {{ text }}
      <img src="/icons/arrow.svg" />
    </button>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  to: string;
  text: string;
  color: "white" | "black";
}>();
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  display: block;
  position: relative;
}

button {
  display: block;
  border: none;
  font-weight: bold;
  padding: 1.5vw 2.5vw;
  font-size: 0.8em;
  text-transform: uppercase;
  display: flex;
  gap: 1rem;
  align-items: center;
  position: relative;
  white-space: nowrap;

  img {
    width: 40px;
  }

  &.white {
    color: black;
    background-color: #eeeee4;
  }

  &.black {
    color: white;
    background-color: black;
    img {
      filter: invert(1);
    }
  }

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    transform: translate(3px, 3px);
    border: 1px solid black;
    transition: transform 0.2s ease;
  }
  &.white:after {
    border-color: #eeeee4;
  }

  &:hover {
    &:after {
      transform: none;
    }
  }
}
</style>
