<script setup>
const props = defineProps({
  itemsQuantity: String,
  required: true,
});
</script>

<template>
  <header class="cart-header">
    <h1 class="cart-header__title">Ваша корзина</h1>
    <span class="cart-header__num-of-products">{{ itemsQuantity }}</span>
    <button class="cart-header__clear-cart" type="button">
      Очистить корзину
    </button>
  </header>
</template>

<style lang="scss" scoped></style>
