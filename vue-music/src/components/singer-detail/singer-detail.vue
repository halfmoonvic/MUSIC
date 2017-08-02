<template>
    <transition name="slide">
        <div class="singer-detail">歌手详情</div>
    </transition>
</template>

<script>
import {getSingerDetail} from 'api/singer'
import {createSong} from 'common/js/song'
import {ERR_OK} from 'api/config'
import {mapGetters} from 'vuex'

export default {
    name: 'singer-detail',
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {
            songs: () => {[]}
        };
    },
    created() {
        this._getSingerDetail()
    },
    computed: {
        ...mapGetters([
            'singer'
        ])
    },
    methods: {
        _getSingerDetail() {
            getSingerDetail(this.singer.id).then((res) => {
                // console.log(res.data.list);
                if (res.code === ERR_OK) {
                    this.songs = this.nomalSingerDetail(res.data.list)
                    // console.log(this.songs);
                    console.log(res.data.list);
                }
            })
        },
        nomalSingerDetail(list) {
            let ret = []
            list.forEach((item, index) => {
                let musicData = {item}
                // if (musicData.songid && musicData.albummid) {
                  ret.push(createSong(musicData))
                // }
            })
            return ret
        }
    }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
  .singer-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: $color-background

  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
