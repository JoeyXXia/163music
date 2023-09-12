import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
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
interface IRecommendState {
  banners: any[]
  hotRecommend: any[]
  newAlbums: []
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommend: [],
  newAlbums: []
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
    }
  }
})

export const {
  changeBannerAction,
  changeRecommendsAction,
  changeAlbumsAction
} = recommendSlice.actions
export default recommendSlice.reducer
