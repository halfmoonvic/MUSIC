import * as types from './mutation-types'

import {playMode} from 'common/js/config'

// 教程做法 量很小 就不分开了
const state = {
    singer: {},
    playing: false,
    fullScreen: false,
    playlist: [],
    sequenceList: [],
    mode: playMode.sequence,
    currentIndex: -1,
    disc: {}
}

export default state
