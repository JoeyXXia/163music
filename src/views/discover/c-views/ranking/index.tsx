import React, { FC, memo, ReactNode } from 'react'
import {
  RankingLeft,
  RankingRight,
  RankingWrapper
} from '@/views/discover/c-views/ranking/style'
import TopRanking from '@/views/discover/c-views/ranking/cpns/top-ranking'
import RankingHeader from '@/views/discover/c-views/ranking/cpns/ranking-header'
import RankingList from '@/views/discover/c-views/ranking/cpns/ranking-list'

interface IProps {
  children?: ReactNode
}
const Ranking: FC<IProps> = () => {
  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <TopRanking />
      </RankingLeft>

      <RankingRight>
        <RankingHeader />
        <RankingList />
      </RankingRight>
    </RankingWrapper>
  )
}

export default memo(Ranking)
