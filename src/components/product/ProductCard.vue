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
  }

  .product {
  }

  .product-image img {
    display: block;
    margin-bottom: 10px;
    height: 100px;
  }

  .product-description {
    background: #FFF;
  }

  .product-description small {
    color: #808080;
  }

  .product-description h4 {
    margin: 3px 0 5px 0;
  }

  .product-price-cart {
    color: #51D2B7;
  }

  .product-price-cart p {
  }

  .product-action {
    bottom: 0;
    left: 0;
  }
  .product-action button {
    border-radius: 0;
    display: block;
  }
</style>

