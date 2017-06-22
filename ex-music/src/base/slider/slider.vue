<template>
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
            <div class="" v-for="(item, index) in slider">
                <a :href="item.linkUrl">
                    <img :src="item.picUrl">
                </a>
            </div>
        </div>
        <div class="dots">
            <span class="dot"></span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'slider',
    props: {
        slider: {
            type: Array
        }
    },
    data() {
        return {

        };
    }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      transform: translateZ(1px)
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>
