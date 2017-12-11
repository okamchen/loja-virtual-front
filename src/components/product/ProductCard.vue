<template>
  <div class="row">
    <div class="product-image col-xs-2">
      <img class="img-responsive" :src="product.imageUrl" alt="">
    </div>
    <div class="product-description col-xs-10">
      <div>
        <h4>{{product.name}}</h4>
      </div>
      <div class="product-price-cart">
        ${{product.price}}
      </div>
      <div>
        {{product.description}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'product-card',
    props: ['product']
  }
</script>

<style scope>
  .product {
    background: #FFF;
    margin-bottom: 30px;
    /* position: relative; */
    /* overflow: hidden; */
  }

  .product {
    /* width: 100%; */
  }

  .product-image img {
    display: block;
    
    /* margin-left: auto;
    margin-right: auto; */
    height: 100px;
  }

  .product-description {
    /* display: flex;
    padding: 20px 20px 15px; */
    background: #FFF;
  }

  .product-description small {
    color: #808080;
  }

  .product-description h4 {
    margin: 3px 0 5px 0;
  }

  .product-price-cart {
    /* flex: 1; */
    /* display: flex; */
    /* justify-content: flex-end; */
    /* align-items: center; */
    /* font-size: 20px; */
    /* font-weight: bold; */
    color: #51D2B7;
  }

  .product-price-cart p {
    /* flex-grow: 2; */
    /* font-size: 20px; */
    /* font-weight: bold; */
  }

  .product-action {
    /* position: absolute; */
    bottom: 0;
    left: 0;
    /* width: 100%; */
    /* transform: translateY(100%); */
  }
  .product-action button {
    border-radius: 0;
    /* width: 100%; */
    display: block;
  }
</style>

