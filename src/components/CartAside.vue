<script setup>
const props = defineProps({
  orderData: {
    post: Object,
    required: true,
  },
});
</script>

<template>
  <aside class="action">
    <h2 class="action__title">Итого</h2>

    <dl class="action__total-cost total-cost">
      <dt>Сумма заказа</dt>
      <dd>{{ orderData.price }} ₽</dd>

      <dt>Количество</dt>
      <dd>{{ orderData.totalQuantity }} шт</dd>

      <dt>Установка</dt>
      <dd>{{ orderData.totalQuantity ? 'Да' : 'Нет' }}</dd>

      <dt>Стоимость товаров</dt>
      <dd>{{ orderData.totalPrice }}  ₽</dd>
    </dl>

    <button class="action__button" type="button">Оформить заказ</button>
    <button class="action__button action__button--secondary" type="button">
      Купить в 1 клик
    </button>
  </aside>
</template>

<style lang="scss" scoped></style>
