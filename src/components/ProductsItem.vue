<template>
    <div>
        <img class="image-style" :src="proInfo.itemPic">
        <p>
            {{proInfo.itemName}}
        </p>
        <p>
           &#8358;{{proInfo.price}}
        </p>
        <b-button variant="success" @click="gotoProduct(proInfo)"><a href="#" >Buy Now</a></b-button>    </div>
</template>

<script>
export default {
name: 'ProductsItem',
props: ['proInfo'],
methods: {
    gotoProduct(proInfo){
        this.$store.commit("setSelectedProduct", proInfo);
        this.$router.push({ path: "/productinfo"})
    }
}
}
</script>

<style scoped>
.image-style {
    width: 200px;
    height: 200px;
}
</style>