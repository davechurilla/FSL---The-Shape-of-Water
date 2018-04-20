<template>
<slider class="laurels" animation="fade" :interval="6000" :indicators="false" :control-btn="false" height="auto">
  <slider-item style="display:block;">
    <div class="quote top"><img src="../assets/laurels.png" alt="Laurels"></div>
  </slider-item>
  <slider-item >
    <div class="quote top"><img src="../assets/critic-1.png" alt="quote"></div>
  </slider-item>
  <slider-item >
    <div class="quote top"><img src="../assets/critic-2.png" alt="quote"></div>
  </slider-item>  
  <slider-item >
    <div class="quote top"><img src="../assets/critic-3.png" alt="quote"></div>
  </slider-item>  
</slider>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider';
 
export default {
name: 'laurels',
  components: {
    Slider,
    SliderItem
  },
  data: {
    auto:true,
    indicators: false
  }   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
   @import '../scss/laurels.scss';
</style>
