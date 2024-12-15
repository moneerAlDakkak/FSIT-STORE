<template>
  <div>
    <carousel wrapAround autoplay="2000" transition="800">
      <slide v-for="banner in banners" :key="banner.title">
        <div class="banner">
          <div class="description">
            <b class="fw-900">{{ banner.title }}</b>
            <p>
              {{ banner.description }}
            </p>
            <CtaButton :to="banner.link" text="Shop Now" color="black" />
          </div>
          <img :src="banner.picture" alt="header image" />
        </div>
      </slide>

      <template #addons>
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script lang="ts" setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import headerImg from "/public/images/Header.jpg";

const banners = ref([
  {
    title: "Sale",
    description: "Access a limited selection with up to 70% off",
    picture: headerImg,
    link: "/category/electronics",
  },
  {
    title: "Sale",
    description: "Access a limited selection with up to 70% off",
    picture: headerImg,
    link: "/category/electronics",
  },
  {
    title: "Sale",
    description: "Access a limited selection with up to 70% off",
    picture: headerImg,
    link: "/category/electronics",
  },
  {
    title: "Sale",
    description: "Access a limited selection with up to 70% off",
    picture: headerImg,
    link: "/category/electronics",
  },
]);
</script>

<style scoped>
.banner {
  width: 100vw;
  background-color: #eeeee4;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 3vw;
}
img {
  width: 66vw;
}

.description {
  max-width: 28vw;
  flex-grow: 1;
  text-align: left;
  font-size: min(1.2em, 4.5vw);
  text-transform: uppercase;
}

.description b {
  display: block;
  font-size: 2em;
  font-weight: 900;
}

@media (max-width: 920px) {
  .banner {
    flex-flow: column nowrap !important;
    align-items: flex-start !important;
    img {
      width: 100% !important;
    }
    .description {
      max-width: 100% !important;
    }
  }
}
</style>
