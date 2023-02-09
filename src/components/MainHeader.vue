<script setup>
const props = defineProps({
  itemsQuantity: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
});
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="cart-mini">
          <p>Ваша корзина</p>
          <p>{{ itemsQuantity }}</p>
          <p>{{ new Intl.NumberFormat('ru-RU').format(totalPrice) }} ₽</p>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
</style>
