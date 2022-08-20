<template>
  <v-app id="app">
    <Header />
    <router-view />
    <div class="footy">
      <Footer />
    </div>

    <div class="foot">
      <v-container class="bv-example-row footy">
        <v-row class="text-center">
          <v-col class="col-style"><Socials /></v-col>
          <v-col><Payments /></v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Socials from "./components/Socials.vue";
import Payments from "./components/Payments.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Socials,
    Payments,
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  background-color: #f7fbff;
}
</style>