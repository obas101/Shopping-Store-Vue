<template>
    <v-container>
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <v-row
        justify = "center"
    >
      <v-col
        cols="12"
        md="8"
      >

            <v-row no-gutters>
      
                <v-col>
                    
                    <img class="image-style" :src="proInfo.activeProduct.productThumb" width="383px">
                        <hr>
                        <p>
                            Share this Product
                        </p>
                        <i class="fab fa-facebook-f icons"></i>
                        <i class="fab fa-twitter icons"></i>
                </v-col>
                <v-col>
                        <p>{{proInfo.activeProduct.productName}}</P>
                <hr>
                <p><strong>&#8358; {{proInfo.activeProduct.productPrice}}</strong>
                </p>
                <hr>
                <b-button variant="info" class="btn-cart">ADD TO CART</b-button>

                <hr>
                <h6>PROMOTIONS</h6>
                <p>
                    Get discount when you sign up to our wallet for easy transaction
                </p>
                <p>
                    Use card payment for a quick and safer delivery
                </p>

                </v-col>
            </v-row>

      </v-col>

      <v-col
        cols="6"
        md="4"
      >
        <h6>DELIVERY and RETURNS</h6>
        <hr>
        <i class="fas fa-car-side icons"></i>
        <div class="info-right1"><strong>Delivery Information</strong>
                    <p>Normally delivered between Friday 27 Mar and Monday 30 Mar. 
                        Please check exact dates in the Checkout page.See more</p>
                </div>
        <div class="icon-sty"><i class="fas fa-undo-alt icons"></i></div>
                <div class="info-right1"><strong>Return Policy</strong>
                    <p>Free return within 15 days for Jumia Mall items
                 and 7 days for other eligible items.See more</p>
                </div>
        
      

      </v-col>

    </v-row>

    <div>
                <h5>Product Description</h5>
                <hr>
                {{proInfo.activeProduct.productDescription}}

            </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'ProductInfo',
    computed: mapState({
            proInfo: 'products'
        }),
        created () {
            console.log(this.proInfo);
        }
}

</script>

<style scoped>
/* .row-inner {
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
} */
</style>