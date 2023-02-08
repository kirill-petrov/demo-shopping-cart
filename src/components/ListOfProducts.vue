<script setup>
const emit = defineEmits(['increment', 'decrement', 'remove', 'set-service']);

const props = defineProps({
  order: {
    type: Array,
    default: () => [],
  },
  additionalService: {
    type: Boolean,
    required: true,
  },
});

const increment = (id) => emit('increment', id);
const decrement = (id) => emit('decrement', id);
const remove = (id) => emit('remove', id);
const setService = (id) => emit('set-service');

</script>

<template>
  <section>
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
          <button
            class="quantity__btn quantity__btn--dec"
            type="button"
            @click="decrement(item.id)"
            :disabled="item.count === 1"
          >
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

          <button
            class="quantity__btn quantity__btn--inc"
            type="button"
            @click="increment(item.id)"
          >
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

          <div class="quantity__value">
            <span>{{ item.count }}</span>
          </div>
        </div>

        <div class="product__total-price">
          <span>{{ item.price * item.count }}</span>
        </div>

        <button
          class="product__btn-remove"
          type="button"
          @click="remove(item.id)"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13" stroke="#1F2432" stroke-width="1.5" />
            <path d="M1 13L13 1" stroke="#1F2432" stroke-width="1.5" />
          </svg>
        </button>
      </li>
    </ul>

    <div class="additional-service" v-if="order.length">
      <div class="additional-service__checkbox">
        <label class="checkbox">
          <input
            class="checkbox__input"
            type="checkbox"
            name="additional-service"
            :checked="additionalService"
            @change="setService"
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
</template>

<style lang="scss" scoped></style>
