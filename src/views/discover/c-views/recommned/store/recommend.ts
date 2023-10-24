import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getArtistList,
  getBanners,
  getHotRecommend,
  getNewAlbum
} from '@/views/discover/c-views/recommned/service/recommend'

export const fetchBannerDataAction = createAsyncThunk(
  'banner',
  async (arg, { dispatch }) => {
    const res = await getBanners()
    dispatch(changeBannerAction(res.banners))
  }
)

export const fetchRecommendAction = createAsyncThunk(
  'recommend',
  async (arg, { dispatch }) => {
    const res = await getHotRecommend(8)
    dispatch(changeRecommendsAction(res.result))
  }
)

export const fetchNewAlbumAction = createAsyncThunk(
  'newAlbum',
  async (arg, { dispatch }) => {
    const res = await getNewAlbum()
    dispatch(changeAlbumsAction(res.albums))
  }
)

export const fetchSettleSingerAction = createAsyncThunk(
  'settleSinger',
  async (arg, { dispatch }) => {
    const res = await getArtistList(5)
    dispatch(changeSettleSingerAction(res.artists))
  }
)

interface IRecommendState {
  banners: any[]
  hotRecommend: any[]
  newAlbums: any[]
  settleSinger: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommend: [],
  newAlbums: [],
  settleSinger: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerAction(state, { payload }) {
      state.banners = payload
    },
    changeRecommendsAction(state, { payload }) {
      state.hotRecommend = payload
    },
    changeAlbumsAction(state, { payload }) {
      state.newAlbums = payload
    },
    changeSettleSingerAction(state, { payload }) {
      state.settleSinger = payload
    }
  }
})

export const {
  changeBannerAction,
  changeRecommendsAction,
  changeAlbumsAction,
  changeSettleSingerAction
} = recommendSlice.actions
export default recommendSlice.reducer
