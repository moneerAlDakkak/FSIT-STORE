<template>
  <div>
    <Transition name="fade" mode="out-in">
      <button
        v-if="!productInCart"
        class="col-12 btn btn-primary"
        @click="addToCart()"
      >
        Add to Cart
      </button>
      <div v-else>
        <button class="col-4 btn btn-outline-primary" @click="addToCart()">
          +
        </button>
        <span class="d-inline-block text-center col-4">{{ amountInCart }}</span>
        <button class="col-4 btn btn-outline-primary" @click="removeFromCart()">
          -
        </button>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import type PRODUCT from "~/types/product";

const { product } = defineProps<{ product: PRODUCT }>();

const cart = useState<{ product: PRODUCT; amount: number }[]>("cart");

const productInCartIndex = computed(() => {
  return cart.value?.findIndex((p) => p.product.id === product.id);
});

const productInCart = computed(() => {
  if (!cart.value) return null;
  else return cart.value[productInCartIndex.value]?.product;
});
const amountInCart = computed(() => {
  if (!cart.value) return null;
  else return cart.value[productInCartIndex.value]?.amount;
});

watch(
  cart.value,
  () => {
    // Save updated cart to localStorage
    localStorage.setItem("dev:cart", JSON.stringify(cart.value));
  },
  { deep: true }
);

function addToCart() {
  if (productInCart.value) {
    // increase amount when already in cart
    cart.value[productInCartIndex.value].amount++;
  } else {
    // Add if not already in cart
    cart.value.push({ product: product, amount: 1 });
  }
}

function removeFromCart() {
  if (productInCart.value) {
    // decrease amount
    cart.value[productInCartIndex.value].amount--;
    // Remove when amount is zero
    if (cart.value[productInCartIndex.value].amount == 0) {
      cart.value = cart.value.filter((_, i) => i !== productInCartIndex.value);
    }
  }
}
</script>

<style lang="scss" scoped></style>
