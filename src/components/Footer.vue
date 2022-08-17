<template>
  <v-container>
    <v-row class="footsty">
      <v-col>
        <h6 class="pl-4"><strong>LET US HELP YOU</strong></h6>
        <ul class="pl-4 pt-2">
          <li>Help Center</li>
          <li>Contact Us</li>
          <li>How to shop on Obas Shoes</li>
          <li>Delivery options and timelines</li>
          <li>How to return a product</li>
          <li>Corporate and bulk purchases</li>
        </ul>
      </v-col>
      <v-col>
        <h6 class="pl-4"><strong>ABOUT JUST SHOES</strong></h6>
        <ul class="pl-4 pt-2">
          <li>About us</li>
          <li>Careers</li>
          <li>T & C</li>
          <li>Privacy</li>
        </ul>
      </v-col>
      <v-col
        ><h6 class="pl-4"><strong>EARN WITH US</strong></h6>
        <ul class="pl-4 pt-2">
          <li>Sell Related Items</li>
          <li>Become an Affiliate</li>
        </ul></v-col
      >
      <v-col
        ><h6 class="pl-4"><strong>COUNTRIES</strong></h6>
        <ul class="pl-4 pt-2">
          <li>Nigeria</li>
          <li>Ghana</li>
          <li>South Africa</li>
        </ul></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Footer",
};
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
  text-align: left;
}
h6 {
  color: white;
  text-align: left;
}

.ul {
  margin-top: 3rem;
}
</style>