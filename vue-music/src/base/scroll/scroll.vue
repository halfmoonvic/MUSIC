<template>
  <div ref="wrapper" class="scroll-component">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: 'scroll',
    props: {
        probeType: {
          type: Number,
          default: 1
        },
        click: {
          type: Boolean,
          default: true
        },
        listenScroll: {
            type: Boolean,
            default: false
        },
        data: {
            type: Array,
            default: null
        }
    },
    data() {
        return {

        };
    },
    mounted() {
        setTimeout(() => {
            this._initScroll()
        }, 20)
    },
    methods: {
        _initScroll() {
            if (!this.$refs.wrapper) {
              return
            }
            this.scroll = new BScroll(this.$refs.wrapper, {
              probeType: this.probeType,
              click: this.click
            })

            if (this.listenScroll) {
                let me = this;
                this.scroll.on("scroll", (pos) => {
                    me.$emit("scroll", pos)
                })
            }
        },
        disable() {
          this.scroll && this.scroll.disable()
        },
        enable() {
          this.scroll && this.scroll.enable()
        },
        refresh() {
          this.scroll && this.scroll.refresh()
        },
        scrollTo() {
            this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
        },

        _scrollTo(index) {
            this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
        },

        scrollToElement() {
            this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
            // this.scroll && this.scroll.scrollToElement(el, time)
        }
    },
    watch: {
      data() {
        setTimeout(() => {
          this.refresh()
        }, this.refreshDelay)
      }
    }
};
</script>

<style lang="css" scoped>

</style>
