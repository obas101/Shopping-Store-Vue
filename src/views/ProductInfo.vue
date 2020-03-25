<template>
    <div class="body">
    <b-container class="bv-example-row">
  <b-row >
    <b-col class="main-left">
        <b-row>
            <b-col>
                <img class="image-style" :src="proInfo.itemPic">
                <hr>
                <p>
                    Share this Product
                </p>
                <i class="fab fa-facebook-f icons"></i>
                <i class="fab fa-twitter icons"></i>
            </b-col>
            <b-col>
                <p>{{proInfo.itemName}}</P>
                <hr>
                <p><strong>&#8358; {{proInfo.price}}</strong>
                </p>
                <hr>
                <button class="btn-cart">ADD TO CART</button>
                <hr>
                <h6>PROMOTIONS</h6>
                <p>
                    Get discount when you sign up to our wallet for easy transaction
                </p>
                <p>
                    Use card payment for a quick and safer delivery
                </p>
            </b-col>
        </b-row>
    </b-col>



    <b-col class="main-right">
        <div class="delivery-info">
        <h6>DELIVERY & RETURNS</h6>
        <strong>Delivery Information</strong>
            <p>Normally delivered between Friday 27 Mar and Monday 30 Mar. 
                Please check exact dates in the Checkout page.See more</p>

        <strong>Return Policy</strong>
            <p>Free return within 15 days for Jumia Mall items
                 and 7 days for other eligible items.See more</p>
        </div>
    </b-col>
  </b-row>
</b-container>
    </div>
</template>

<script>

export default {
    name: 'ProductInfo',
    props: [
        'proinfo'
    ],
    computed: {
        proInfo() {
            return this.$store.state.selectedProduct;
        }
    }
}
</script>

<style scoped>
.main-left {
    width: 70%;
}
.main-right {
    width: 20%;
}
.delivery-info{
    text-align: left;
}
.body{
    background-color: #F5F5F5;
    text-align: left;
}
.btn-cart {
    background-color: #F68B1E;
    direction: flex;
    width: 100%;
    color: white;
    font-weight: bolder;
}

</style>