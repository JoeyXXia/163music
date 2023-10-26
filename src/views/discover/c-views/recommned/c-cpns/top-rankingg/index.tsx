import React, { FC, memo, ReactNode } from 'react'
import { TopRankingWrapper } from '@/views/discover/c-views/recommned/c-cpns/top-rankingg/style'
import TopRankingItem from '@/views/discover/c-views/recommned/c-cpns/top-ranking-item'

interface IProps {
  children?: ReactNode
}
const TopRanking: FC<IProps> = () => {
  return (
    <TopRankingWrapper>
      <TopRankingItem />
    </TopRankingWrapper>
  )
}

export default memo(TopRanking)
