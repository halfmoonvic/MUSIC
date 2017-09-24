<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script type="text/javascript">
// **** 组件名称 大驼峰 ****
// * 本地公用变量 公用函数 *
import {ERR_OK} from 'api/config'
import {getSongList} from 'api/recommend'
import {createSong} from 'common/js/song'
// ***** 第三方 组件库 *****
// ***** 本地 公用组件 *****
import MusicList from 'components/music-list/music-list'
import {mapGetters} from 'vuex'
// ** 当前组件的 子组件等 **

export default {
  name: 'disc',
  props: {
  },
  data() {
    return {
      songs: []
    }
  },
  created() {
    this._getSongList()
  },
  computed: {
    title() {
      return this.disc.disname
    },
    bgImage() {
      return this.disc.imgurl
    },
    ...mapGetters([
      'disc'
    ])
  },
  methods: {
    _getSongList() {
      getSongList(this.disc.dissid).then((res) => {
        if (res.code === ERR_OK) {
          this.songs = this._normalizeSongs(res.cdlist[0].songlist)
        }
      })
    },
    _normalizeSongs(list) {
      let ret = []
      list.forEach((musicData) => {
        if (musicData.songid && musicData.albumid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  },
  components: {
    MusicList
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
@import "~common/stylus/mixin"

.slider-enter-active, .slider-leave-active
  transition: all 0.3s
.slider-enter, .slider-leave-to
  transform: translate3d(100%, 0, 0)
</style>
