import React, { FC, memo, ReactNode, useEffect } from 'react'
import { RecommendWrapper } from '@/views/discover/c-views/recommned/style'
import TopBanner from '@/views/discover/c-views/recommned/c-cpns/top-banner'
import { useAppDispatch } from '@/store'
import {
  fetchBannerDataAction,
  fetchNewAlbumAction,
  fetchRecommendAction
} from '@/views/discover/c-views/recommned/store/recommend'
import HotRecommend from '@/views/discover/c-views/recommned/c-cpns/hot-recommend'
import NewAlbum from '@/views/discover/c-views/recommned/c-cpns/new-album'
import UserLogin from '@/views/discover/c-views/recommned/c-cpns/user-login'
import SettleSinger from '@/views/discover/c-views/recommned/c-cpns/settle-singer'

interface IProps {
  children?: ReactNode
}
const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchRecommendAction())
    dispatch(fetchNewAlbumAction())
  }, [])
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
        </div>
        <div className="right">
          <UserLogin />
          <SettleSinger />
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
