<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import MainHeader from '../components/MainHeader.vue';
import BreadcrumbsNav from '../components/BreadcrumbsNav.vue';

const store = useStore();

const itemsQuantity = computed(() => store.getters['cart/getItemsQuantity']);
</script>

<template>
  <MainHeader :itemsQuantity="itemsQuantity" />

  <BreadcrumbsNav />

  <main class="cart container">
    <header class="cart__header cart-header">
      <h1 class="cart-header__title">Ваша корзина</h1>
      <span class="cart-header__num-of-products">4 товара</span>
      <button class="cart-header__clear-cart" type="button">
        Очистить корзину
      </button>
    </header>

    <section class="cart__list-of-products">
      <ul>
        <li class="product" v-for="item of order" :key="item.id">
          <div class="product__picture">
            <img
              :src="item.img"
              width="100"
              height="100"
              alt="Изображение товара"
            />
          </div>

          <div class="product__detail product-desc">
            <h2 class="product-desc__title">{{ item.name }}</h2>
            <p class="product-desc__desc">{{ item.desc }}</p>
            <p class="product-desc__num">
              Артикул: {{ item.art.toLocaleUpperCase() }}
            </p>
          </div>

          <div class="product__quantity quantity">
            <button class="quantity__btn quantity__btn--dec" type="button">
              <svg
                width="10"
                height="10"
                viewBox="0 -4 10 10"
                preserveAspectRatio="xMidYMid"
                fill="none"
              >
                <path
                  d="M9 1L1 1"
                  stroke="#33374E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button class="quantity__btn quantity__btn--inc" type="button">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M5 1V9"
                  stroke="#33374E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 5L1 5"
                  stroke="#33374E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div class="quantity__value"><span>999</span></div>
          </div>

          <div class="product__total-price">
            <span>12 644</span>
          </div>

          <button class="product__btn-remove" type="button">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13" stroke="#1F2432" stroke-width="1.5" />
              <path d="M1 13L13 1" stroke="#1F2432" stroke-width="1.5" />
            </svg>
          </button>
        </li>
      </ul>

      <div class="additional-service">
        <div class="additional-service__checkbox">
          <label class="checkbox">
            <input
              class="checkbox__input"
              type="checkbox"
              name="additional-service"
              checked
            />
          </label>
        </div>

        <div class="additional-service__icon"></div>
        <div class="additional-service__desc">
          <p><strong>Установка</strong></p>
          <p>
            Отметьте, если Вам необходима консультация профессионала по монтажу
            выбранных товаров.
          </p>
        </div>
      </div>
    </section>

    <aside class="cart__action action">
      <h2 class="action__title">Итого</h2>

      <dl class="action__total-cost total-cost">
        <dt>Сумма заказа</dt>
        <dd>50 576 ₽</dd>

        <dt>Количество</dt>
        <dd>4 шт</dd>

        <dt>Установка</dt>
        <dd>Нет</dd>

        <dt>Стоимость товаров</dt>
        <dd>50 576 ₽</dd>
      </dl>

      <button class="action__button" type="button">Оформить заказ</button>
      <button class="action__button action__button--secondary" type="button">
        Купить в 1 клик
      </button>
    </aside>

    <footer class="cart__footer footer">
      <h2 class="footer__title">Просмотренные товары</h2>

      <div class="footer__slider">
        <div class="card">
          <div class="card__image-wrapper">
            <img
              class="card__picture"
              width="245"
              height="245"
              src="./assets/img/tda-pre-2x.png"
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
