n<template>
    <div>
        <img class="image-style" :src="proInfo.itemPic">
        <p>
            {{proInfo.itemName}}
        </p>
        <p>
           &#8358;{{proInfo.price}}
        </p>
        <b-button variant="success">Buy Now</b-button>    </div>
</template>

<script>
export default {
name: 'ProductsItem',
props: ['proInfo']    

}
</script>

<style scoped>
.image-style {
    width: 200px;
    height: 200px;
}

</style>