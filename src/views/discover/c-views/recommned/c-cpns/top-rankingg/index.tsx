import React, { FC, memo, ReactNode } from 'react'
import { TopRankingWrapper } from '@/views/discover/c-views/recommned/c-cpns/top-rankingg/style'
import TopRankingItem from '@/views/discover/c-views/recommned/c-cpns/top-ranking-item'
import AreaHeaderV1 from '@/components/area-header-v1'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}
const TopRanking: FC<IProps> = () => {
  const { rankings = [] } = useAppSelector(
    (state) => ({
      rankings: state.recommend.rankings
    }),
    shallowEqualApp
  )
  return (
    <TopRankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {rankings.map((item) => {
          return <TopRankingItem key={item.id} itemData={item} />
        })}
      </div>
    </TopRankingWrapper>
  )
}

export default memo(TopRanking)
