<template>
  <section>
    <img :src="product.image" :alt="product.title" />
    <div class="meta">
      <h2>{{ product.title }}</h2>
      <p>{{ product.description }}</p>
      <div class="row gap-2">
        <CartButton :product class="col-4" />
        <button class="col-4 btn btn-outline-primary">Buy Now</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type PRODUCT from "~/types/product";

const productId = useRoute().params.id;
const { data: product }: { data: Ref<PRODUCT> } = await useFetch(
  `https://fakestoreapi.com/products/${productId}`
);
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
  padding: 6rem;
  img {
    max-width: 400px;
    max-height: 300px;
    width: 100%;
  }
  .meta {
    max-width: 500px;
  }
}

h2 {
  text-transform: uppercase;
  font-weight: bold;
}

section {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
</style>
