<template>
    <div class="singer" ref="singer">
        <list-view @select="selectSinger" :data="singers"></list-view>
        <router-view></router-view>
    </div>
</template>

<script>
import {getSingerList} from 'api/singer';
import {ERR_OK} from 'api/config';
import Singer from 'common/js/singer';
import listView from '../../base/listview/listview.vue'
import {mapMutations} from 'vuex'

const HOT_NAME = '热门';
const HOT_SINGER_LEN = 10;

export default {
    name: 'singer',
    data() {
        return {
            singers: []
        };
    },
    components: {
        listView
    },
    created() {
        this._getSingerList();
    },
    methods: {
        _getSingerList() {
            getSingerList().then((res) => {
                if (res.code === ERR_OK) {
                    this.singers = this._normalizeSinger(res.data.list);
                }
            })
        },
        _normalizeSinger(list) {
            let map = {
                hot: {
                    title: HOT_NAME,
                    item: []
                }
            }
            list.forEach((item, index) => {
                if (index < HOT_SINGER_LEN) {
                    map.hot.item.push(new Singer({
                        id: item.Fsinger_mid,
                        name: item.Fsinger_name
                    }))
                }
                const key = item.Findex
                if (!map[key]) {
                    map[key] = {
                        title: key,
                        item: []
                    }
                }
                map[key].item.push(new Singer({
                        id: item.Fsinger_mid,
                        name: item.Fsinger_name
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
            console.log('不用singer组件来push到singer-detail组件，直接在list-view中操作');
            // console.log(singer);
            // this.$router.push({
            //     path: `singer/${singer.id}`
            // })
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
