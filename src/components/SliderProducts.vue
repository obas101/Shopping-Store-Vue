<template>
  <div>
    <div>
      <v-carousel hide-delimiters cycle height="500" :show-arrows="false">
        <v-carousel-item>
          <v-img :src="require('../assets/sliders/slider2.jpg')"></v-img>
        </v-carousel-item>

        <v-carousel-item
          :src="require('../assets/sliders/slider3.jpg')"
        ></v-carousel-item>

        <v-carousel-item
          :src="require('../assets/sliders/slider4.jpg')"
        ></v-carousel-item>

        <v-carousel-item
          :src="require('../assets/sliders/slider5.jpg')"
        ></v-carousel-item>
      </v-carousel>
      <v-carousel-item
        :src="require('../assets/sliders/slider7.jpg')"
      ></v-carousel-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderProducts",
};
</script>

<style scoped>
</style>