<template>
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
            <slot>
            </slot>
        </div>
        <div class="dots">
            <span class="dot"></span>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
import {addClass} from 'common/js/dom';

export default {
    name: 'slider',
    props: {
        loop: {
            type: Boolean,
            default: true
        },
        autoPlay: {
            type: Boolean,
            default: true
        },
        interval: {
            type: Number,
            default: 400
        }
    },
    data() {
        return {

        };
    },
    mounted() {
        // setTimeout(function () {
        this.$nextTick(function () {
            this._setSliderWidth();
            this._initSlider();
        })
        // }, 20)
    },
    methods: {
        _setSliderWidth: function() {
            this.children = this.$refs.sliderGroup.children;
            let width = 0;
            let sliderWidth = this.$refs.clientWidth;
            for (let i = 0; i < this.children.length; i++) {
                let child = this.child[i]
                addClass(clild, 'slideer-item');
                child.style.width = sliderWidth + 'px';
                width += sliderWidth;
            }

            if (this.loop) {
                width += 2 * sliderWidth
            }
            this.$refs.sliderGroup.style.width = width + 'px';
        },
        _initSlider: function() {
            this.slider = new BScroll(this.$refs.slider, {
                scrollx: true,
                scrolly: false,
                momentum: false,
                snap: true,
                snaploop: this.loop,
                snapThreshold: 0.3,
                snapSpeed: 400,
                click: true
            })
        }
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
