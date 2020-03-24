<template>
    <b-container class="bv-example-row">
  <b-row>
    <b-col>
        <img class="image-style" :src="proInfo.itemPic">
        <p>
            {{proInfo[0].itemName}}
        </p>
        <p>
           &#8358;{{proInfo[0].price}}
        </p>
    </b-col>



    <b-col><h6>DELIVERY & RETURNS</h6>
        <strong>Delivery Information</strong>
            <p>Normally delivered between Friday 27 Mar and Monday 30 Mar. 
                Please check exact dates in the Checkout page.See more</p>

        <strong>Return Policy</strong>
            <p>Free return within 15 days for Jumia Mall items
                 and 7 days for other eligible items.See more</p>
    </b-col>
  </b-row>
</b-container>
</template>

<script>

export default {
    name: 'ProductInfo',
    props: [
        'proinfo'
    ]
}
</script>

<style scoped>

</style>