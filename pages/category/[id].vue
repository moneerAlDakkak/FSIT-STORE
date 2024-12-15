<template>
  <div>
    <h2>{{ category }}</h2>
    <section>
      <ProductCard v-for="product in products" :product />
    </section>
  </div>
</template>

<script lang="ts" setup>
import type product from "~/types/product";

const category = useRoute().params.id;
const { data: products }: { data: Ref<product[]> } = await useFetch(
  `https://fakestoreapi.com/products/category/${category}`
);
</script>

<style lang="scss" scoped>
h2 {
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  margin: 2rem 0 4rem;
  font-size: 2em;
}

section {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  > * {
    max-width: 400px;
  }
}
</style>
