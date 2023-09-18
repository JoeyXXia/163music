import React, { FC, memo, ReactNode } from 'react'
import { RecommendWrapper } from '@/views/discover/c-views/recommned/style'
import AreaHeaderV1 from '@/components/area-header-v1'
// import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}
const HotRecommend: FC<IProps> = () => {
  // const { hotRecommends } = useAppSelector(
  //   (state) => ({
  //     hotRecommends: state.recommend.hotRecommend
  //   }),
  //   shallowEqualApp
  // )
  return (
    <RecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      />

      {/*<div className="recommend-list">{hotRecommends.map( (item => {*/}
      {/*  return */}
      {/*}))}</div>*/}
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)
