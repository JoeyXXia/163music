import { configureStore } from '@reduxjs/toolkit'
import {
  shallowEqual,
  TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux'

const store = configureStore({
  reducer: {}
})

type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApo = shallowEqual
export default store
