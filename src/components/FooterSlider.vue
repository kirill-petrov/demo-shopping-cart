<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import ProductCard from '../components/ProductCard.vue';

// Управление количеством просмотренных товаров
const numViewedItems = ref(9);

const modules = [Navigation, Pagination];
</script>

<template>
  <div class="slider-controls">
    <swiper
      :modules="modules"
      :navigation="{
        prevEl: '.slider-controls__prev',
        nextEl: '.slider-controls__next',
      }"
      :pagination="{
        el: '.slider-controls__pagination',
        type: 'fraction',
      }"
      :slides-per-view="4"
      :slides-per-group="4"
      :space-between="20"
    >
      <swiper-slide v-for="item of numViewedItems" :key="item">
        <ProductCard />
      </swiper-slide>
    </swiper>

    <div class="slider-controls__pagination">asd</div>

    <div class="slider-controls__prev"></div>
    <div class="slider-controls__next"></div>
  </div>
</template>

<style lang="scss">
@use '../assets/sass/abstracts/vars' as *;

.swiper {
  width: 1280px;
  height: 563px;
}

.slider-controls {
  position: relative;
}

.slider-controls__prev {
  position: absolute;
  content: '';
  top: -97px;
  right: 129px;
  width: 50px;
  height: 50px;
  transform: rotate(180deg);
  background-image: url('../assets/svg/arrow.svg');
  background-repeat: no-repeat;
  background-size: contain;
}

.slider-controls__next {
  position: absolute;
  content: '';
  top: -97px;
  right: 0;
  width: 50px;
  height: 50px;
  background-image: url('../assets/svg/arrow.svg');
  background-repeat: no-repeat;
  background-size: contain;
}

.slider-controls__pagination {
  position: absolute;
  top: -85px;
  left: 1172px;

  font-family: $font-lato;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #797b86;

  & .swiper-pagination-current {
    font-weight: 500;
    font-size: 24px;
    color: #212121;
  }
}
</style>
