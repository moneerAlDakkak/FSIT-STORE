<template>
  <main>
    <Hero />
    <Banner
      picture="/images/Jewelry.jpg"
      :cta="banners[0].cta"
      :to="banners[0].link"
    />
    <ProductSlider
      title="Special Offers"
      navigation
      :products-number="4.5"
      :products
    />
    <Banner
      picture="/images/fashion.jpg"
      :cta="banners[1].cta"
      :to="banners[1].link"
    />
    <ProductSlider title="New Arrivals" :products-number="4" :products />
    <Offer
      text="Become a member & get 15% Off"
      cta="sign up for free"
      to="/signup"
    />
  </main>
</template>

<script setup lang="ts">
import type product from "~/types/product";

const { data: products }: { data: Ref<product[]> } = await useFetch(
  "https://fakestoreapi.com/products?limit=8"
);

const banners = ref([
  {
    picture: "",
    cta: "see more",
    link: "/category/jewelery",
  },
  {
    picture: "",
    link: "/category/men-clothing",
  },
]);
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  font-family: Dubai;
  margin: 0;
}

ol.carousel__pagination {
  top: 105%;
  --vc-pgn-width: 20px;
  --vc-pgn-height: 1px;
  --vc-pgn-border-radius: 0;
  --vc-pgn-background-color: black;
  align-items: flex-end;
}

.carousel__pagination-button--active {
  --vc-pgn-height: 2px;
}
</style>
