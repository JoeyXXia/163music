import React, { FC, memo, ReactNode } from 'react'
import AreaHeaderV1 from '@/components/area-header-v1'
import { shallowEqualApp, useAppSelector } from '@/store'
import SongMenuItem from '@/components/song-menu-item'
import { HotRecommendWrapper } from '@/views/discover/c-views/recommned/c-cpns/hot-recommend/stylle'

interface IProps {
  children?: ReactNode
}
const HotRecommend: FC<IProps> = () => {
  const { hotRecommends } = useAppSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommend
    }),
    shallowEqualApp
  )
  return (
    <HotRecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      />

      <div className="recommend-list">
        {hotRecommends.map((item) => {
          return <SongMenuItem key={item.id} itemData={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
