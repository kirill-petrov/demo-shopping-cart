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
      },
      {
        id: 2,
        art: 'G2H1065',
        name: 'Вытяжное устройство BXC',
        desc: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        count: 2,
        img: '/src/assets/img/bxc.jpg',
        img2x: '/src/assets/img/bxc-2x.jpg',
      },
      {
        id: 3,
        art: 'G2H1065',
        name: 'Вытяжное устройство GHN',
        desc: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        count: 1,
        img: '/src/assets/img/bxc.jpg',
        img2x: '/src/assets/img/bxc.jpg',
      },
    ],
  }),
  getters: {
    getOrder(state) {
      return state.order;
    }, // -> getters['account/isAdmin']
  },
  actions: {
    // login() {}, // -> dispatch('account/login')
  },
  mutations: {
    incrementItemQuantity(state, payload) {
      const cartItem = state.order.find((item) => {
        if (item.id === payload.id) {
          item.count = payload.count;
        }
      });
    }, // -> commit('account/login')
  },
};
