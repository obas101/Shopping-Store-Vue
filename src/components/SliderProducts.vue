<template>
    <div>
      <div>
        <v-carousel
          cycle
          height="400"
        >
          <b-carousel-slide class="sliderh"
            :img-src="require('../assets/sliders/slider2.jpg')"
          ></b-carousel-slide>

          <b-carousel-slide class="sliderh"
            :img-src="require('../assets/sliders/slider3.jpg')"
          ></b-carousel-slide>

          <b-carousel-slide class="sliderh"
            :img-src="require('../assets/sliders/slider4.jpg')"
          ></b-carousel-slide>
          
          <b-carousel-slide class="sliderh"
            :img-src="require('../assets/sliders/slider5.jpg')"
          ></b-carousel-slide>

        </v-carousel>
          <b-carousel-slide class="sliderh"
            :img-src="require('../assets/sliders/slider7.jpg')"
          ></b-carousel-slide>
        
      </div>
    </div>
</template>

<script>
export default {
    name: 'SliderProducts'
    
}
</script>

<style scoped>
   .sliderh{
  height: 500px;
  width: 500px;
  
}
</style>