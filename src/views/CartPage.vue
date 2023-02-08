<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import MainHeader from '../components/MainHeader.vue';
import BreadcrumbsNav from '../components/BreadcrumbsNav.vue';
import CartHeader from '../components/CartHeader.vue';
import ListOfProducts from '../components/ListOfProducts.vue';
import CartAside from '../components/CartAside.vue';

const store = useStore();

const itemsQuantity = computed(() => store.getters['cart/getItemsQuantity']);
const order = computed(() => store.getters['cart/getOrderList']);
const orderData = computed(() => store.getters['cart/getOrderData']);
const additionalService = computed(
  () => store.getters['cart/getAdditionalService'],
);

const incrementItemQuantity = (id) => {
  store.commit('cart/incrementItemQuantity', id);
};

const decrementItemQuantity = (id) => {
  store.commit('cart/decrementItemQuantity', id);
};

const removeAnItem = (id) => store.commit('cart/removeAnItem', id);

const setService = () => store.commit('cart/setAdditionalService');

const sendOrder = () => {
  store.dispatch('cart/sendData', {
    list: [...order.value],
    ...orderData.value,
  });
};
</script>

<template>
  <MainHeader
    :itemsQuantity="itemsQuantity"
    :totalPrice="orderData.totalPrice"
  />

  <BreadcrumbsNav />

  <main class="cart container">
    <CartHeader class="cart__header" :itemsQuantity="itemsQuantity" />

    <ListOfProducts
      class="cart__list-of-products"
      :order="order"
      :additionalService="additionalService"
      @increment="incrementItemQuantity"
      @decrement="decrementItemQuantity"
      @remove="removeAnItem"
      @set-service="setService"
    />

    <CartAside
      class="cart__action"
      :orderData="orderData"
      @send-order="sendOrder"
    />

    <footer class="cart__footer footer">
      <h2 class="footer__title">Просмотренные товары</h2>

      <div class="footer__slider">
        <div class="card">
          <div class="card__image-wrapper">
            <img
              class="card__picture"
              width="245"
              height="245"
              src="/src/assets/img/tda-pre-2x.png"
              alt="Изображение товара"
            />
          </div>

          <div class="card__info-wrapper">
            <h1 class="card__title">BXC</h1>
            <p class="card__desc">
              Многофункциональное вытяжное устройство для естественной и
              гибридной вентиляции
            </p>
          </div>

          <div class="card__price-block">
            <p><strong>6 848 ₽ – 56 584 ₽ </strong></p>
            <p>77.60 € – 643.86 €</p>
          </div>

          <button class="card__btn" type="button">Подробнее</button>
        </div>
      </div>
    </footer>
  </main>
</template>

<style lang="scss">
@import '../assets/sass';
</style>
