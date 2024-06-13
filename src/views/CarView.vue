<template>
  <div class="about">
    <!-- <h3>个人购物车</h3> -->
    <div class="select-all">
      <input type="checkbox" :checked="isAllChecked" @change="toggleCheckAll"> 全选
    </div>
    <ul class="cart-list">
      <li v-for="(item, index) in cars" :key="index" class="cart-item">
        <input type="checkbox" v-model="item.isCheck">
        <img :src="item.imageUrl" alt="" class="item-image">
        <!-- <span>{{ item.name }} - ￥{{ item.price }}</span> -->
        <span>
        <span class="product-name">{{ item.name }}</span>
        <span class="product-price">￥{{ item.price }}</span>
      </span>
        <div class="item-controls">
          <button @click="subsGood(index)">-</button>
          <span>{{ item.num }}</span>
          <button @click="addGood(index)">+</button>
          <button @click="delFromCar(item)">删除</button>
        </div>
      </li>
    </ul>
    <div class="container">  
    <div class="cart-total">  
    <img src="@/assets/98.jpg"class="cart-icon" />
    <span  class="cart-total-text">已添加至购物车的商品总价: {{ $store.getters.sumTotal }} 元</span>
    </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Car',
  computed: {
    ...mapState(['cars']),
    ...mapGetters(['sumTotal', 'isAllChecked'])
  },
  methods: {
    ...mapMutations(['delFromCar', 'subsGood', 'addGood', 'checkAll']),
    ...mapActions(['toggleCheckAll'])
  }
};
</script>

<style lang="less">
.about {
  font-family: Arial, sans-serif;
  padding: 20px;
}

h3 {
  color: #333;
  font-size: 24px;
  font-weight: bold;
  background-color: #f5f5f5;
  padding: 10px 20px;
  margin: 0 0 20px 0;
  border-radius: 5px;
}

.select-all {
  margin: 10px 0;
  display: flex;
  align-items: center;
}

.cart-list {
  padding: 0;
  margin: 0;
}

.cart-item {
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  padding: 10px 20px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.cart-item:hover {
  background-color: #f1f1f1;
}

.cart-item img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
}

.cart-item span {
  font-size: 16px;
  font-weight: bold;
}

.item-controls {
  display: flex;
  align-items: center;
}

.item-controls button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
  margin-left: 5px;
}

.item-controls button:hover {
  background-color: #358a70;
}

span {
  margin-top: 20px;
  color: #666;
}
//购物车图标
.container {  
  /* 假设container是外层的容器，用来控制cart-total的位置 */  
  display: flex;  
  justify-content: flex-end; /* 将子元素居右 */  
  align-items: center; /* 如果需要垂直居中 */  
  /* 其他样式... */  
} 
.cart-total {  
  /* 这里不需要特别的布局样式，除非你想进一步定制 */  
  display: flex; /* 允许子元素并排显示 */  
  align-items: center; /* 垂直居中对齐图片和文本 */  
  /* 其他样式... */  
}  
  
.cart-icon {  
  /* 图片样式 */  
  height: 30px;  
  width: 30px;  
  margin-right: 10px; /* 图片和文本之间的间距 */  
}  
  
.cart-total-text {  
  /* 文本样式 */  
  font-size: 16px;  
  color: #333;  
  font-weight: bold;  
  /* 其他样式... */  
}  

//商品字体
.product-name {  
  font-weight: bold; /* 设置为黑体 */  
  color: black; /* 默认为黑色，但这里其实可以不写，因为大多数文本的默认颜色就是黑色 */  
}  
  
.product-price {  
  color: red; /* 设置为红色 */  
  font-weight: normal; /* 如果需要的话，也可以设置价格为非黑体 */  
  margin-left: 5px; /* 可以添加一些左边距来分隔名字和价格 */  
}  
</style>
