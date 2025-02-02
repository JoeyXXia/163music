import * as actionTypes from './constants'
import { getTopList, getRankingList } from '../service/ranking'

const changeTopListAction = (res: { list: any }) => ({
  type: actionTypes.CHANGE_TOP_LIST,
  topList: res.list
})

const changePlayListAction = (res: { playList: any }) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  topList: res.playList
})

export const changeCurrentIndex = (index: any) => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  currentIndex: index
})

export const getTops = () => {
  return (dispatch: (arg0: { type: string; topList: any }) => any) => {
    getTopList().then((res) => dispatch(changeTopListAction(res)))
  }
}

export const getRanking = (id: number) => {
  return (dispatch: (arg0: { type: string; topList: any }) => void) => {
    getRankingList(id).then((res) => {
      dispatch(changePlayListAction(res))
    })
  }
}
