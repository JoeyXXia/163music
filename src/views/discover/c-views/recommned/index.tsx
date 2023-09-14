import React, { FC, memo, ReactNode, useEffect } from 'react'
import { RecommendWrapper } from '@/views/discover/c-views/recommned/style'
import TopBanner from '@/views/discover/c-views/recommned/c-cpns/top-banner'
import { useAppDispatch } from '@/store'
import { fetchBannerDataAction } from '@/views/discover/c-views/recommned/store/recommend'

interface IProps {
  children?: ReactNode
}
const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])
  return (
    <RecommendWrapper>
      <TopBanner />
    </RecommendWrapper>
  )
}

export default memo(Recommend)
