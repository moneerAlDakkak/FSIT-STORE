<template>
  <NuxtLink :to>
    <img class="w-100" :src="picture" />
    <CtaButton v-if="cta" :text="cta" color="white" :to />
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps<{
  picture: string;
  cta?: string;
  to: string;
}>();
</script>

<style lang="scss" scoped>
a {
  position: relative;
  display: flex;
  padding: 4rem 0;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  img {
    min-width: 600px;
  }

  > a {
    position: absolute;
    left: 3vw;
    bottom: 3vw;
    width: fit-content;
  }
}
</style>
