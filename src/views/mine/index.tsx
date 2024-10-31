import React, { FC, memo, ReactNode } from 'react'
import { MineMusicWrapper } from '@/views/mine/style'

interface IProps {
  children?: ReactNode
}
const Mine: FC<IProps> = () => {
  return (
    <MineMusicWrapper>
      <h2>登录我的音乐</h2>
      <img src="../../assets/img/mine_sprite.png" alt="yyy" />
    </MineMusicWrapper>
  )
}

export default memo(Mine)
