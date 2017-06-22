<template>
    <div class="food">
        <slider :slider="slider"></slider>
    </div>
</template>

<script  type="text/ecmascript-6">
import jsonp from 'common/js/jsonp';
import {getRecommend} from './../../api/recommend.js'
import {ERR_OK, commonParams, options} from './../../api/config'
import BScroll from 'better-scroll'
import slider from './../../base/slider/slider.vue';

export default {
    name: 'food',
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {
            slider: []
        };
    },
    components: {
        slider
    },
    created() {
        this._getRecommend();
    },
    methods: {
        _getRecommend() {
            getRecommend().then(res => {
                if (res.code === ERR_OK) {
                    // console.log(res.data.slider);
                    this.slider = res.data.slider
                }
            })
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
