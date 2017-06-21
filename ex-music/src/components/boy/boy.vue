<template>
    <div>我是男孩</div>
</template>

<script>
import jsonp from 'common/js/jsonp';
import {getRecommend} from './../../api/recommend.js'
import {ERR_OK, commonParams, options} from './../../api/config'
// import {} from './config.js';

export default {
    name: 'boy',
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {

        };
    },
    created() {
        this._getRecommend();
    },
    methods: {
        _getRecommend: () => {
            // getRecommend().then(res => {
            //     if (res.code === ERR_OK) {
            //         console.log(res.data.slider);
            //     }
            // })

            const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
            const data = Object.assign({}, commonParams, {
                platform: 'h5',
                uin: 0,
                needNewCode: 1
            });
            jsonp(url, data, options).then(res => {
                if (res.code === ERR_OK) {
                    console.log(res.data.slider);
                }
            })
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
