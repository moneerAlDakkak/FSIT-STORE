<template>
  <div>
    <input placeholder="search" />
    <img src="/icons/search.png" alt="search icon" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
  background-color: #eeeee4;
  padding: 4px 8px;
  input {
    border: none;
    outline: none;
    background-color: transparent;
    font-family: inherit;
    ::placeholder {
      color: inoherit;
      opacity: 1; /* Firefox */
    }
  }
}
img {
  width: 15px;
}

@media (max-width: 500px) {
  div {
    input {
      width: 50vw;
    }
    img {
      //   filter: invert(1);
    }
  }
}
</style>
