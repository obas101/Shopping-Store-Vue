<template>
  <div id="app">
    <Header />
    <router-view/>

    <div class="footy">
    <Footer />
    </div>

    <div  class="foot">
      <b-container class="bv-example-row footy" >
          <b-row class="text-center">
            <b-col class="col-style" ><Socials /></b-col>
            <b-col><Payments /></b-col>
          </b-row>
        </b-container>
    </div>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Socials from './components/Socials.vue'
import Payments from './components/Payments.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Socials,
    Payments
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F5F5F5;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>