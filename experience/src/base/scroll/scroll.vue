<template>
    <div ref="wrapper" data-comp="better-scroll 滚动组件">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name: 'scroll',
    props: {
        data: {
            type: Array,
            default: null
        },
        probeType: {
            type: Number,
            default: 1
        },
        click: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {

        };
    },
    mounted() {
        setTimeout(() => {
            this._initScroll();
        }, 20)
    },
    methods: {
        _initScroll() {
            if (!this.$refs.wrapper) {return;}
            this.scroll = new BScroll(this.$refs.wrapper, {
                probeType: this.probeType,
                click: this.click
            })
        },
        disable() {
          this.scroll && this.scroll.disable()
        },
        enable() {
          this.scroll && this.scroll.enable()
        },
        refresh() {
            this.scroll && this.scroll.refresh();
        },
        scroll() {
            this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
        },
        scrollToElement() {
            this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
        }
    },
    watch: {
        data() {
            setTimeout(() => {
                this.refresh();
            }, 20)
        }
    }
};
</script>

<style lang="sass" scoped>

</style>
