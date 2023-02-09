<script setup>
const emit = defineEmits(['send-order']);

const props = defineProps({
  orderData: {
    post: Object,
    required: true,
  },
});

const sendOrder = () => emit('send-order');
</script>

<template>
  <aside class="action">
    <h2 class="action__title">Итого</h2>

    <dl class="action__total-cost total-cost">
      <dt>Сумма заказа</dt>
      <dd>{{ new Intl.NumberFormat('ru-RU').format(orderData.price) }} ₽</dd>

      <dt>Количество</dt>
      <dd>{{ orderData.totalQuantity }} шт</dd>

      <dt>Установка</dt>
      <dd>{{ orderData.additionalService ? 'Да' : 'Нет' }}</dd>

      <dt>Стоимость товаров</dt>
      <dd>
        {{ new Intl.NumberFormat('ru-RU').format(orderData.totalPrice) }} ₽
      </dd>
    </dl>

    <button class="action__button" type="button" @click="sendOrder">
      Оформить заказ
    </button>
    <button class="action__button action__button--secondary" type="button">
      Купить в 1 клик
    </button>
  </aside>
</template>

<style lang="scss" scoped></style>
