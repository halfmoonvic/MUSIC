import {mapGetters} from 'vuex'

export const playlistMixin = {
    computed: {
        ...mapGetters([
            'playlist'
        ])
    },
    mounted() {
        this.handlePlaylist(this.playlist)
    },
    activated() {  // keep-alive 的组件，切换回来的时候 调用此勾子
        this.handlePlaylist(this.playlist)
    },
    watch: {
        playlist(newVal) {
            this.handlePlaylist(newVal)
        }
    },
    methods: {
        handlePlaylist() {
            throw new Error('component must implement handlePlaylist method')
        }
    }
}

export const learnMixin = {
    mounted() {
        console.log('执行 mounted 勾子')
        this.mixinMethods('mounted')
    },
    activated() {
        console.log('执行 activated 勾子')
        this.mixinMethods('activated')
    },
    methods: {
        mixinMethods(param) {
            console.log(`执行方法 mixinMethods 方法，来自于${param}`)
        }
    }
}
