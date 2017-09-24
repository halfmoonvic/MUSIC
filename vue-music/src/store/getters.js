export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

// Getters 也可以接受其他 getters 作为第二个参数：
export const currentSong = (state, getters) => {
    // return state.playlist[state.currentIndex] || {}
    return state.playlist[getters.currentIndex] || {}
}

export const disc = (state) => state.disc
// const getters = {
//     singer: state => state.singer
//     currentSong(state) {
//         return state.playlist[state.currentIndex] || {}
//     }
// }

// export default getters
