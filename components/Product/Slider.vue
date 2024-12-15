<template>
  <div class="slider">
    <h2>{{ title }}</h2>
    <carousel snapAlign="start" gap="15" transition="800" :breakpoints>
      <slide v-for="product in products" :key="product.id">
        <ProductCard :product />
      </slide>

      <template #addons>
        <navigation v-if="navigation" class="navigation" />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import type product from "~/types/product";

const props = defineProps<{
  title: string;
  navigation?: boolean;
  productsNumber: number;
  products: product[];
}>();

//  SLider responsive
const breakpoints = {
  // 300px and up
  300: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  400: {
    itemsToShow: 1.2,
    snapAlign: "center",
  },
  600: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  // 400px and up
  800: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  // 500px and up
  1000: {
    itemsToShow: 4,
    snapAlign: "start",
  },
};
</script>

<style lang="scss" scoped>
.slider {
  padding: 0 2rem;
}

h2 {
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 3rem;
}
</style>
