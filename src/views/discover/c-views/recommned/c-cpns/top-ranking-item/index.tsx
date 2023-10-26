import React, { FC, memo, ReactNode } from 'react'
import { TopRankingItemWrapper } from '@/views/discover/c-views/recommned/c-cpns/top-ranking-item/style'

interface IProps {
  children?: ReactNode
}
const TopRankingItem: FC<IProps> = () => {
  return <TopRankingItemWrapper>top ranking item</TopRankingItemWrapper>
}

export default memo(TopRankingItem)
