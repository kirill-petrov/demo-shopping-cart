<script setup>
const props = defineProps({
  itemsQuantity: String,
  required: true,
});
</script>

<template>
  <header class="header">
    <div class="header__cart container">
      <strong>Ваша корзина</strong>

      <p>
        <span>{{ itemsQuantity }}</span>
      </p>

      <p style="color: red">{{ '000' }} ₽</p>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
