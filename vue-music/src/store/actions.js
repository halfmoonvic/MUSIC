import * as types from './mutation-types'
import {playMode} from 'common/js/config'
import {shuffle} from 'common/js/util'

// export const selectPlay = function ({commit, state}, {list, index}) {
//     commit(types.SET_SEQUENCE_LIST, list)
//     commit(types.SET_PLAYLIST, list)
//     commit(types.SET_CURRENT_INDEX, index)
//     commit(types.SET_FULL_SCREEN, true)
//     commit(types.SET_PLAYING_STATE, true)
// }

function findIndex(list, song) {
    return list.findIndex((item) => {
        return item.id === song.id
    })
}

const actions = {
    selectPlay: ({commit, state}, {list, index}) => {
        commit(types.SET_SEQUENCE_LIST, list)
        // if (state.mode === playMode.random) {
        //     // 随机播放之后，主动点歌时，又造了一个 随机播放列表
        //     let randomList = shuffle(list)
        //     commit(types.SET_PLAYLIST, randomList)
        //     index = findIndex(randomList, list[index])
        // } else {
        //     commit(types.SET_PLAYLIST, list)
        // }
        commit(types.SET_PLAYLIST, list)
        commit(types.SET_CURRENT_INDEX, index)
        commit(types.SET_FULL_SCREEN, true)
        commit(types.SET_PLAYING_STATE, true)
    },
    randomPlay: ({commit, state}, {list}) => {
        commit(types.SET_PLAY_MODE, playMode.random)
        commit(types.SET_SEQUENCE_LIST, list)
        let randomList = shuffle(list)
        commit(types.SET_PLAYLIST, randomList)
        commit(types.SET_CURRENT_INDEX, 0)
        commit(types.SET_FULL_SCREEN, true)
        commit(types.SET_PLAYING_STATE, true)
    }
}

export default actions
