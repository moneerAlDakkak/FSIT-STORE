<template>
  <aside class="offer">
    <p class="fw-bold">{{ text }}</p>
    <CtaButton :text="cta" :to color="black" />
  </aside>
</template>

<script lang="ts" setup>
const props = defineProps<{ text: string; cta: string; to: string }>();
</script>

<style lang="scss" scoped>
.offer {
  background-color: #ede635;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 2rem;
  margin-top: 4rem;
}
p {
  font-size: 1.8em;
  text-transform: uppercase;
  margin: 0;
  text-align: center;
}
</style>
