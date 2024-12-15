<template>
  <div class="container text-center py-5">
    <h2 class="mb-5">CART</h2>
    <table v-if="cart.length">
      <tr v-for="item in cart">
        <td>
          <img :src="item.product.image" :alt="item.product.title" />
        </td>
        <td>{{ item.product.title }}</td>
        <td>{{ parseFloat(item.product.price) * item.amount }} AED</td>
        <td>
          <CartButton :product="item.product" />
        </td>
      </tr>
    </table>
    <div v-if="cart.length" class="text-end fw-bold fs-5 text-danger p-3">
      Total:
      {{ total }}
    </div>
    <p v-else>Cart is empty</p>
  </div>
</template>

<script setup lang="ts">
import type PRODUCT from "~/types/product";

const cart = useState<{ product: PRODUCT; amount: number }[]>("cart");

const total = computed(() => {
  return cart.value.reduce(
    (final: number, item: { product: PRODUCT; amount: number }) =>
      final + parseFloat(item.product.price) * item.amount,
    0
  );
});
</script>

<style lang="scss" scoped>
div.container {
  min-height: 50vh;
}
table {
  width: 100%;
  tr {
    td {
      padding: 1rem;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
}

img {
  height: 80px;
}
</style>
