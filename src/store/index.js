import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAll: false,
    goods: [
      { id: 1, name: "布偶猫", price: 1210, imageUrl: require('@/assets/1.jpg') },
      { id: 2, name: "折耳猫", price: 1520, imageUrl: require('@/assets/2.jpg') },
      { id: 3, name: "泰迪", price: 1230, imageUrl: require('@/assets/3.jpg') },
      { id: 4, name: "萨摩耶", price: 1540, imageUrl: require('@/assets/4.jpg') },
      { id: 5, name: "比熊", price: 1320, imageUrl: require('@/assets/5.jpg') },
      { id: 6, name: "哈士奇", price: 2230, imageUrl: require('@/assets/6.jpg') },
      { id: 7, name: "金吉拉猫", price: 3320, imageUrl: require('@/assets/7.jpg') },
      { id: 8, name: "法国斗牛犬", price: 4540, imageUrl: require('@/assets/8.jpg') },
      { id: 9, name: "雪拉瑞", price: 1540, imageUrl: require('@/assets/9.jpg') },
      { id: 10, name: "约克夏", price: 2240, imageUrl: require('@/assets/10.jpg') },
      { id: 11, name: "纯种泰迪", price: 3320, imageUrl: require('@/assets/11.jpg') },
      { id: 12, name: "德文卷文猫", price: 4540, imageUrl: require('@/assets/12.jpg') },
      { id: 13, name: "缅因猫", price: 4340, imageUrl: require('@/assets/13.jpg') }
    ],
    cars: [
      { id: 1, name: "布偶猫", price: 1210, num: 0, isCheck: false, imageUrl: require('@/assets/1.jpg') },
      { id: 2, name: "折耳猫", price: 1520, num: 0, isCheck: false, imageUrl: require('@/assets/2.jpg') },
      { id: 3, name: "泰迪", price: 1230, num: 0, isCheck: false, imageUrl: require('@/assets/3.jpg') },
      { id: 4, name: "萨摩耶", price: 1540, num: 0, isCheck: false, imageUrl: require('@/assets/4.jpg') },
      { id: 5, name: "比熊", price: 1320, num: 0, isCheck: false, imageUrl: require('@/assets/5.jpg') },
      { id: 6, name: "哈士奇", price: 2230, num: 0, isCheck: false, imageUrl: require('@/assets/6.jpg') },
      { id: 7, name: "金吉拉猫", price: 3320, num: 0, isCheck: false, imageUrl: require('@/assets/7.jpg') },
      { id: 8, name: "法国斗牛犬", price: 4540, num: 0, isCheck: false, imageUrl: require('@/assets/8.jpg') },
      { id: 9, name: "雪拉瑞", price: 1540, num: 0, isCheck: false, imageUrl: require('@/assets/9.jpg') },
      { id: 10, name: "约克夏", price: 2240, num: 0, isCheck: false, imageUrl: require('@/assets/10.jpg') },
      { id: 11, name: "纯种泰迪", price: 3320, num: 0, isCheck: false, imageUrl: require('@/assets/11.jpg') },
      { id: 12, name: "德文卷文猫", price: 4540, num: 0, isCheck: false, imageUrl: require('@/assets/12.jpg') },
      { id: 13, name: "缅因猫", price: 4340, num: 0, isCheck: false, imageUrl: require('@/assets/13.jpg') }
    ]
  },
  getters: {
    sumTotal(state) {
      return state.cars.filter(item => item.isCheck).reduce((prev, item) => prev += item.price * item.num, 0);
    },
    isAllChecked(state) {
      return state.cars.every(item => item.isCheck);
    }
  },
  mutations: {
    addToCar(state, item) {
      const index = state.cars.findIndex(car => car.id == item.id)
      index !== -1 ? state.cars[index].num++ : ''
    },
    delFromCar(state, item) {
      const index = state.cars.findIndex(car => car.id == item.id)
      index !== -1 ? state.cars.splice(index, 1) : ''
    },
    subsGood(state, index) {
      state.cars[index].num == 0 ? state.cars[index].num = 0 : state.cars[index].num--
    },
    addGood(state, index) {
      state.cars[index].num++
    },
    checkAll(state) {
      state.isAll = !state.isAll;
      state.cars.forEach(item => {
        item.isCheck = state.isAll;
      });
    }
  },
  actions: {
    toggleCheckAll({ commit }) {
      commit('checkAll');
    }
  },
  modules: {
  }
})
