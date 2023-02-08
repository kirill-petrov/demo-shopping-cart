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
    <div class="header__cart container">
      <strong>Ваша корзина</strong>

      <p>
        <span>{{ itemsQuantity }}</span>
      </p>

      <p>{{ totalPrice }} ₽</p>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
