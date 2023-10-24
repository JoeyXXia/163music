import React, { FC, memo, ReactNode } from 'react'
import { SingerWrapper } from '@/views/discover/c-views/recommned/c-cpns/settle-singer/style'

interface IProps {
  children?: ReactNode
}
const SettleSinger: FC<IProps> = () => {
  return <SingerWrapper></SingerWrapper>
}

export default memo(SettleSinger)
