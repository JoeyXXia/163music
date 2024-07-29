import { configureStore } from '@reduxjs/toolkit'
import {
  shallowEqual,
  TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux'

import recommendReducer from '../views/discover/c-views/recommned/store/recommend'
import playerReducer from '@/views/player/store/player'

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    player: playerReducer
  }
})

type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual
export default store
