<template>
  <div class="home">
    <!-- <h3>宠物商店</h3> -->
    <img src="../assets/99.png" alt="Your Image" class="centered-image" />
    <ul class="goods-list">
      <li v-for="(item, index) in goods" :key="index" class="goods-item">
        <img :src="item.imageUrl" alt="" class="item-image">
        <span>
        <span class="product-name">{{ item.name }}</span>
        <span class="product-price">￥{{ item.price }}</span>
      </span>
        <!-- <span class="price-red">{{ item.name }} - ￥{{ item.price }}</span> -->
        <button @click="addToCar(item)">添加至购物车</button>
      </li>
    </ul>
    <!-- <h4>已添加至购物车的商品总价: {{ $store.getters.sumTotal }} 元</h4> -->
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'HomeView',
  computed: {
    ...mapState(['goods'])
  },
  methods: {
    ...mapMutations(['addToCar'])
  }
};
</script>

<style lang="less">
.home {
  font-family: Arial, sans-serif;
  padding: 20px;
}

/* h3 {
  color: #333;
  font-size: 24px;
  font-weight: bold;
  background-color: #f5f5f5;
  padding: 10px 20px;
  margin: 0 0 20px 0;
  border-radius: 5px;
} */
.centered-container {  
  display: flex;  
  justify-content: center; /* 水平居中 */  
  align-items: center; /* 垂直居中 */  
  height: 100vh; /* 设置容器高度为视口高度，以便垂直居中 */  
}  
  
.centered-image {  
  max-width: 100%; /* 图片最大宽度为容器宽度 */  
  height: auto; /* 图片高度自动 */  
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

.goods-list {
  padding: 0;
  margin: 0;
}

.goods-item {
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  padding: 10px 20px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.goods-item:hover {
  background-color: #f1f1f1;
}

.goods-item img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
}

.goods-item span {
  font-size: 16px;
  font-weight: bold;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #358a70;
}

h4 {
  margin-top: 20px;
  color: #666;
}

//使添加至购物车功能在右侧
.goods-item {
  display: flex;
  justify-content: space-between; /* Align items with space between them */
  align-items: center;
  background-color: #f9f9f9;
  padding: 10px 20px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.goods-item:hover {
  background-color: #f1f1f1;
}

.goods-item img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
}

.goods-item span {
  font-size: 16px;
  font-weight: bold;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

</style>
