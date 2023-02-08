<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import BreadcrumbsNav from '../components/BreadcrumbsNav.vue';
import CartAside from '../components/CartAside.vue';
import CartHeader from '../components/CartHeader.vue';
import FooterSlider from '../components/FooterSlider.vue';
import ListOfProducts from '../components/ListOfProducts.vue';
import MainHeader from '../components/MainHeader.vue';

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

      <FooterSlider />
    </footer>
  </main>
</template>

<style lang="scss">
@import '../assets/sass';
</style>
