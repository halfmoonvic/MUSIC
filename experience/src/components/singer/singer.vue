<template>
    <div class="singer">
        <list-view @select="selectSinger" :data="singers"></list-view>
        <router-view></router-view>
    </div>
</template>

<script>
import Scroll from 'base/scroll/scroll';
import ListView from 'base/listview/listview';
import {getSingerList} from 'api/singer';
import Singer from 'common/js/singer';
import {ERR_OK} from 'api/config';


const HOT_NAME = '热门';
const HOT_SINGER_LEN = 10;

export default {
    name: 'singer',
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {
            singers: []
        };
    },
    components: {
        Scroll,
        ListView
    },
    created() {
        this._getSingerList();
    },
    methods: {
        _getSingerList() {
            getSingerList().then((res) => {
                if (res.code === ERR_OK) {
                    this.singers = this._normalizeSinger(res.data.list)
                    // console.log(this.singers)
                }
            })
        },
        _normalizeSinger(list) {
            let map = {
                'hot': {
                    title: HOT_NAME,
                    items: []
                }
            }

            // 填充热门数据
            list.forEach((v, i) => {
                if (i < HOT_SINGER_LEN) {
                    map.hot.items.push(new Singer({
                        id: v.Fsinger_mid,
                        name: v.Fsinger_name
                    }))
                }
                const key = v.Findex
                if (!map[key]) {
                    map[key] = {
                        title: key,
                        items: []
                    }
                }
                map[key].items.push(new Singer({
                    id: v.Fsinger_mid,
                    name: v.Fsinger_name
                }))
            })
            // 为了得到有序列表，我们需要处理map
            let hot = [];
            let ret = [];
            for (let key in map) {
                let val = map[key];
                if (val.title.match(/[a-zA-Z]/)) {
                    ret.push(val)
                } else if (val.title === HOT_NAME) {
                    hot.push(val)
                }
            }
            ret.sort((a, b) => {
                return a.title.charCodeAt(0) - b.title.charCodeAt(0);
            })
            return hot.concat(ret)
        },
        selectSinger(singer) {
            this.$router.push({
                path: `/singer/${singer.id}`
            })
        }
    }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>

