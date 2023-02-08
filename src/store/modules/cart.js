export const cart = {
  namespaced: true,

  state: () => ({
    order: [
      {
        id: 1,
        art: 'g2h1065',
        name: 'Вытяжное устройство G2H',
        desc: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        count: 1,
        img: '/src/assets/img/bxc.jpg',
        img2x: '/src/assets/img/bxc.jpg',
        price: 12644,
      },
      {
        id: 2,
        art: 'G2H1065',
        name: 'Вытяжное устройство BXC',
        desc: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        count: 2,
        img: '/src/assets/img/bxc.jpg',
        img2x: '/src/assets/img/bxc-2x.jpg',
        price: 12644,
      },
      {
        id: 3,
        art: 'G2H1065',
        name: 'Вытяжное устройство GHN',
        desc: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        count: 1,
        img: '/src/assets/img/bxc.jpg',
        img2x: '/src/assets/img/bxc.jpg',
        price: 12644,
      },
    ],
    additionalService: false,
  }),
  getters: {
    getOrderList(state) {
      return state.order;
    },
    getOrderData(state) {
      let orderData = {
        price: 0,
        totalPrice: 0,
        totalQuantity: 0,
        additionalService: state.additionalService,
      };

      state.order.forEach((item) => {
        orderData.price += item.price * item.count;
        orderData.totalPrice += item.price * item.count;
        orderData.totalQuantity += item.count;
      });

      return orderData;
    },
    getItemsQuantity(state) {
      let num = 0;

      state.order.forEach((item) => (num += item.count));

      if (num < 0) {
        return 'Корзина пуста';
      } else if (num === 1) {
        return '1 товар';
      } else if (num > 1 && num < 5) {
        return `${num} товара`;
      } else {
        return `${num} товаров`;
      }

      // todo: додумать — 101, 102, 103, 1001
    },
    getAdditionalService(state) {
      return state.additionalService;
    },
  },
  actions: {
    async sendData({}, body) {
      console.log('sendData **', body);

      const res = await fetch('/shop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      return await res.json();
    },
  },
  mutations: {
    incrementItemQuantity(state, id) {
      state.order.find((item) => {
        if (item.id === id) item.count += 1;
      });
    },
    decrementItemQuantity(state, id) {
      state.order.find((item) => {
        if (item.id === id) item.count -= 1;
      });
    },
    removeAnItem(state, id) {
      state.order = state.order.filter((item) => item.id !== id);
    },
    setAdditionalService(state) {
      state.additionalService = !state.additionalService;
    },
  },
};
