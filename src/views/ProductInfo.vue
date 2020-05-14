<template>
    <div class="body">
    
  <div class="row-column">
    <div class="column-col1">
        <div class="row-inner">
            <div class="col-inner1">
                <img class="image-style" :src="proInfo.itemPic">
                <hr>
                <p>
                    Share this Product
                </p>
                <i class="fab fa-facebook-f icons"></i>
                <i class="fab fa-twitter icons"></i>
            </div>
            <div class="col-inner2">
                <p>{{proInfo.itemName}}</P>
                <hr>
                <p><strong>&#8358; {{proInfo.price}}</strong>
                </p>
                <hr>
                <b-button variant="info" class="btn-cart">ADD TO CART</b-button>

                <!-- <button class="btn-cart">ADD TO CART</button> -->
                <hr>
                <h6>PROMOTIONS</h6>
                <p>
                    Get discount when you sign up to our wallet for easy transaction
                </p>
                <p>
                    Use card payment for a quick and safer delivery
                </p>
            </div>
        </div>
    </div>



    <div class="column-col2">
        <div class="delivery-info">
        <h6>DELIVERY and RETURNS</h6>
        <hr>
        <div class="row-right">
            <div class="icon-sty">
                <i class="fas fa-car-side icons"></i>
            </div>
                <div class="info-right1"><strong>Delivery Information</strong>
                    <p>Normally delivered between Friday 27 Mar and Monday 30 Mar. 
                        Please check exact dates in the Checkout page.See more</p>
                </div>
        </div>
        <div class="row-right">
            <div class="icon-sty"><i class="fas fa-undo-alt icons"></i></div>
                <div class="info-right1"><strong>Return Policy</strong>
                    <p>Free return within 15 days for Jumia Mall items
                 and 7 days for other eligible items.See more</p>
                </div>
        </div>
        </div>
    </div>
  </div>

    <div class="row-column">
        <div class="column-col1">
            <div>
                <h5>Product Description</h5>
                <hr>
                {{proInfo.description}}

            </div>
        </div>
        <div class="column-col2">

        </div>

    </div>

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
.row-inner {
    display: flex;
    flex-direction: row;
    background-color: white;
}
.col-inner1{
    width: 35%;
    background-color: white;
}
.col-inner2{
    width: 70%;
    margin-left: 1rem;
    background-color: white;
}
.top-view {
    padding: 1rem;
    margin-top: 3rem;
    margin-left: 3rem;
}
.row-column {
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
}
.column-col1 {
    width: 80%;
    text-align: left;
    background-color: white;
    padding: 1rem;
    margin-right: 1rem;
    margin-left: 4rem;
    border-radius: 0.5rem;

}
.column-col2{
    background-color: white;
    width:20%;
    padding: 1rem;
    margin-right: 4rem;
    border-radius: 0.5rem;
}
.image-style {
    width: 305px;
    height: 305px;
}
.icon-sty{
    width: 40px;
}
.main-left {
    width: 70%;
    background-color: white;
}
.main-right {
    width: 20%;
    background-color: white;
}
.row-right{
    display: flex;
    flex-direction: row;
}
.icons {
        color: black;
        font-size: 1.5rem;
        
    }
.delivery-info{
    text-align: left;
    font-size: 12px;
}
.body{
    background-color: #F5F5F5;
}
.btn-cart {
    direction: flex;
    width: 100%;
    color: white;
    font-weight: bolder;
}
</style>