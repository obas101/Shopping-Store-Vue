<template>
    
    <b-container class="bv-example-row mb-3">
  <b-row cols="4" class="footsty">
    <b-col>
        <h6><strong>LET US HELP YOU</strong></h6>
        <ul class="footli">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>How to shop on Obas Shoes </li>
            <li>Delivery options and timelines</li>
            <li>How to return a product</li>
            <li>Corporate and bulk purchases</li>
        </ul>
    </b-col>
    <b-col>
        <h6><strong>ABOUT JUST SHOES</strong></h6>
        <ul class="footli">
            <li>About us</li>
            <li>Careers</li>
            <li>T & C</li>
            <li>Privacy</li>
            
        </ul>
    </b-col>
    <b-col><h6><strong>EARN WITH US</strong></h6>
        <ul class="footli">
            <li>Sell Related Items</li>
            <li>Become an Affiliate</li>
            
        </ul></b-col>
    <b-col><h6><strong>COUNTRIES</strong></h6>
        <ul class="footli">
            <li>Nigeria</li>
            <li>Ghana</li>
            <li>South Africa</li>
            
        </ul></b-col>
  </b-row>
</b-container>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    .footsty {
        background: #212529;
        color: #c7c7cd;
    }
    ul li {
        text-decoration: none;
        list-style-type: none;
        font-size: 14px;

    }
    h6 {
        color: white;
    }

    .ul {
        margin-top: 3rem;
    }
</style>