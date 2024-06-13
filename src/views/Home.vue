<template>
    <div>
        <header>
      <!-- <nav>
        <router-link to="/" exact>宠物商店</router-link>
        <router-link to="/car">个人购物车</router-link>
      </nav> -->
      <nav>  
        <router-link to="/goods" exact class="nav-link">  
          <img class="nav-icon" :src="require('@/assets/141.webp')" alt="Pet Store">  
          <span>宠物商店</span>  
        </router-link>  
        <router-link to="/car" class="nav-link">  
          <img class="nav-icon" :src="require('@/assets/98.jpg')" alt="Shopping Cart">  
          <span>个人购物车</span>  
        </router-link>  
      </nav>  
    </header>
    <router-view/>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>