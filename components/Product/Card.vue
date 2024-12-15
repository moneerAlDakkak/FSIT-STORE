<template>
  <NuxtLink :to="`/product/${product.id}`" class="carde">
    <figure>
      <img :src="product.image" :alt="product.title" />
    </figure>
    <p class="description">
      {{ product.title }}
    </p>
    <b
      >AED <del>{{ product.price }}</del> {{ product.price }}</b
    >
  </NuxtLink>
</template>

<script lang="ts" setup>
import type product from "~/types/product";

const props = defineProps<{
  product: product;
}>();
</script>

<style lang="scss" scoped>
.carde {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  color: inherit;
  text-decoration: none;
  margin-bottom: 2rem;
  flex-shrink: 0 !important;
  text-align: center;

  .description {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    margin: 0;
    font-weight: 100;
  }
  figure {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
  }
  img {
    height: 300px;
    max-width: 100%;
  }
}
</style>
