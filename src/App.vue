<script setup>
import { ref } from 'vue';

const order = [
  {
    id: 1,
    art: 'g2h1065',
    name: 'Вытяжное устройство G2H',
    desc: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
    count: 1,
  },
  {
    id: 2,
    art: 'G2H1065',
    name: 'Вытяжное устройство BXC',
    desc: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
    count: 2,
  },
  {
    id: 3,
    art: 'G2H1065',
    name: 'Вытяжное устройство GHN',
    desc: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
    count: 1,
  },
];
</script>

<template>
  <header class="header"></header>

  <ul class="breadcrumbs container">
    <li class="breadcrumbs__item">Главная</li>
    <li class="breadcrumbs__item">Корзина</li>
  </ul>

  <section class="cart container">
    <header class="cart__header">
      <h1>Ваша корзина</h1>
      <!-- number of products  -->
      <span>4 товара</span>
      <button type="button">Очистить корзину</button>
    </header>

    <main class="cart__products">
      <div class="product" v-for="item of order" :key="item.id">
        <img class="product__picture" src="" alt="Изображение товара" />

        <div class="product__detail">
          <h2 class="order-item__title">{{ item.name }}</h2>
          <p class="order-item__desc">{{ item.desc }}</p>
          <p class="order-item__num">{{ item.art }}</p>
        </div>

        <div class="product__quantity quantity">
          <button class="quantity__decrement" type="button">-</button>
          <button class="quantity__increment" type="button">+</button>
          <div class="quantity__total">999</div>
        </div>

        <div class="quantity__total-price">&#8381;</div>
      </div>

      <div class="additional-service">
        <div class="additional-service__checkbox"></div>
        <div class="additional-service__icon"></div>
        <div class="additional-service__desc">
          <p><strong>Установка</strong></p>
          <p>
            Отметьте, если Вам необходима консультация профессионала по монтажу
            выбранных товаров.
          </p>
        </div>
      </div>
    </main>

    <aside class="cart__target-action target-action">
      <h2>Итого</h2>

      <dl class="target-action__total-cost">
        <dt>Сумма заказа</dt>
        <dd>50 576 ₽</dd>

        <dt>Количество</dt>
        <dd>4 шт</dd>

        <dt>Установка</dt>
        <dd>Нет</dd>

        <dt>Стоимость товаров</dt>
        <dd>50 576 р</dd>
      </dl>

      <button class="target-action__button" type="button">
        Оформить заказ
      </button>
      <button class="target-action__button" type="button">
        Купить в 1 клик
      </button>
    </aside>

    <footer class="cart__viewed-products viewed">
      <h2 class="viewed__title">Просмотренные товары</h2>

      <div class="viewed__swiper">СЛАЙДЕР</div>

      <main class="viewed__cards card">
        <div class="card__image-wrapper">
          <img class="card__picture" src="" alt="" />
        </div>

        <div class="card__info-wrapper">
          <h1 class="card-info__title">BXC</h1>
          <p class="card-info__desc">
            Многофункциональное вытяжное устройство для естественной и гибридной
            вентиляции
          </p>
          <p><strong>6 848 ₽ – 56 584 ₽ </strong></p>
          <p><span>77.60 € – 643.86 €</span></p>
          <button class="target-action__button" type="button">Подробнее</button>
        </div>
      </main>
    </footer>
  </section>
</template>

<style lang="scss" scoped>
@import './assets/sass/index.scss';


</style>
